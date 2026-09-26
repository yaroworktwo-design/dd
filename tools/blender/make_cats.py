"""Procedural cat generator for Blender 4.2 (run headless).

    blender -b --python tools/blender/make_cats.py -- <out_dir> [names...]

Builds each cat from metaballs -> voxel-remeshed skin, rigs it with an
armature (automatic weights), paints the coat into vertex colours, adds
eyes/nose/whiskers and keyframes the animation set used by the game.
Blender space: Z up, cat faces -Y (becomes +Z forward in glTF / three.js).
"""
import bpy
import bmesh
import math
import os
import sys
from mathutils import Vector, Quaternion, noise

ARGS = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
OUT = ARGS[0] if ARGS else "public/models"
ONLY = ARGS[1:]
os.makedirs(OUT, exist_ok=True)

CATS = {
    "dymok": dict(  # very chubby dark smoky scottish fold
        width=1.55, belly=1.0, height=1.12, length=1.0, head=1.12, cheeks=1.45,
        leg=0.92, legw=1.35, tail=0.9, tailw=1.3, fold=True, torn=False,
        coat="smoke", eye=(0.66, 0.68, 0.25), faceflat=0.0,
    ),
    "milena": dict(  # slim silver tabby scottish fold
        width=0.95, belly=0.1, height=0.98, length=1.0, head=0.98, cheeks=1.05,
        leg=1.02, legw=0.92, tail=1.0, tailw=1.0, fold=True, torn=False,
        coat="silver_tabby", eye=(0.55, 0.26, 0.05), faceflat=0.0,
    ),
    "pixel": dict(  # tuxedo, player 3
        width=1.0, belly=0.2, height=1.0, length=1.04, head=0.96, cheeks=1.0,
        leg=1.08, legw=0.95, tail=1.15, tailw=0.9, fold=False, torn=False,
        coat="tuxedo", eye=(0.35, 0.72, 0.25), faceflat=0.0,
    ),
    "karniz": dict(  # ginger rooftop bully (boss), torn ear
        width=1.35, belly=0.3, height=1.2, length=1.15, head=1.1, cheeks=1.5,
        leg=1.1, legw=1.3, tail=1.0, tailw=1.1, fold=False, torn=True,
        coat="ginger", eye=(0.78, 0.62, 0.08), faceflat=0.0,
    ),
    "plombir": dict(  # white persian shopkeeper, flat face
        width=1.3, belly=0.5, height=1.05, length=0.95, head=1.12, cheeks=1.35,
        leg=0.85, legw=1.2, tail=0.9, tailw=1.6, fold=False, torn=False,
        coat="white", eye=(0.2, 0.45, 0.85), faceflat=1.0,
    ),
}


EAR_COL = {"smoke": (0.2, 0.2, 0.22), "silver_tabby": (0.55, 0.55, 0.57), "tuxedo": (0.05, 0.05, 0.06),
           "ginger": (0.75, 0.38, 0.12), "white": (0.92, 0.9, 0.86)}


