"""Renders a contact sheet of a cat GLB for visual QA.

    blender -b --python tools/blender/render_preview.py -- model.glb out.png [Action frame]
"""
import bpy
import math
import sys
from mathutils import Vector

args = sys.argv[sys.argv.index("--") + 1:]
src, out = args[0], args[1]
action = args[2] if len(args) > 2 else None
frame = int(args[3]) if len(args) > 3 else 1

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
sc = bpy.context.scene
arm = next((o for o in sc.objects if o.type == "ARMATURE"), None)
if arm and action:
    act = next((a for a in bpy.data.actions if a.name == action or a.name.startswith(action + "_")), None)
    if act:
        arm.animation_data.action = act
sc.frame_set(frame)

sc.render.engine = "CYCLES"
sc.cycles.samples = 16
sc.cycles.use_denoising = False
sc.render.resolution_x, sc.render.resolution_y = 480, 360
world = bpy.data.worlds.new("w")
world.use_nodes = True
world.node_tree.nodes["Background"].inputs[0].default_value = (0.55, 0.6, 0.7, 1)
sc.world = world
bpy.ops.object.light_add(type="SUN", rotation=(math.radians(50), 0, math.radians(30)))
bpy.context.active_object.data.energy = 3
bpy.ops.mesh.primitive_plane_add(size=4)

cam_data = bpy.data.cameras.new("c")
cam_data.lens = 50
cam = bpy.data.objects.new("c", cam_data)
sc.collection.objects.link(cam)
sc.camera = cam
target = Vector((0, -0.05, 0.22))
views = {"side": (1.3, 0, 0.35), "front": (0.35, -1.3, 0.4), "back": (-0.6, 1.1, 0.6), "face": (0.15, -0.7, 0.4)}
base = out.rsplit(".", 1)[0]
for name, (x, y, z) in views.items():
    cam.location = Vector((x, y, z)) + (Vector((0, -0.32, 0.18)) if name == "face" else Vector())
    t = Vector((0, -0.34, 0.38)) if name == "face" else target
    cam.rotation_euler = (t - cam.location).to_track_quat("-Z", "Y").to_euler()
    sc.render.filepath = f"{base}_{name}.png"
    bpy.ops.render.render(write_still=True)
