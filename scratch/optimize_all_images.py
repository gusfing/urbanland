import os
from PIL import Image

def optimize_all_images():
    base_dir = r"c:\Users\ks209\Downloads\urbanland\nexas-260\nexas-260\nexas-260\main-v2.6.0\templates\urbanland\public\images"
    print(f"Scanning base directory: {base_dir}")
    
    if not os.path.exists(base_dir):
        print("Base directory does not exist!")
        return

    optimized_count = 0
    total_saved = 0

    for root, dirs, files in os.walk(base_dir):
        for filename in files:
            if not filename.lower().endswith(('.jpeg', '.jpg', '.png')):
                continue
                
            filepath = os.path.join(root, filename)
            orig_size = os.path.getsize(filepath)
            
            # Skip files that are already small (e.g. less than 150KB)
            if orig_size < 150 * 1024:
                continue
                
            try:
                with Image.open(filepath) as img:
                    # Let's check format
                    fmt = img.format
                    
                    # 1. Limit max width to 1600px for non-hero, 1920 for hero
                    is_hero = "hero" in root.lower()
                    max_width = 1920 if is_hero else 1400
                    
                    # If it's a product cut-out image, we should keep transparency
                    has_transparency = img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info)
                    
                    resized = False
                    if img.width > max_width:
                        ratio = max_width / float(img.width)
                        new_height = int(float(img.height) * float(ratio))
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        resized = True
                    
                    # 2. Compress
                    if fmt == "PNG" and not has_transparency:
                        # Convert to JPEG if no transparency for 90% size reduction!
                        # We save it back as a JPEG, but since we want to keep original names, we keep it as PNG but using JPEG format parameters if we want,
                        # actually, better to keep format but optimize PNG compression.
                        img.save(filepath, "PNG", optimize=True)
                    elif fmt == "PNG":
                        img.save(filepath, "PNG", optimize=True)
                    elif fmt in ("JPEG", "JPG"):
                        # Convert RGBA/P to RGB just in case
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        img.save(filepath, "JPEG", quality=80, optimize=True)
                    else:
                        img.save(filepath, optimize=True)
                        
                    new_size = os.path.getsize(filepath)
                    reduction = orig_size - new_size
                    
                    if reduction > 0:
                        total_saved += reduction
                        optimized_count += 1
                        print(f"Optimized {filename} in {os.path.relpath(root, base_dir)}: {orig_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({(reduction/orig_size)*100:.1f}% reduction)")
            except Exception as e:
                print(f"Error optimizing {filename}: {e}")
                
    print(f"Optimization complete! Optimized {optimized_count} images. Saved {total_saved/1024/1024:.2f} MB total!")

if __name__ == "__main__":
    optimize_all_images()