def smooth(a, b, x):
    t = max(0.0, min(1.0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)


def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def build_body(p):
    mb = bpy.data.metaballs.new("skin")
    mb.resolution = 0.011
    mb.render_resolution = 0.011
    mb.threshold = 0.6
    obj = bpy.data.objects.new("skin_mb", mb)
    bpy.context.collection.objects.link(obj)

    W, H, L, B = p["width"], p["height"], p["length"], p["belly"]
    lg, lw = p["leg"], p["legw"]

    def el(co, r, sx=1, sy=1, sz=1, stiff=2.0):
        e = mb.elements.new()
        e.type = "ELLIPSOID"
        e.co = Vector(co)
        # influence radius: visible surface sits at ~0.67 r for these settings
        e.radius = r * 1.5
        e.size_x, e.size_y, e.size_z = sx, sy, sz
        e.stiffness = stiff
        return e

    bz = 0.2 * lg + 0.02
    el((0, -0.12 * L, bz + 0.03 * H), 0.11, 0.66 * W, 0.85, 0.9 * H)
    el((0, 0.01 * L, bz + 0.01 * H), 0.11, 0.64 * W, 0.95, 0.82 * H)
    el((0, 0.13 * L, bz + 0.02 * H), 0.105, 0.68 * W, 0.8, 0.85 * H)
    if B > 0:
        el((0, 0.0, bz - 0.05 * H - 0.02 * B), 0.1, 0.55 * W, 1.1, 0.5 + 0.2 * B, stiff=1.6)
    el((0, -0.2 * L, bz + 0.08 * H), 0.075, 0.8 * W, 0.8, 1.0)
    hs = p["head"]
    hy, hz = -0.28 * L, bz + 0.15 * H
    el((0, hy, hz), 0.08 * hs, 1.05, 0.95, 0.92, stiff=2.5)
    ck = p["cheeks"]
    for s in (-1, 1):
        el((s * 0.032 * hs, hy - 0.022, hz - 0.028 * hs), 0.042 * hs, 0.9 * ck, 0.9, 0.8)
    my = hy - 0.054 * hs + 0.02 * p["faceflat"]
    for s in (-1, 1):
        el((s * 0.014 * hs, my, hz - 0.03 * hs), 0.019 * hs, 1.0, 0.9, 0.85)
    el((0, my + 0.01, hz - 0.05 * hs), 0.015 * hs, 1.0, 0.8, 0.7)
    fx = 0.052 * W ** 0.5
    for s in (-1, 1):
        el((s * fx, -0.15 * L, bz - 0.05), 0.05 * lw, 0.8, 0.9, 1.5)
        el((s * fx, -0.155 * L, bz - 0.12 * lg), 0.034 * lw, 0.8, 0.8, 1.8)
        el((s * fx, -0.16 * L, 0.055), 0.03 * lw, 0.9, 0.9, 1.2)
        el((s * fx, -0.168 * L, 0.022), 0.032 * lw, 0.95, 1.25, 0.65, stiff=2.2)
        el((s * (fx + 0.006), 0.14 * L, bz - 0.03), 0.065 * lw, 0.75, 1.1, 1.3)
        el((s * fx, 0.19 * L, bz - 0.12 * lg), 0.034 * lw, 0.8, 0.9, 1.6)
        el((s * fx, 0.175 * L, 0.055), 0.03 * lw, 0.9, 0.9, 1.2)
        el((s * fx, 0.165 * L, 0.022), 0.032 * lw, 0.95, 1.3, 0.65, stiff=2.2)
    t, tw = p["tail"], p["tailw"]
    for i in range(10):
        f = i / 9
        y = 0.24 * L + f * 0.28 * t
        z = bz + 0.04 - f * 0.12 * t + 0.08 * math.sin(f * 2.4) * t
        el((0, y, z), (0.028 - 0.01 * f) * tw, 1, 1, 1)

    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.convert(target="MESH")
    skin = bpy.context.active_object
    skin.name = "skin"
    mod = skin.modifiers.new("remesh", "REMESH")
    mod.mode = "VOXEL"
    mod.voxel_size = 0.0065
    bpy.ops.object.modifier_apply(modifier="remesh")
    sm = skin.modifiers.new("smooth", "CORRECTIVE_SMOOTH")
    sm.iterations = 6
    sm.use_only_smooth = True
    bpy.ops.object.modifier_apply(modifier="smooth")
    dec = skin.modifiers.new("dec", "DECIMATE")
    dec.ratio = min(1.0, max(0.05, 9000 / max(1, len(skin.data.polygons))))
    bpy.ops.object.modifier_apply(modifier="dec")
    bpy.ops.object.shade_smooth()
    return skin, (hy, hz, hs, bz, fx)


def add_ears(p, head):
    hy, hz, hs, bz, fx = head
    objs = []
    for s in (-1, 1):
        bpy.ops.mesh.primitive_cone_add(vertices=12, radius1=0.027 * hs, radius2=0.002, depth=0.05 * hs)
        e = bpy.context.active_object
        if p["fold"]:
            # scottish fold: small ear folded forward, hugging the skull
            e.scale = (1.15, 0.4, 0.6)
            e.location = (s * 0.044 * hs, hy - 0.002, hz + 0.058 * hs)
            e.rotation_euler = (math.radians(-115), math.radians(s * 35), 0)
        else:
            e.scale = (1.0, 0.45, 1.1)
            e.location = (s * 0.042 * hs, hy + 0.01, hz + 0.075 * hs)
            e.rotation_euler = (math.radians(-12), math.radians(s * 20), 0)
            if p["torn"] and s > 0:
                bm = bmesh.new()
                bm.from_mesh(e.data)
                top = [v for v in bm.verts if v.co.z > 0.01 * hs and v.co.x > 0]  # notch, not the whole ear
                bmesh.ops.delete(bm, geom=top, context="VERTS")
                bm.to_mesh(e.data)
                bm.free()
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        sub = e.modifiers.new("sub", "SUBSURF")
        sub.levels = 1
        bpy.ops.object.modifier_apply(modifier="sub")
        bpy.ops.object.shade_smooth()
        objs.append(e)
    return objs


def coat_color(coat, co, n, head):
    hy, hz, hs, bz, fx = head
    x, y, z = co
    nz = noise.noise(Vector((x * 18, y * 18, z * 18)))
    fine = noise.noise(Vector((x * 90, y * 90, z * 90)))
    under = n.z < -0.35 and z < bz + 0.02 and abs(y) < 0.2
    face = y < hy - 0.035 and z < hz + 0.01
    is_head = y < hy + 0.05 and z > bz + 0.08
    is_leg = z < bz - 0.06 and abs(y) < 0.26
    is_tail = y > 0.24
    paw = z < 0.045

    def mix(a, b, t):
        t = max(0.0, min(1.0, t))
        return tuple(a[i] * (1 - t) + b[i] * t for i in range(3))

    if coat == "silver_tabby":
        base, dark, light = (0.74, 0.74, 0.76), (0.16, 0.16, 0.17), (0.93, 0.93, 0.92)
        base, dark = (0.6, 0.6, 0.62), (0.2, 0.2, 0.21)
        if is_head:
            s = math.sin(x * 300 + 3 * nz) if z > hz + 0.015 else math.sin((z - hz) * 260 + abs(x) * 80 + 2 * nz)
            stripe = 0.0 if face else smooth(0.55, 0.9, s)
        elif is_tail:
            stripe = smooth(0.2, 0.7, math.sin(y * 95 + nz))
        elif is_leg:
            stripe = smooth(0.5, 0.9, math.sin(z * 130 + nz)) * (1.0 if n.y > -0.3 else 0.3)
        else:
            # thin broken mackerel lines + a darker dorsal band
            stripe = smooth(0.45, 0.85, math.sin(y * 85 + 2.6 * nz + abs(x) * 35)) * smooth(-0.4, 0.2, fine + 0.3)
            stripe = max(stripe, smooth(0.035, 0.012, abs(x)) * smooth(0.4, 0.8, n.z))
        c = mix(base, dark, stripe * 0.9)
        if under or face or paw:
            c = mix(c, light, 0.8)
        return mix(c, light, 0.08 * fine)
    if coat == "smoke":
        base, pale = (0.15, 0.15, 0.165), (0.4, 0.39, 0.41)
        c = mix(base, pale, 0.5 + 0.5 * nz - 0.2)
        if face and abs(x) < 0.03:
            c = mix(c, (0.36, 0.35, 0.37), 0.45)
        if is_head and z > hz and abs(x) > 0.025:
            c = mix(c, (0.42, 0.41, 0.43), 0.35)
        if under:
            c = mix(c, pale, 0.4)
        return mix(c, (0.06, 0.06, 0.07), 0.2 * max(0, fine))
    if coat == "tuxedo":
        white = (0.93, 0.93, 0.92)
        black = (0.035, 0.035, 0.04)
        blaze = face and abs(x) < 0.012 + (hz - z) * 0.6
        bib = (y < -0.1 and n.z < 0.1 and n.y < -0.2 and not is_head)
        if under or paw or blaze or bib or (face and z < hz - 0.03):
            return white
        return mix(black, (0.1, 0.1, 0.11), 0.5 + 0.5 * fine)
    if coat == "ginger":
        base, dark, cream = (0.86, 0.43, 0.13), (0.55, 0.2, 0.05), (0.96, 0.82, 0.62)
        stripe = 1.0 if math.sin(y * 60 + 2 * nz + abs(x) * 25) > 0.35 else 0.0
        if is_leg:
            stripe = 1.0 if math.sin(z * 100 + nz) > 0.5 else 0.0
        if is_tail:
            stripe = 1.0 if math.sin(y * 80) > 0.3 else 0.0
        c = mix(base, dark, 0.75 * stripe)
        if under or (face and z < hz - 0.02):
            c = mix(c, cream, 0.7)
        if is_head and abs((z - hz) - x * 0.8) < 0.003 and y < hy - 0.03:
            c = (0.45, 0.2, 0.18)  # scar
        return c
    return mix((0.95, 0.94, 0.9), (0.85, 0.82, 0.76), 0.3 + 0.3 * nz)


def lin(c):
    return tuple(v ** 2.2 for v in c)


def vc_material(name, obj):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    vc = nt.nodes.new("ShaderNodeVertexColor")
    vc.layer_name = "Col"
    nt.links.new(vc.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.85
    obj.data.materials.append(mat)


def paint(obj, coat, head):
    me = obj.data
    attr = me.color_attributes.new("Col", "BYTE_COLOR", "POINT")
    for v in me.vertices:
        attr.data[v.index].color = (*lin(coat_color(coat, v.co, v.normal, head)), 1.0)
    me.color_attributes.active_color = attr
    vc_material("fur", obj)


def simple_mat(name, color, rough=0.5):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1)
    b.inputs["Roughness"].default_value = rough
    return m


def add_face_parts(p, head, ear_objs):
    hy, hz, hs, bz, fx = head
    parts = []
    eye_mat = simple_mat("eye_iris", lin(p["eye"]), 0.05)
    pupil_mat = simple_mat("eye_pupil", (0.005, 0.005, 0.005), 0.05)
    nose_col = (0.2, 0.18, 0.2) if p["coat"] == "smoke" else (0.82, 0.5, 0.5)
    nose_mat = simple_mat("nose", lin(nose_col), 0.35)
    ey = hy - 0.062 * hs + 0.012 * p["faceflat"]
    for s in (-1, 1):
        bpy.ops.mesh.primitive_uv_sphere_add(segments=20, ring_count=12, radius=0.0125 * hs,
                                             location=(s * 0.03 * hs, ey, hz + 0.01 * hs))
        e = bpy.context.active_object
        e.data.materials.append(eye_mat)
        bpy.ops.object.shade_smooth()
        bpy.ops.mesh.primitive_uv_sphere_add(segments=12, ring_count=8, radius=0.007 * hs,
                                             location=(s * 0.0325 * hs, ey - 0.0075 * hs, hz + 0.01 * hs))
        pu = bpy.context.active_object
        pu.location.y = ey - 0.0112 * hs
        pu.scale = (0.5, 0.25, 1.0)
        pu.data.materials.append(pupil_mat)
        parts += [e, pu]
    bpy.ops.mesh.primitive_uv_sphere_add(segments=12, ring_count=8, radius=0.0075 * hs,
                                         location=(0, hy - 0.086 * hs + 0.02 * p["faceflat"], hz - 0.016 * hs))
    n = bpy.context.active_object
    n.scale = (1.1, 0.7, 0.75)
    n.data.materials.append(nose_mat)
    parts.append(n)
    wmat = simple_mat("whisker", (0.95, 0.95, 0.93), 0.3)
    for s in (-1, 1):
        for i in range(5):
            ang = math.radians(-18 + i * 9)
            start = Vector((s * 0.024 * hs, hy - 0.078 * hs + 0.02 * p["faceflat"], hz - 0.03 * hs))
            d = Vector((s * math.cos(ang), -0.35, math.sin(ang))).normalized()
            bpy.ops.mesh.primitive_cone_add(vertices=4, radius1=0.0007, radius2=0.0001, depth=0.085)
            w = bpy.context.active_object
            w.location = start + d * 0.0425
            w.rotation_mode = "QUATERNION"
            w.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
            w.data.materials.append(wmat)
            parts.append(w)
    inner = simple_mat("ear", lin(EAR_COL[p["coat"]]), 0.8)
    for e in ear_objs:
        e.data.materials.append(inner)
        parts.append(e)
    bpy.ops.object.select_all(action="DESELECT")
    for o in parts:
        o.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    bpy.ops.object.join()
    face = bpy.context.active_object
    face.name = "face"
    return face


def build_rig(p, head):
    hy, hz, hs, bz, fx = head
    L, lg, t = p["length"], p["leg"], p["tail"]
    arm_data = bpy.data.armatures.new("rig")
    arm = bpy.data.objects.new("rig", arm_data)
    bpy.context.collection.objects.link(arm)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="EDIT")
    eb = arm_data.edit_bones

    def bone(name, h, tl, parent=None):
        b = eb.new(name)
        b.head, b.tail = Vector(h), Vector(tl)
        if parent:
            b.parent = eb[parent]
        return b

    bone("root", (0, 0, 0), (0, 0.1, 0)).use_deform = False  # would steal paw weights
    bone("hips", (0, 0.16 * L, bz), (0, 0.0, bz + 0.01), "root")
    bone("spine", (0, 0.0, bz + 0.01), (0, -0.16 * L, bz + 0.03), "hips")
    bone("neck", (0, -0.16 * L, bz + 0.03), (0, hy + 0.02, hz - 0.03), "spine")
    bone("head", (0, hy + 0.02, hz - 0.03), (0, hy - 0.07, hz + 0.02), "neck")
    for side, s in (("L", -1), ("R", 1)):
        bone(f"f_up.{side}", (s * fx, -0.15 * L, bz), (s * fx, -0.155 * L, bz - 0.12 * lg), "spine")
        bone(f"f_lo.{side}", (s * fx, -0.155 * L, bz - 0.12 * lg), (s * fx, -0.16 * L, 0.035), f"f_up.{side}")
        bone(f"f_paw.{side}", (s * fx, -0.16 * L, 0.035), (s * fx, -0.2 * L, 0.01), f"f_lo.{side}")
        bone(f"h_up.{side}", (s * fx, 0.15 * L, bz), (s * fx, 0.2 * L, bz - 0.13 * lg), "hips")
        bone(f"h_lo.{side}", (s * fx, 0.2 * L, bz - 0.13 * lg), (s * fx, 0.175 * L, 0.035), f"h_up.{side}")
        bone(f"h_paw.{side}", (s * fx, 0.175 * L, 0.035), (s * fx, 0.14 * L, 0.01), f"h_lo.{side}")

    def tp(f):
        return (0, 0.24 * L + f * 0.28 * t, bz + 0.04 - f * 0.12 * t + 0.08 * math.sin(f * 2.4) * t)
    prev = "hips"
    for i in range(5):
        bone(f"tail{i}", tp(i / 5) if i else (0, 0.2 * L, bz + 0.03), tp((i + 1) / 5), prev)
        prev = f"tail{i}"
    bpy.ops.object.mode_set(mode="OBJECT")
    return arm


