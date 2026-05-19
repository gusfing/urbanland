import re

file_path = "src/components/home/product-cards.htm"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Make all 8 product card articles bigger
old_dims = "h-[350px] w-[260px] sm:h-[450px] sm:w-[340px] md:h-[580px] md:w-[440px]"
new_dims = "h-[400px] w-[290px] sm:h-[500px] sm:w-[370px] md:h-[640px] md:w-[470px]"

content = content.replace(old_dims, new_dims)

# Make the scroll step dynamic
old_step = "const STEP = 432;"
new_step = "const STEP = track.firstElementChild ? track.firstElementChild.offsetWidth + 24 : 432;"

content = content.replace(old_step, new_step)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Product cards resized and dynamic scrolling step integrated successfully!")
