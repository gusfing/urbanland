import os
from PIL import Image

def compress_images():
    hero_dir = r"c:\Users\ks209\Downloads\urbanland\nexas-260\nexas-260\nexas-260\main-v2.6.0\templates\urbanland\public\images\hero"
    
    print(f"Scanning directory: {hero_dir}")
    if not os.path.exists(hero_dir):
        print("Directory does not exist!")
        return

    files = [f for f in os.listdir(hero_dir) if f.lower().endswith(('.jpeg', '.jpg', '.png'))]
    print(f"Found {len(files)} images to optimize.")

    for filename in files:
        filepath = os.path.join(hero_dir, filename)
        orig_size = os.path.getsize(filepath)
        
        try:
            with Image.open(filepath) as img:
                # Keep aspect ratio but limit max width to 1920px for hero images
                max_width = 1920
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int(float(img.height) * float(ratio))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    print(f"Resized {filename} to {max_width}x{new_height}")
                
                # Convert RGBA to RGB for JPEG format
                if img.mode in ("RGBA", "P") and filename.lower().endswith(('.jpg', '.jpeg')):
                    img = img.convert("RGB")
                
                # Compress and overwrite
                if filename.lower().endswith(('.jpg', '.jpeg')):
                    img.save(filepath, "JPEG", quality=82, optimize=True)
                elif filename.lower().endswith('.png'):
                    # Save as PNG with optimization or convert to JPEG if appropriate
                    img.save(filepath, "PNG", optimize=True)
                
                new_size = os.path.getsize(filepath)
                reduction = (orig_size - new_size) / orig_size * 100
                print(f"Optimized {filename}: {orig_size/1024/1024:.2f}MB -> {new_size/1024/1024:.2f}MB ({reduction:.1f}% reduction)")
        except Exception as e:
            print(f"Error optimizing {filename}: {e}")

if __name__ == "__main__":
    compress_images()