def skin_to_rig(skin, face, arm):
    bpy.ops.object.select_all(action="DESELECT")
    skin.select_set(True)
    arm.select_set(True)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")
    # face parts are rigidly bound to the head bone via a full-weight group
    mod = face.modifiers.new("arm", "ARMATURE")
    mod.object = arm
    vg = face.vertex_groups.new(name="head")
    vg.add(list(range(len(face.data.vertices))), 1.0, "REPLACE")
    face.parent = arm


def rest_q(arm, name):
    return arm.data.bones[name].matrix_local.to_quaternion()


def local_rot(arm, name, axis, deg):
    """Rotation about an armature-space axis, expressed in bone-local space."""
    a = rest_q(arm, name).inverted() @ Vector(axis)
    return Quaternion(a, math.radians(deg))


def key_pose(arm, frame, pose):
    for pb in arm.pose.bones:
        q = Quaternion()
        for axis, deg in pose.get(pb.name, []):
            q = local_rot(arm, pb.name, axis, deg) @ q
        pb.rotation_mode = "QUATERNION"
        pb.rotation_quaternion = q
        pb.keyframe_insert("rotation_quaternion", frame=frame)
    rootb = arm.pose.bones["root"]
    rootb.location = rest_q(arm, "root").inverted() @ Vector(pose.get("root_loc", (0, 0, 0)))
    rootb.keyframe_insert("location", frame=frame)


