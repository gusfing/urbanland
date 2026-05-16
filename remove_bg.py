import os
import rembg

input_dir = r"public\images\products-new"
for f in os.listdir(input_dir):
    if f.endswith('.jpeg') or f.endswith('.jpg'):
        input_path = os.path.join(input_dir, f)
        output_path = os.path.join(input_dir, f.rsplit('.', 1)[0] + '.png')
        
        print(f"Processing {f}...")
        with open(input_path, 'rb') as i:
            with open(output_path, 'wb') as o:
                input_data = i.read()
                output_data = rembg.remove(input_data)
                o.write(output_data)
        
        print(f"Saved {output_path}")
        os.remove(input_path)
