"""Procedural cat generator for Blender 4.2 (run headless).

    blender -b --python tools/blender/make_cats.py -- <out_dir> [names...]

Pipeline per cat:
  metaball sculpt -> voxel remesh -> smooth -> decimate -> UV unwrap
  -> coat pattern rasterised into a 1024px texture (numpy)
  -> eyes with painted iris textures, nose, whiskers, folded/upright ears
  -> armature with IK legs; gaits are authored as paw trajectories
     (planted feet, diagonal/lateral sequences) and baked to FK actions.
Blender space: Z up, cat faces -Y (becomes +Z forward in glTF / three.js).
"""
import bpy
import bmesh
import math
import os
import sys
import numpy as np
from mathutils import Vector, Quaternion

ARGS = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
OUT = ARGS[0] if ARGS else "public/models"
ONLY = ARGS[1:]
os.makedirs(OUT, exist_ok=True)
TEX = 1024
FPS = 30

CATS = {
    "dymok": dict(  # very chubby smoky-charcoal scottish fold, yellow-green eyes
        width=1.55, belly=1.0, height=1.12, length=1.0, head=1.12, cheeks=1.45,
        leg=0.92, legw=1.35, tail=0.9, tailw=1.3, fold=True, torn=False, faceflat=0.0,
        coat="smoke", iris=((0.86, 0.84, 0.45), (0.55, 0.62, 0.22)), pupil=0.42, eye=1.12,
        nose=(0.26, 0.23, 0.25), ear=(0.25, 0.25, 0.28),
    ),
    "milena": dict(  # slim silver tabby scottish fold, copper eyes
        width=0.95, belly=0.1, height=0.98, length=1.0, head=1.0, cheeks=1.1,
        leg=1.02, legw=0.92, tail=1.0, tailw=1.0, fold=True, torn=False, faceflat=0.0,
        coat="silver_tabby", iris=((0.95, 0.66, 0.2), (0.72, 0.36, 0.08)), pupil=0.34, eye=1.1,
        nose=(0.84, 0.56, 0.56), ear=(0.6, 0.6, 0.63),
    ),
    "pixel": dict(  # tuxedo, player 3
        width=1.0, belly=0.2, height=1.0, length=1.04, head=0.96, cheeks=1.0,
        leg=1.08, legw=0.95, tail=1.15, tailw=0.9, fold=False, torn=False, faceflat=0.0,
        coat="tuxedo", iris=((0.75, 0.88, 0.35), (0.28, 0.6, 0.2)), pupil=0.3, eye=1.0,
        nose=(0.86, 0.56, 0.6), ear=(0.07, 0.07, 0.08),
    ),
    "karniz": dict(  # ginger rooftop bully (boss), torn ear
        width=1.35, belly=0.3, height=1.2, length=1.15, head=1.1, cheeks=1.5,
        leg=1.1, legw=1.3, tail=1.0, tailw=1.1, fold=False, torn=True, faceflat=0.0,
        coat="ginger", iris=((0.95, 0.85, 0.3), (0.8, 0.55, 0.1)), pupil=0.22, eye=0.9,
        nose=(0.78, 0.45, 0.4), ear=(0.8, 0.42, 0.15),
    ),
    "plombir": dict(  # white persian shopkeeper, flat face
        width=1.3, belly=0.5, height=1.05, length=0.95, head=1.12, cheeks=1.35,
        leg=0.85, legw=1.2, tail=0.9, tailw=1.6, fold=False, torn=False, faceflat=1.0,
        coat="white", iris=((0.55, 0.78, 0.98), (0.2, 0.42, 0.85)), pupil=0.3, eye=1.05,
        nose=(0.9, 0.62, 0.64), ear=(0.93, 0.91, 0.87),
    ),
}


def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