X, Y, Z = (1, 0, 0), (0, 1, 0), (0, 0, 1)


def gait(ph, amp, lift, bobamp, crouch=0.0, gallop=False):
    pose = {}
    offs = {"h_L": 0.0, "f_L": 0.25, "h_R": 0.5, "f_R": 0.75}
    if gallop:
        offs = {"h_L": 0.0, "h_R": 0.08, "f_L": 0.5, "f_R": 0.58}
    for key, o in offs.items():
        leg, side = key.split("_")
        q = (ph + o) % 1.0
        swing = math.sin(q * 2 * math.pi)
        liftp = max(0.0, math.cos(q * 2 * math.pi - math.pi / 2))
        up, lo, paw = f"{leg}_up.{side}", f"{leg}_lo.{side}", f"{leg}_paw.{side}"
        if leg == "f":
            pose[up] = [(X, -amp * swing - crouch * 20)]
            pose[lo] = [(X, lift * liftp + crouch * 30)]
            pose[paw] = [(X, -0.6 * lift * liftp)]
        else:
            pose[up] = [(X, -amp * swing + crouch * 25)]
            pose[lo] = [(X, -lift * 0.8 * liftp - crouch * 25)]
            pose[paw] = [(X, 0.5 * lift * liftp)]
    s1 = math.sin(ph * 2 * math.pi)
    pose["root_loc"] = (0, 0, bobamp * math.sin(ph * 4 * math.pi) - crouch * 0.07)
    pose["spine"] = [(X, 4 * s1 * (3 if gallop else 1))]
    pose["hips"] = [(Y, 3 * s1), (X, (-8 if gallop else 0) * s1)]
    pose["neck"] = [(X, -3 * math.sin(ph * 4 * math.pi) + crouch * 12)]
    pose["head"] = [(X, 3 * math.sin(ph * 4 * math.pi) - crouch * 8)]
    for i in range(5):
        pose[f"tail{i}"] = [(Z, 7 * math.sin(ph * 2 * math.pi - i * 0.6)), (X, 4 - crouch * 10)]
    return pose


