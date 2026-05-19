import os
from PIL import Image, ImageDraw

def draw_favicon(size):
    # Create image with alpha channel
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Scale coordinates based on 128px design
    scale = size / 128.0
    
    # Draw rounded rect background
    rx = int(round(36 * scale))
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=rx, fill=(17, 17, 17, 255))
    
    # Draw primary brand orange arch/canopy
    p0 = (32 * scale, 88 * scale)
    p1 = (32 * scale, 44 * scale)
    p2 = (96 * scale, 44 * scale)
    p3 = (96 * scale, 88 * scale)
    
    steps = 40
    points = []
    for i in range(steps + 1):
        t = i / steps
        x = (1-t)**3 * p0[0] + 3*(1-t)**2 * t * p1[0] + 3*(1-t) * t**2 * p2[0] + t**3 * p3[0]
        y = (1-t)**3 * p0[1] + 3*(1-t)**2 * t * p1[1] + 3*(1-t) * t**2 * p2[1] + t**3 * p3[1]
        points.append((x, y))
        
    orange_color = (139, 55, 33, 255) # #8b3721
    draw.line(points, fill=orange_color, width=max(1, int(round(12 * scale))), joint="round")
    
    # Draw horizontal slat
    draw.line(
        [(24 * scale, 72 * scale), (104 * scale, 72 * scale)],
        fill=(255, 255, 255, 255),
        width=max(1, int(round(10 * scale))),
        joint="round"
    )
    
    # Draw vertical supports
    draw.line(
        [(48 * scale, 72 * scale), (48 * scale, 88 * scale)],
        fill=(255, 255, 255, 255),
        width=max(1, int(round(8 * scale))),
        joint="round"
    )
    draw.line(
        [(80 * scale, 72 * scale), (80 * scale, 88 * scale)],
        fill=(255, 255, 255, 255),
        width=max(1, int(round(8 * scale))),
        joint="round"
    )
    
    return img

def main():
    public_dir = r"c:\Users\ks209\Downloads\urbanland\nexas-260\nexas-260\nexas-260\main-v2.6.0\templates\urbanland\public"
    
    # 1. Save PNG files
    png_targets = {
        "favicon-96x96.png": 96,
        "apple-touch-icon.png": 180,
        "web-app-manifest-192x192.png": 192,
        "web-app-manifest-512x512.png": 512,
    }
    
    for filename, size in png_targets.items():
        filepath = os.path.join(public_dir, filename)
        img = draw_favicon(size)
        img.save(filepath, "PNG")
        print(f"Generated {filename} ({size}x{size})")
        
    # 2. Save favicon.ico containing 16x16, 32x32, 48x48, 256x256
    ico_filepath = os.path.join(public_dir, "favicon.ico")
    ico_sizes = [16, 32, 48, 256]
    ico_imgs = [draw_favicon(size) for size in ico_sizes]
    
    # Pillow allows saving ICO with multiple sizes by using save(..., append_images=...)
    ico_imgs[0].save(ico_filepath, format="ICO", append_images=ico_imgs[1:])
    print("Generated favicon.ico with multi-resolutions.")

if __name__ == "__main__":
    main()