# ------------------------------------------------------------------ sculpt
def build_body(p):
    mb = bpy.data.metaballs.new("skin")
    mb.resolution = 0.01
    mb.render_resolution = 0.01
    mb.threshold = 0.6
    obj = bpy.data.objects.new("skin_mb", mb)
    bpy.context.collection.objects.link(obj)

    W, H, L, B = p["width"], p["height"], p["length"], p["belly"]
    lg, lw = p["leg"], p["legw"]

    def el(co, r, sx=1, sy=1, sz=1, stiff=2.0):
        e = mb.elements.new()
        e.type = "ELLIPSOID"
        e.co = Vector(co)
        e.radius = r * 1.5  # visible surface sits at ~0.67 of the influence radius
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
    # round scottish-fold skull, full cheeks, short muzzle
    el((0, hy, hz), 0.084 * hs, 1.06, 0.95, 0.93, stiff=2.5)
    ck = p["cheeks"]
    for s in (-1, 1):
        el((s * 0.033 * hs, hy - 0.024, hz - 0.03 * hs), 0.043 * hs, 0.92 * ck, 0.9, 0.8)
    my = hy - 0.058 * hs + 0.02 * p["faceflat"]
    for s in (-1, 1):
        el((s * 0.0145 * hs, my, hz - 0.032 * hs), 0.019 * hs, 1.0, 0.9, 0.85)
    el((0, my + 0.012, hz - 0.052 * hs), 0.015 * hs, 1.0, 0.8, 0.7)
    fx = 0.052 * W ** 0.5
    for s in (-1, 1):
        el((s * fx, -0.15 * L, bz - 0.05), 0.05 * lw, 0.8, 0.9, 1.5)
        el((s * fx, -0.14 * L, bz - 0.11 * lg), 0.034 * lw, 0.8, 0.8, 1.8)
        el((s * fx, -0.155 * L, 0.055), 0.03 * lw, 0.9, 0.9, 1.3)
        el((s * fx, -0.165 * L, 0.02), 0.032 * lw, 0.95, 1.25, 0.62, stiff=2.2)
        el((s * (fx + 0.006), 0.14 * L, bz - 0.03), 0.066 * lw, 0.75, 1.1, 1.3)
        el((s * fx, 0.17 * L, bz - 0.1 * lg), 0.036 * lw, 0.8, 0.95, 1.5)
        el((s * fx, 0.195 * L, 0.06), 0.027 * lw, 0.85, 0.9, 1.4)
        el((s * fx, 0.17 * L, 0.02), 0.032 * lw, 0.95, 1.3, 0.62, stiff=2.2)
    t, tw = p["tail"], p["tailw"]
    for i in range(20):
        f = i / 19
        y = 0.24 * L + f * 0.3 * t
        z = bz + 0.04 - f * 0.12 * t + 0.08 * math.sin(f * 2.4) * t
        el((0, y, z), (0.026 - 0.008 * f) * tw, 1, 1, 1)

    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    bpy.ops.object.convert(target="MESH")
    skin = bpy.context.active_object
    skin.name = "skin"
    mod = skin.modifiers.new("remesh", "REMESH")
    mod.mode = "VOXEL"
    mod.voxel_size = 0.0055
    bpy.ops.object.modifier_apply(modifier="remesh")
    sm = skin.modifiers.new("smooth", "CORRECTIVE_SMOOTH")
    sm.iterations = 8
    sm.use_only_smooth = True
    bpy.ops.object.modifier_apply(modifier="smooth")
    dec = skin.modifiers.new("dec", "DECIMATE")
    dec.ratio = min(1.0, max(0.05, 12000 / max(1, len(skin.data.polygons))))
    bpy.ops.object.modifier_apply(modifier="dec")
    bpy.ops.object.shade_smooth()
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=0.004)
    bpy.ops.object.mode_set(mode="OBJECT")
    # eyes sit in the skull so skin forms the lids; only the cornea cap shows
    ey = hy - 0.056 * hs + 0.012 * p["faceflat"]
    geo = dict(hy=hy, hz=hz, hs=hs, bz=bz, fx=fx, L=L, lg=lg,
               eye=(0.029 * hs, ey, hz + 0.011 * hs), re=0.0128 * hs * p["eye"],
               nose=(0, hy - 0.09 * hs + 0.02 * p["faceflat"], hz - 0.017 * hs))
    return skin, geo


def add_ears(p, g):
    hy, hz, hs = g["hy"], g["hz"], g["hs"]
    objs = []
    for s in (-1, 1):
        bpy.ops.mesh.primitive_cone_add(vertices=14, radius1=0.033 * hs, radius2=0.003, depth=0.06 * hs)
        e = bpy.context.active_object
        if p["fold"]:
            # folded flap hugging the skull, tip pointing forward-down
            e.scale = (1.2, 0.38, 0.6)
            e.location = (s * 0.043 * hs, hy - 0.006, hz + 0.056 * hs)
            e.rotation_euler = (math.radians(-128), math.radians(s * 40), 0)
        else:
            e.scale = (1.0, 0.45, 1.1)
            e.location = (s * 0.043 * hs, hy + 0.01, hz + 0.078 * hs)
            e.rotation_euler = (math.radians(-12), math.radians(s * 20), 0)
            if p["torn"] and s > 0:
                bm = bmesh.new()
                bm.from_mesh(e.data)
                top = [v for v in bm.verts if v.co.z > 0.01 * hs and v.co.x > 0]
                bmesh.ops.delete(bm, geom=top, context="VERTS")
                bm.to_mesh(e.data)
                bm.free()
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        sub = e.modifiers.new("sub", "SUBSURF")
        sub.levels = 2
        bpy.ops.object.modifier_apply(modifier="sub")
        bpy.ops.object.shade_smooth()
        objs.append(e)
    return objs


# ------------------------------------------------------------------ coat texture
def S(a, b, x):
    t = np.clip((x - a) / (b - a), 0.0, 1.0)
    return t * t * (3 - 2 * t)


def _hash(ix, iy, iz):
    with np.errstate(over="ignore"):
        h = (ix * 73856093) ^ (iy * 19349663) ^ (iz * 83492791)
        h = (h ^ (h >> 13)) * 1274126177
        h = h ^ (h >> 16)
    return (h & 0xFFFF).astype(np.float64) / 65535.0


def vnoise(p):
    i = np.floor(p).astype(np.int64)
    f = p - i
    u = f * f * (3 - 2 * f)
    n = np.zeros(len(p))
    for dx in (0, 1):
        wx = u[:, 0] if dx else 1 - u[:, 0]
        for dy in (0, 1):
            wy = u[:, 1] if dy else 1 - u[:, 1]
            for dz in (0, 1):
                wz = u[:, 2] if dz else 1 - u[:, 2]
                n += wx * wy * wz * _hash(i[:, 0] + dx, i[:, 1] + dy, i[:, 2] + dz)
    return n * 2 - 1


def fbm(p, octaves=3):
    tot, amp, norm = 0.0, 1.0, 0.0
    for o in range(octaves):
        tot = tot + amp * vnoise(p * (2 ** o) + o * 17.3)
        norm += amp
        amp *= 0.5
    return tot / norm


def mixc(col, target, t):
    t = np.clip(t, 0, 1)[:, None]
    return col * (1 - t) + np.asarray(target)[None, :] * t