def make_action(arm, name, frames, fn, loop=True):
    act = bpy.data.actions.new(name)
    act.use_fake_user = True
    arm.animation_data_create()
    arm.animation_data.action = act
    for f in range(0, frames + 1, 2):
        key_pose(arm, f + 1, fn(f / frames))
    if loop:
        key_pose(arm, frames + 1, fn(0.0))
    return act


def animate(arm):
    bpy.context.scene.render.fps = 30

    def idle(ph):
        s = math.sin(ph * 2 * math.pi)
        pose = {"root_loc": (0, 0, 0.003 * s), "spine": [(X, 1.5 * s)],
                "neck": [(X, -2 * s), (Z, 6 * math.sin(ph * 2 * math.pi + 1))],
                "head": [(Z, 8 * math.sin(ph * 2 * math.pi + 0.5)), (Y, 4 * math.sin(ph * 4 * math.pi))]}
        for i in range(5):
            pose[f"tail{i}"] = [(Z, 14 * math.sin(ph * 2 * math.pi - i * 0.7)), (X, 6)]
        return pose

    def sit(ph):
        s = math.sin(ph * 2 * math.pi)
        pose = {"root_loc": (0, 0.02, -0.03), "hips": [(X, -38)], "spine": [(X, -8)],
                "neck": [(X, 22)], "head": [(X, 20), (Z, 10 * s)]}
        for side in "LR":
            pose[f"h_up.{side}"] = [(X, 75)]
            pose[f"h_lo.{side}"] = [(X, -120)]
            pose[f"h_paw.{side}"] = [(X, 50)]
            pose[f"f_up.{side}"] = [(X, 35)]
            pose[f"f_lo.{side}"] = [(X, -5)]
        for i in range(5):
            pose[f"tail{i}"] = [(Z, 15 + 10 * s if i else 5), (X, -15)]
        return pose

    def jump(ph):
        if ph < 0.25:
            p = gait(0, 0, 0, 0, crouch=ph / 0.25)
        elif ph < 0.5:
            c = (ph - 0.25) / 0.25
            p = {"root_loc": (0, 0, 0.02 * c), "spine": [(X, -8 * c)]}
            for side in "LR":
                p[f"f_up.{side}"] = [(X, -55 * c)]
                p[f"f_lo.{side}"] = [(X, -10 * c)]
                p[f"h_up.{side}"] = [(X, 45 * c)]
                p[f"h_lo.{side}"] = [(X, 20 * c)]
        else:
            c = (ph - 0.5) / 0.5
            p = {"spine": [(X, -8 + 14 * c)], "neck": [(X, 8 * c)]}
            for side in "LR":
                p[f"f_up.{side}"] = [(X, -55 + 35 * c)]
                p[f"f_lo.{side}"] = [(X, -10 + 50 * c)]
                p[f"h_up.{side}"] = [(X, 45 - 70 * c)]
                p[f"h_lo.{side}"] = [(X, 20 - 50 * c)]
        for i in range(5):
            p[f"tail{i}"] = [(X, -10 + 25 * ph)]
        return p

    def attack(ph):
        c = math.sin(min(1, ph * 1.4) * math.pi)
        p = gait(0, 0, 0, 0, crouch=0.35 * (1 - c))
        p["f_up.R"] = [(X, -95 * c), (Y, -15 * c)]
        p["f_lo.R"] = [(X, -30 * c)]
        p["f_paw.R"] = [(X, -40 * c)]
        p["spine"] = [(X, -10 * c)]
        p["hips"] = [(X, -6 * c)]
        p["neck"] = [(X, 10 * c)]
        p["head"] = [(Z, -10 * c)]
        p["root_loc"] = (0, -0.03 * c, 0.02 * c)
        return p

    def hiss(ph):
        c = min(1, ph * 3) if ph < 0.8 else (1 - ph) * 5
        p = {"root_loc": (0, 0, 0.03 * c), "spine": [(X, -22 * c)], "hips": [(X, 14 * c)],
             "neck": [(X, 18 * c)], "head": [(X, -12 * c), (Y, 4 * math.sin(ph * 40))]}
        for side in "LR":
            p[f"f_up.{side}"] = [(X, 10 * c)]
            p[f"h_up.{side}"] = [(X, -10 * c)]
        for i in range(5):
            p[f"tail{i}"] = [(X, -30 * c if i < 2 else -5 * c)]
        return p

    make_action(arm, "Idle", 60, idle)
    make_action(arm, "Walk", 30, lambda ph: gait(ph, 22, 45, 0.006))
    make_action(arm, "Run", 16, lambda ph: gait(ph, 38, 70, 0.012, gallop=True))
    make_action(arm, "Sneak", 40, lambda ph: gait(ph, 18, 35, 0.003, crouch=0.9))
    make_action(arm, "Jump", 20, jump, loop=False)
    make_action(arm, "Attack", 14, attack, loop=False)
    make_action(arm, "Hiss", 30, hiss, loop=False)
    make_action(arm, "Sit", 60, sit)
    arm.animation_data.action = bpy.data.actions["Idle"]


