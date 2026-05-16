import os
import shutil

base_dir = r"public\images\products-new"
for root, dirs, files in os.walk(base_dir):
    for dir_name in dirs:
        dir_path = os.path.join(base_dir, dir_name)
        images = [f for f in os.listdir(dir_path) if f.endswith('.jpeg') or f.endswith('.jpg') or f.endswith('.png')]
        if images:
            # take the first image
            img_path = os.path.join(dir_path, images[0])
            new_name = dir_name.replace(" ", "_") + ".jpeg"
            new_path = os.path.join(base_dir, new_name)
            shutil.copy(img_path, new_path)

print("Renamed files:")
for f in os.listdir(base_dir):
    if os.path.isfile(os.path.join(base_dir, f)):
        print(f)