def coat_colors(coat, P, N, g):
    x, y, z = P[:, 0], P[:, 1], P[:, 2]
    nz, ny = N[:, 2], N[:, 1]
    hy, hz, hs, bz, L = g["hy"], g["hz"], g["hs"], g["bz"], g["L"]
    ex, ey, ez = g["eye"]
    re = g["re"]
    head = S(hy + 0.08, hy + 0.04, y) * S(bz + 0.05, bz + 0.09, z)
    front = S(hy - 0.035, hy - 0.06, y) * head
    tail = S(0.23 * L, 0.27 * L, y)
    legs = S(bz - 0.05, bz - 0.1, z) * (1 - head)
    paws = S(0.055, 0.03, z)
    belly = S(-0.15, -0.55, nz) * S(bz + 0.03, bz - 0.04, z) * (1 - tail) * (1 - head)
    chest = S(-0.2, -0.6, ny) * S(-0.1 * L, -0.17 * L, y) * S(bz + 0.1, bz + 0.02, z) * S(bz - 0.07, bz - 0.02, z) * (1 - head)
    mz = hz - 0.045 * hs
    muzzle = S(0.034 * hs, 0.018 * hs, np.sqrt(x ** 2 + ((y - (hy - 0.075 * hs)) * 0.8) ** 2 + ((z - mz) * 1.2) ** 2))
    chin = front * S(hz - 0.05 * hs, hz - 0.065 * hs, z)
    de = np.minimum(np.linalg.norm(P - np.array([ex, ey, ez]), axis=1),
                    np.linalg.norm(P - np.array([-ex, ey, ez]), axis=1))
    liner = S(re * 0.98, re * 1.08, de) * S(re * 1.4, re * 1.18, de)
    spect = S(re * 2.1, re * 1.35, de) * (1 - liner)
    nzs, nzy = g["nose"][2], g["nose"][1]
    mouth = S(0.0022, 0.0009, np.abs(z - (nzs - 0.014 * hs + 9 * x * x))) * S(0.014, 0.01, np.abs(x)) * S(nzy + 0.02, nzy + 0.005, y)
    philtrum = S(0.0016, 0.0006, np.abs(x)) * S(nzs - 0.004, nzs - 0.007, z) * S(nzs - 0.016, nzs - 0.013, z) * S(nzy + 0.02, nzy + 0.005, y)
    fine = fbm(P * 140, 2)
    warp = fbm(P * 9, 3)

    if coat == "silver_tabby":
        base, dark, light = (0.76, 0.76, 0.78), (0.3, 0.3, 0.32), (0.93, 0.93, 0.92)
        # thin, broken mackerel lines with soft edges plus marbling on the shoulders
        body = S(0.5, 0.85, np.sin(y * 170 + warp * 3.0 + np.abs(x) * 26)) * S(-0.2, 0.25, fbm(P * 24 + 5, 3))
        body = np.maximum(body, 0.6 * S(0.35, 0.6, fbm(P * 11 + 2, 3)) * S(-0.05 * L, -0.15 * L, y))
        dorsal = S(0.03, 0.012, np.abs(x)) * S(0.35, 0.75, nz) * (1 - tail) * (1 - head)
        body = np.maximum(body, dorsal)
        legring = S(0.5, 0.85, np.sin(z * 200 + warp * 1.5)) * S(0.0, 0.5, np.abs(N[:, 0]) + 0.3)
        tailring = S(0.3, 0.7, np.sin(y * 125 + warp))
        top = S(hz + 0.012, hz + 0.045, z)
        forehead = S(0.7, 0.92, np.sin(x * 600 + fbm(P * 18, 2))) * S(0.034, 0.018, np.abs(x)) * top
        side = S(0.03, 0.05, np.abs(x))
        # two "mascara" lines running back from the outer eye corner only
        cheek = S(0.8, 0.97, np.sin((z - ez) * 300 - (y - ey) * 90 + warp)) * side * (1 - top) * S(ey - 0.005, ey + 0.012, y) * S(ez - 0.03, ez - 0.012, z)
        crown = S(0.5, 0.85, np.sin(y * 260 + x * 60 + warp)) * top * S(hy - 0.02, hy + 0.02, y)
        mark = (body * (1 - head) * (1 - legs) * (1 - tail) + legring * legs * (1 - paws) + tailring * tail
                + np.maximum.reduce([forehead, cheek, crown]) * head)
        col = mixc(np.tile(base, (len(P), 1)), dark, mark * 0.85)
        col = mixc(col, light, np.maximum.reduce([belly * 0.75, chest * 0.5, muzzle, chin, paws * 0.85, spect * 0.75]))
        col = mixc(col, (0.1, 0.1, 0.1), liner)
    elif coat == "smoke":
        base, smoke = (0.25, 0.26, 0.3), (0.47, 0.46, 0.48)
        col = mixc(np.tile(base, (len(P), 1)), smoke, S(0.05, 0.4, fbm(P * 7 + 3, 3)) * 0.85)
        col = mixc(col, (0.17, 0.17, 0.2), S(0.2, 0.6, fbm(P * 16 + 9, 2)) * 0.45)
        brow = np.minimum(np.linalg.norm(P - np.array([ex * 0.9, ey + 0.012, ez + 0.03 * hs]), axis=1),
                          np.linalg.norm(P - np.array([-ex * 0.9, ey + 0.012, ez + 0.03 * hs]), axis=1))
        col = mixc(col, (0.58, 0.56, 0.57), S(0.026, 0.01, brow) * 0.8)
        col = mixc(col, (0.33, 0.32, 0.34), np.maximum(muzzle * 0.6, chin * 0.5))
        col = mixc(col, smoke, belly * 0.35)
        col = mixc(col, (0.06, 0.06, 0.07), liner)
    elif coat == "tuxedo":
        black, white = (0.065, 0.065, 0.075), (0.93, 0.93, 0.91)
        col = mixc(np.tile(black, (len(P), 1)), (0.12, 0.12, 0.13), S(0.0, 0.6, fbm(P * 20, 2)) * 0.6)
        blaze = front * S(0.008 + (hz + 0.02 - z) * 0.5, 0.004 + (hz + 0.02 - z) * 0.5, np.abs(x)) * S(hz + 0.03, hz, z)
        white_m = np.maximum.reduce([belly, chest, paws * 1.0, muzzle, chin, blaze, S(0.07, 0.05, z) * legs])
        col = mixc(col, white, S(0.4, 0.6, white_m + 0.15 * fine))
    elif coat == "ginger":
        base, dark, cream = (0.86, 0.46, 0.16), (0.58, 0.24, 0.06), (0.97, 0.84, 0.64)
        stripe = S(0.3, 0.65, np.sin(y * 110 + warp * 2 + np.abs(x) * 30))
        legring = S(0.4, 0.75, np.sin(z * 170 + warp))
        mark = stripe * (1 - legs) * (1 - tail) + legring * legs + S(0.2, 0.6, np.sin(y * 120)) * tail
        col = mixc(np.tile(base, (len(P), 1)), dark, mark * 0.75)
        col = mixc(col, cream, np.maximum.reduce([belly * 0.8, chest * 0.6, muzzle, chin]))
        scar = S(0.003, 0.0012, np.abs((z - hz) - x * 0.8)) * front * S(-0.01, 0.01, x)
        col = mixc(col, (0.5, 0.22, 0.2), scar)
    else:
        col = mixc(np.tile((0.95, 0.94, 0.9), (len(P), 1)), (0.86, 0.83, 0.77), S(-0.2, 0.6, warp) * 0.6)
    col = mixc(col, (0.32, 0.22, 0.22), philtrum * 0.8)
    col = mixc(col, (0.2, 0.16, 0.16), mouth * 0.8)
    col = col * (0.93 + 0.14 * fine)[:, None]
    return np.clip(col, 0, 1)