def export(path):
    kw = dict(filepath=path, export_format="GLB", export_skins=True, export_animations=True,
              export_animation_mode="ACTIONS", export_apply=False, export_yup=True,
              export_force_sampling=True, export_frame_step=1)
    try:
        bpy.ops.export_scene.gltf(export_vertex_color="ACTIVE", **kw)
    except TypeError:
        bpy.ops.export_scene.gltf(export_colors=True, **kw)


def build_cat(name, p):
    clear_scene()
    skin, head = build_body(p)
    ears = add_ears(p, head)
    paint(skin, p["coat"], head)
    face = add_face_parts(p, head, ears)
    arm = build_rig(p, head)
    skin_to_rig(skin, face, arm)
    animate(arm)
    path = os.path.join(OUT, f"{name}.glb")
    export(path)
    print(f"[cats] {name}: {len(skin.data.polygons)} faces -> {path}")


def build_pigeon():
    clear_scene()
    mb = bpy.data.metaballs.new("pg")
    mb.resolution = 0.008
    o = bpy.data.objects.new("pigeon", mb)
    bpy.context.collection.objects.link(o)
    for co, r, s in [((0, 0, 0.12), 0.07, (0.8, 1.3, 0.8)), ((0, -0.08, 0.2), 0.04, (1, 1, 1)),
                     ((0, 0.12, 0.13), 0.04, (0.9, 1.4, 0.3))]:
        e = mb.elements.new()
        e.co, e.radius = co, r
        e.type = "ELLIPSOID"
        e.size_x, e.size_y, e.size_z = s
    bpy.context.view_layer.objects.active = o
    o.select_set(True)
    bpy.ops.object.convert(target="MESH")
    body = bpy.context.active_object
    bpy.ops.object.shade_smooth()
    attr = body.data.color_attributes.new("Col", "BYTE_COLOR", "POINT")
    for v in body.data.vertices:
        x, y, z = v.co
        if y < -0.05 and z > 0.17:
            c = (0.3, 0.55, 0.45) if z < 0.19 else (0.35, 0.38, 0.45)
        elif y > 0.08:
            c = (0.25, 0.26, 0.3)
        else:
            c = (0.55, 0.57, 0.62)
            if abs(x) > 0.04 and 0.0 < y < 0.08 and math.sin(y * 120) > 0.6:
                c = (0.2, 0.2, 0.22)
        attr.data[v.index].color = (*lin(c), 1)
    vc_material("pigeon", body)
    bpy.ops.mesh.primitive_cone_add(vertices=8, radius1=0.008, depth=0.03, location=(0, -0.13, 0.2),
                                    rotation=(math.radians(90), 0, 0))
    bpy.context.active_object.data.materials.append(simple_mat("beak", (0.15, 0.12, 0.1)))
    for s in (-1, 1):
        bpy.ops.mesh.primitive_uv_sphere_add(radius=0.008, location=(s * 0.025, -0.1, 0.215))
        bpy.context.active_object.data.materials.append(simple_mat("peye", (0.8, 0.3, 0.05), 0.1))
        bpy.ops.mesh.primitive_cylinder_add(radius=0.004, depth=0.07, location=(s * 0.02, 0.0, 0.035))
        bpy.context.active_object.data.materials.append(simple_mat("leg", (0.7, 0.25, 0.25)))
    bpy.ops.object.select_all(action="SELECT")
    bpy.context.view_layer.objects.active = body
    bpy.ops.object.join()
    export(os.path.join(OUT, "pigeon.glb"))


for n, spec in CATS.items():
    if not ONLY or n in ONLY:
        build_cat(n, spec)
if not ONLY or "pigeon" in ONLY:
    build_pigeon()