def bake_coat(obj, name, coat, g):
    me = obj.data
    me.calc_loop_triangles()
    nv = len(me.vertices)
    co = np.empty(nv * 3, np.float64)
    me.vertices.foreach_get("co", co)
    co = co.reshape(-1, 3)
    nor = np.empty(nv * 3, np.float64)
    me.vertices.foreach_get("normal", nor)
    nor = nor.reshape(-1, 3)
    nl = len(me.loops)
    uv = np.empty(nl * 2, np.float64)
    me.uv_layers.active.data.foreach_get("uv", uv)
    uv = uv.reshape(-1, 2) * TEX
    lv = np.empty(nl, np.int64)
    me.loops.foreach_get("vertex_index", lv)
    nt = len(me.loop_triangles)
    tl = np.empty(nt * 3, np.int64)
    me.loop_triangles.foreach_get("loops", tl)
    tl = tl.reshape(-1, 3)
    pix, Ps, Ns = [], [], []
    for t in range(nt):
        l = tl[t]
        a, b, c = uv[l[0]], uv[l[1]], uv[l[2]]
        mn = np.clip(np.floor(np.minimum(np.minimum(a, b), c)).astype(int) - 1, 0, TEX - 1)
        mx = np.clip(np.ceil(np.maximum(np.maximum(a, b), c)).astype(int) + 1, 0, TEX - 1)
        gx, gy = np.meshgrid(np.arange(mn[0], mx[0] + 1), np.arange(mn[1], mx[1] + 1))
        pts = np.stack([gx.ravel() + 0.5, gy.ravel() + 0.5], 1)
        v0, v1, v2 = b - a, c - a, pts - a
        d00, d01, d11 = v0 @ v0, v0 @ v1, v1 @ v1
        den = d00 * d11 - d01 * d01
        if abs(den) < 1e-12:
            continue
        d20, d21 = v2 @ v0, v2 @ v1
        w1 = (d11 * d20 - d01 * d21) / den
        w2 = (d00 * d21 - d01 * d20) / den
        w0 = 1 - w1 - w2
        m = (w0 >= -0.03) & (w1 >= -0.03) & (w2 >= -0.03)
        if not m.any():
            continue
        W = np.stack([w0[m], w1[m], w2[m]], 1)
        vi = lv[l]
        Ps.append(W @ co[vi])
        Ns.append(W @ nor[vi])
        pix.append(gy.ravel()[m] * TEX + gx.ravel()[m])
    pix = np.concatenate(pix)
    P = np.concatenate(Ps)
    N = np.concatenate(Ns)
    N /= np.linalg.norm(N, axis=1, keepdims=True) + 1e-9
    col = coat_colors(coat, P, N, g)
    img = np.zeros((TEX * TEX, 3))
    filled = np.zeros(TEX * TEX, bool)
    img[pix] = col
    filled[pix] = True
    img = img.reshape(TEX, TEX, 3)
    filled = filled.reshape(TEX, TEX)
    for _ in range(8):  # dilate islands so mip-maps don't bleed black into seams
        acc = np.zeros_like(img)
        cnt = np.zeros((TEX, TEX))
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            acc += np.roll(np.roll(img * filled[..., None], dx, 1), dy, 0)
            cnt += np.roll(np.roll(filled, dx, 1), dy, 0)
        grow = (~filled) & (cnt > 0)
        img[grow] = acc[grow] / cnt[grow][:, None]
        filled |= grow
    rgba = np.concatenate([img, np.ones((TEX, TEX, 1))], 2).astype(np.float32)
    im = bpy.data.images.new(f"{name}_coat", TEX, TEX, alpha=False)
    im.pixels.foreach_set(rgba.ravel())
    im.pack()
    mat = bpy.data.materials.new("fur")
    mat.use_nodes = True
    nt_ = mat.node_tree
    bsdf = nt_.nodes["Principled BSDF"]
    tex = nt_.nodes.new("ShaderNodeTexImage")
    tex.image = im
    nt_.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.9
    obj.data.materials.append(mat)


def eye_image(name, inner, outer, pupil):
    Wd, Ht = 256, 256
    U, V = np.meshgrid((np.arange(Wd) + 0.5) / Wd, (np.arange(Ht) + 0.5) / Ht)
    th = np.minimum(V, 1 - V)  # distance from either pole in v
    r = th / 0.3
    fib = 0.5 + 0.5 * np.sin(U * 2 * np.pi * 41 + 2.2 * np.sin(U * 2 * np.pi * 9) + r * 6)
    t = S(0.25, 1.0, r)
    col = np.asarray(inner)[None, None, :] * (1 - t[..., None]) + np.asarray(outer)[None, None, :] * t[..., None]
    col = col * (0.82 + 0.3 * fib[..., None] * S(pupil, pupil + 0.3, r)[..., None])
    col = col * (1 - 0.65 * S(0.82, 1.0, r))[..., None]  # dark limbal ring
    pm = S(pupil + 0.025, pupil - 0.01, r)[..., None]
    col = col * (1 - pm) + np.array([0.008, 0.008, 0.01])[None, None, :] * pm
    col = np.where((r > 1.0)[..., None], np.array([0.1, 0.08, 0.07])[None, None, :], col)
    rgba = np.concatenate([np.clip(col, 0, 1), np.ones((Ht, Wd, 1))], 2).astype(np.float32)
    im = bpy.data.images.new(f"{name}_iris", Wd, Ht, alpha=False)
    im.pixels.foreach_set(rgba.ravel())
    im.pack()
    return im


def simple_mat(name, color, rough=0.5):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*[c ** 2.2 for c in color], 1)
    b.inputs["Roughness"].default_value = rough
    return m


def add_face_parts(name, p, g, ear_objs):
    hs = g["hs"]
    parts = []
    eye_mat = bpy.data.materials.new("eye_iris")
    eye_mat.use_nodes = True
    tex = eye_mat.node_tree.nodes.new("ShaderNodeTexImage")
    tex.image = eye_image(name, p["iris"][0], p["iris"][1], p["pupil"])
    bsdf = eye_mat.node_tree.nodes["Principled BSDF"]
    eye_mat.node_tree.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.05
    ex, ey, ez = g["eye"]
    for s in (-1, 1):
        # the sphere pole (iris centre) is rotated to face forward and slightly outward
        bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=24, radius=g["re"], location=(s * ex, ey, ez),
                                             rotation=(math.radians(90), 0, math.radians(-s * 14)))
        e = bpy.context.active_object
        e.data.materials.append(eye_mat)
        bpy.ops.object.shade_smooth()
        parts.append(e)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=10, radius=0.0062 * hs, location=g["nose"])
    n = bpy.context.active_object
    n.location.y += 0.003
    n.scale = (1.25, 0.6, 0.7)
    n.data.materials.append(simple_mat("nose", p["nose"], 0.35))
    bpy.ops.object.shade_smooth()
    parts.append(n)
    wmat = simple_mat("whisker", (0.96, 0.96, 0.94), 0.3)
    for s in (-1, 1):
        for i in range(8):
            ang = math.radians(-22 + i * 6.5)
            row = (i % 3) * 0.004
            start = Vector((s * (0.018 + row) * hs, g["nose"][1] + 0.012 + row, g["nose"][2] - 0.012 * hs - (i % 3) * 0.003))
            d = Vector((s * math.cos(ang), -0.3, math.sin(ang) - 0.05)).normalized()
            ln = 0.1 + 0.02 * ((i * 7) % 3)
            bpy.ops.mesh.primitive_cone_add(vertices=4, radius1=0.0006, radius2=0.00008, depth=ln)
            w = bpy.context.active_object
            w.location = start + d * (ln / 2)
            w.rotation_mode = "QUATERNION"
            w.rotation_quaternion = Vector((0, 0, 1)).rotation_difference(d)
            w.data.materials.append(wmat)
            parts.append(w)
    ear_m = simple_mat("ear", p["ear"], 0.85)
    for e in ear_objs:
        e.data.materials.append(ear_m)
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


# ------------------------------------------------------------------ rig
LEG_FK = ["f_up", "f_lo", "h_up", "h_lo"]


def build_rig(p, g):
    hy, hz, bz, fx, L, lg = g["hy"], g["hz"], g["bz"], g["fx"], g["L"], g["lg"]
    t = p["tail"]
    arm_data = bpy.data.armatures.new("rig")
    arm = bpy.data.objects.new("rig", arm_data)
    bpy.context.collection.objects.link(arm)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="EDIT")
    eb = arm_data.edit_bones
    J = {}

    def bone(name, h, tl, parent=None, deform=True):
        b = eb.new(name)
        b.head, b.tail = Vector(h), Vector(tl)
        b.roll = 0
        b.use_deform = deform
        if parent:
            b.parent = eb[parent]
        return b

    bone("root", (0, 0, 0), (0, 0.1, 0), deform=False)
    bone("hips", (0, 0.16 * L, bz), (0, 0.0, bz + 0.01), "root")
    bone("spine", (0, 0.0, bz + 0.01), (0, -0.16 * L, bz + 0.03), "hips")
    bone("neck", (0, -0.16 * L, bz + 0.03), (0, hy + 0.02, hz - 0.03), "spine")
    bone("head", (0, hy + 0.02, hz - 0.03), (0, hy - 0.07, hz + 0.02), "neck")
    for side, s in (("L", -1), ("R", 1)):
        S_ = (s * fx, -0.15 * L, bz + 0.01)
        E = (s * fx, -0.12 * L, bz - 0.085 * lg)
        Wr = (s * fx, -0.155 * L, 0.032)
        T = (s * fx, -0.19 * L, 0.006)
        Hp = (s * fx, 0.15 * L, bz)
        K = (s * fx, 0.105 * L, bz - 0.085 * lg)
        Hk = (s * fx, 0.2 * L, 0.068)
        Bl = (s * fx, 0.178 * L, 0.012)
        T2 = (s * fx, 0.148 * L, 0.005)
        bone(f"f_up.{side}", S_, E, "spine")
        bone(f"f_lo.{side}", E, Wr, f"f_up.{side}")
        bone(f"f_paw.{side}", Wr, T, f"f_lo.{side}")
        bone(f"h_up.{side}", Hp, K, "hips")
        bone(f"h_lo.{side}", K, Hk, f"h_up.{side}")
        bone(f"h_meta.{side}", Hk, Bl, f"h_lo.{side}")
        bone(f"h_paw.{side}", Bl, T2, f"h_meta.{side}")
        # IK controls are parentless so planted paws stay put while the body moves
        for nm, pt in ((f"ikF.{side}", Wr), (f"ikH.{side}", Hk), (f"ftH.{side}", Bl)):
            bone(nm, pt, (pt[0], pt[1], pt[2] + 0.02), deform=False)
            J[nm] = Vector(pt)

    def tp(f):
        return (0, 0.24 * L + f * 0.3 * t, bz + 0.04 - f * 0.12 * t + 0.08 * math.sin(f * 2.4) * t)
    prev = "hips"
    for i in range(6):
        bone(f"tail{i}", tp(i / 6) if i else (0, 0.2 * L, bz + 0.03), tp((i + 1) / 6), prev)
        prev = f"tail{i}"
    bpy.ops.object.mode_set(mode="POSE")
    for side in "LR":
        c = arm.pose.bones[f"f_lo.{side}"].constraints.new("IK")
        c.target, c.subtarget, c.chain_count = arm, f"ikF.{side}", 2
        c = arm.pose.bones[f"h_lo.{side}"].constraints.new("IK")
        c.target, c.subtarget, c.chain_count = arm, f"ikH.{side}", 2
        c = arm.pose.bones[f"h_meta.{side}"].constraints.new("DAMPED_TRACK")
        c.target, c.subtarget = arm, f"ftH.{side}"
        for b in LEG_FK:
            pb = arm.pose.bones[f"{b}.{side}"]
            pb.lock_ik_y = pb.lock_ik_z = True  # sagittal hinge joints
    bpy.ops.object.mode_set(mode="OBJECT")
    return arm, J


def skin_to_rig(skin, face, arm):
    bpy.ops.object.select_all(action="DESELECT")
    skin.select_set(True)
    arm.select_set(True)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")
    mod = face.modifiers.new("arm", "ARMATURE")
    mod.object = arm
    vg = face.vertex_groups.new(name="head")
    vg.add(list(range(len(face.data.vertices))), 1.0, "REPLACE")
    face.parent = arm


# ------------------------------------------------------------------ animation
X, Y, Z = (1, 0, 0), (0, 1, 0), (0, 0, 1)


def rest_q(arm, name):
    return arm.data.bones[name].matrix_local.to_quaternion()


def key_pose(arm, frame, pose, J):
    """pose: {'rot': {bone: [(axis,deg)]}, 'ik': {ctrl: Vector armature pos}, 'root': (x,y,z)}"""
    rot = pose.get("rot", {})
    for pb in arm.pose.bones:
        if pb.name in J:
            continue
        q = Quaternion()
        for axis, deg in rot.get(pb.name, []):
            a = rest_q(arm, pb.name).inverted() @ Vector(axis)
            q = Quaternion(a, math.radians(deg)) @ q
        pb.rotation_mode = "QUATERNION"
        pb.rotation_quaternion = q
        pb.keyframe_insert("rotation_quaternion", frame=frame)
    for name, rest in J.items():
        want = pose.get("ik", {}).get(name, rest)
        pb = arm.pose.bones[name]
        pb.location = rest_q(arm, name).inverted() @ (Vector(want) - rest)
        pb.keyframe_insert("location", frame=frame)
    rb = arm.pose.bones["root"]
    rb.location = rest_q(arm, "root").inverted() @ Vector(pose.get("root", (0, 0, 0)))
    rb.keyframe_insert("location", frame=frame)


def paw_path(phi, duty, stride, lift):
    """Offset of a paw from its neutral spot. Stance: planted, slides back; swing: arcs forward."""
    if phi < duty:
        t = phi / duty
        return -stride / 2 + stride * t, 0.0, 0.0
    t = (phi - duty) / (1 - duty)
    e = 0.5 - 0.5 * math.cos(math.pi * t)
    s = math.sin(math.pi * t)
    return stride / 2 - stride * e, lift * s ** 0.8, s


def legs_pose(J, phases, duty, stride, lift, crouch=0.0):
    ik, rot = {}, {}
    for key, phi in phases.items():
        leg, side = key[0], key[1]
        dy, dz, sw = paw_path(phi % 1.0, duty, stride, lift)
        if leg == "F":
            w = J[f"ikF.{side}"]
            ik[f"ikF.{side}"] = Vector((w.x, w.y + dy + 0.008 * sw, w.z + dz + 0.012 * sw))
            rot[f"f_paw.{side}"] = [(X, 55 * sw)]  # paw curls back while lifted
        else:
            b = J[f"ftH.{side}"]
            h = J[f"ikH.{side}"]
            ball = Vector((b.x, b.y + dy, b.z + dz))
            ik[f"ftH.{side}"] = ball
            # hock rides above/behind the ball; lifts a bit higher in swing, drops in a crouch
            ik[f"ikH.{side}"] = Vector((h.x, ball.y + (h.y - b.y) - 0.012 * sw - 0.01 * crouch,
                                        ball.z + (h.z - b.z) + 0.004 * sw - 0.02 * crouch))
            rot[f"h_paw.{side}"] = [(X, -40 * sw)]
    return ik, rot


def tail_wave(rot, ph, amp, lift, lag=0.7):
    for i in range(6):
        rot[f"tail{i}"] = [(Z, amp * math.sin(ph * 2 * math.pi - i * lag)), (X, lift if i == 0 else lift * 0.25)]


def gait_pose(J, ph, kind):
    if kind == "walk":  # lateral sequence LH-LF-RH-RF
        ph4 = {"HL": ph, "FL": ph - 0.25, "HR": ph - 0.5, "FR": ph - 0.75}
        ik, rot = legs_pose(J, ph4, 0.62, 0.15, 0.03)
        root = (0, 0, -0.004 * math.cos(ph * 4 * math.pi))
        s1 = math.sin(ph * 2 * math.pi)
        rot.update({"spine": [(Z, 3.5 * s1)], "hips": [(Z, -3 * s1), (Y, 2 * s1)],
                    "neck": [(Z, -2.5 * s1), (X, 2 * math.cos(ph * 4 * math.pi))],
                    "head": [(Z, -1.5 * s1), (X, -2 * math.cos(ph * 4 * math.pi))]})
        tail_wave(rot, ph, 6, 12)
    elif kind == "trot":  # diagonal pairs: LH+RF, RH+LF
        ph4 = {"HL": ph, "FR": ph - 0.02, "HR": ph - 0.5, "FL": ph - 0.52}
        ik, rot = legs_pose(J, ph4, 0.45, 0.16, 0.045)
        root = (0, 0, 0.006 * math.cos(ph * 4 * math.pi))
        s1 = math.sin(ph * 2 * math.pi)
        rot.update({"spine": [(Z, 2.5 * s1), (X, 1.5 * math.cos(ph * 4 * math.pi))], "hips": [(Z, -2.5 * s1), (Y, 3 * s1)],
                    "neck": [(X, -3 * math.cos(ph * 4 * math.pi))], "head": [(X, 3 * math.cos(ph * 4 * math.pi)), (Z, -1.5 * s1)]})
        tail_wave(rot, ph, 8, 18, 0.6)
    elif kind == "run":  # rotary gallop with spine flexion and a suspension phase
        ph4 = {"HL": ph, "HR": ph - 0.09, "FR": ph - 0.48, "FL": ph - 0.58}
        ik, rot = legs_pose(J, ph4, 0.32, 0.26, 0.07)
        c = math.sin(ph * 2 * math.pi)
        root = (0, 0, 0.018 * math.sin(ph * 2 * math.pi + 1.2))
        rot.update({"spine": [(X, 10 * c)], "hips": [(X, -9 * c)], "neck": [(X, -8 * c)], "head": [(X, -4 * c)]})
        for i in range(6):
            rot[f"tail{i}"] = [(X, (8 if i == 0 else 2) + 6 * math.sin(ph * 2 * math.pi - i * 0.5)), (Z, 3 * math.sin(ph * 2 * math.pi - i))]
    else:  # sneak: low, long stance, head forward
        ph4 = {"HL": ph, "FL": ph - 0.25, "HR": ph - 0.5, "FR": ph - 0.75}
        ik, rot = legs_pose(J, ph4, 0.72, 0.16, 0.022, crouch=1.0)
        root = (0, 0.005, -0.06 - 0.003 * math.cos(ph * 4 * math.pi))
        s1 = math.sin(ph * 2 * math.pi)
        rot.update({"spine": [(Z, 3 * s1), (X, 4)], "hips": [(Z, -3 * s1), (X, -6)], "neck": [(X, 16)], "head": [(X, -12), (Z, -2 * s1)]})
        for i in range(6):
            rot[f"tail{i}"] = [(X, -14 if i == 0 else -1), (Z, 4 * math.sin(ph * 2 * math.pi - i))]
    return {"ik": ik, "rot": rot, "root": root}


def action_poses(J, L):
    def idle(ph):
        s = math.sin(ph * 2 * math.pi)
        rot = {"spine": [(X, 1.2 * s)], "neck": [(X, -1.5 * s), (Z, 9 * math.sin(ph * 2 * math.pi + 1))],
               "head": [(Z, 10 * math.sin(ph * 2 * math.pi + 0.5)), (Y, 4 * math.sin(ph * 4 * math.pi))]}
        tail_wave(rot, ph, 16, 10)
        return {"rot": rot, "root": (0, 0, 0.002 * s)}

    def sit(ph):
        s = math.sin(ph * 2 * math.pi)
        ik = {}
        for side, sg in (("L", -1), ("R", 1)):
            b, h = J[f"ftH.{side}"], J[f"ikH.{side}"]
            ik[f"ikH.{side}"] = Vector((h.x + sg * 0.012, 0.1 * L, 0.014))
            ik[f"ftH.{side}"] = Vector((b.x, 0.02 * L, 0.01))
            w = J[f"ikF.{side}"]
            ik[f"ikF.{side}"] = Vector((w.x, w.y + 0.02, w.z))
        rot = {"hips": [(X, -38)], "spine": [(X, 6)], "neck": [(X, 24)], "head": [(X, 12), (Z, 10 * s)]}
        for i in range(6):
            rot[f"tail{i}"] = [(Z, 16 + 4 * s if i else 30), (X, -12 if i == 0 else -2)]
        return {"ik": ik, "rot": rot, "root": (0, 0.03, -0.075)}

    def jump(ph):
        ik = {}
        e = min(1.0, ph / 0.3)
        tuck = max(0.0, (ph - 0.3) / 0.7)
        for side in "LR":
            w, h, b = J[f"ikF.{side}"], J[f"ikH.{side}"], J[f"ftH.{side}"]
            # take-off: hind legs push back, front reach; then front reach down to land
            fy = -0.07 * e + 0.02 * tuck
            fz = 0.05 * e - 0.03 * tuck
            ik[f"ikF.{side}"] = Vector((w.x, w.y + fy, w.z + fz))
            hy_ = 0.08 * e - 0.1 * tuck
            hz_ = 0.03 * e + 0.05 * tuck
            ik[f"ftH.{side}"] = Vector((b.x, b.y + hy_, b.z + hz_))
            ik[f"ikH.{side}"] = Vector((h.x, h.y + hy_ - 0.01 * tuck, h.z + hz_))
        rot = {"spine": [(X, -8 * e + 10 * tuck)], "hips": [(X, 6 * e - 6 * tuck)], "neck": [(X, 6 * tuck)]}
        for i in range(6):
            rot[f"tail{i}"] = [(X, -6 + 16 * ph if i == 0 else 3)]
        return {"ik": ik, "rot": rot, "root": (0, 0, 0.02 * e)}

    def attack(ph):
        up = math.sin(min(1.0, ph / 0.45) * math.pi / 2) if ph < 0.45 else 1.0
        down = S(0.45, 0.7, np.array([ph]))[0]
        back = S(0.75, 1.0, np.array([ph]))[0]
        w = J["ikF.R"]
        y = w.y - 0.1 * up - 0.05 * down + 0.15 * back
        z = w.z + 0.13 * up - 0.12 * down - 0.01 * back
        ik = {"ikF.R": Vector((w.x, min(w.y, y), max(w.z, z)))}
        k = up * (1 - back)
        rot = {"f_paw.R": [(X, -30 * k)], "spine": [(X, -9 * k)], "hips": [(X, -4 * k)],
               "neck": [(X, 8 * k)], "head": [(Z, -8 * k)]}
        tail_wave(rot, ph, 12, 20)
        return {"ik": ik, "rot": rot, "root": (0, 0.01 * k, 0.012 * k)}

    def hiss(ph):
        c = min(1.0, ph * 4) if ph < 0.8 else (1 - ph) * 5
        rot = {"hips": [(X, -10 * c)], "spine": [(X, 18 * c)], "neck": [(X, 10 * c)],
               "head": [(X, -8 * c), (Z, 5 * math.sin(ph * 40) * c)]}
        for i in range(6):
            rot[f"tail{i}"] = [(X, 45 * c if i == 0 else 4 * c), (Z, 3 * math.sin(ph * 30 + i))]
        return {"rot": rot, "root": (0, 0, 0.03 * c)}

    return [
        ("Idle", 90, idle, True),
        ("Walk", 30, lambda ph: gait_pose(J, ph, "walk"), True),
        ("Trot", 16, lambda ph: gait_pose(J, ph, "trot"), True),
        ("Run", 12, lambda ph: gait_pose(J, ph, "run"), True),
        ("Sneak", 36, lambda ph: gait_pose(J, ph, "sneak"), True),
        ("Jump", 18, jump, False),
        ("Attack", 14, attack, False),
        ("Hiss", 30, hiss, False),
        ("Sit", 90, sit, True),
    ]


def animate(arm, J, L):
    bpy.context.scene.render.fps = FPS
    arm.animation_data_create()
    bpy.context.view_layer.objects.active = arm
    arm.select_set(True)
    for name, frames, fn, loop in action_poses(J, L):
        ctrl = bpy.data.actions.new(f"{name}_ctrl")
        arm.animation_data.action = ctrl
        for f in range(frames + 1):
            key_pose(arm, f + 1, fn(0.0 if (loop and f == frames) else f / frames), J)
        bpy.ops.object.mode_set(mode="POSE")
        bpy.ops.pose.select_all(action="SELECT")
        bpy.ops.nla.bake(frame_start=1, frame_end=frames + 1, step=1, only_selected=True, visual_keying=True,
                         clear_constraints=False, use_current_action=False, bake_types={"POSE"})
        bpy.ops.object.mode_set(mode="OBJECT")
        act = arm.animation_data.action
        act.name = name
        act.use_fake_user = True
        for fc in list(act.fcurves):
            if any(f'"{k}"' in fc.data_path for k in J):
                act.fcurves.remove(fc)
        bpy.data.actions.remove(ctrl)
    # constraints are fully baked in; remove them so the exporter samples plain FK
    for pb in arm.pose.bones:
        for c in list(pb.constraints):
            pb.constraints.remove(c)
    arm.animation_data.action = bpy.data.actions["Idle"]


def export(path):
    bpy.ops.export_scene.gltf(filepath=path, export_format="GLB", export_skins=True, export_animations=True,
                              export_animation_mode="ACTIONS", export_apply=False, export_yup=True,
                              export_force_sampling=True, export_frame_step=1, export_image_format="JPEG",
                              export_jpeg_quality=90)


def build_cat(name, p):
    clear_scene()
    skin, g = build_body(p)
    ears = add_ears(p, g)
    bake_coat(skin, name, p["coat"], g)
    face = add_face_parts(name, p, g, ears)
    arm, J = build_rig(p, g)
    skin_to_rig(skin, face, arm)
    animate(arm, J, g["L"])
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
        attr.data[v.index].color = (*[k ** 2.2 for k in c], 1)
    mat = bpy.data.materials.new("pigeon")
    mat.use_nodes = True
    vc = mat.node_tree.nodes.new("ShaderNodeVertexColor")
    vc.layer_name = "Col"
    mat.node_tree.links.new(vc.outputs[0], mat.node_tree.nodes["Principled BSDF"].inputs["Base Color"])
    body.data.materials.append(mat)
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
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, "pigeon.glb"), export_format="GLB")


for n, spec in CATS.items():
    if not ONLY or n in ONLY:
        build_cat(n, spec)
if not ONLY or "pigeon" in ONLY:
    build_pigeon()
