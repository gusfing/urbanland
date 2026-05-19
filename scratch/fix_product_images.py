import re

file_path = r"src/components/home/product-cards.htm"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace primary and hover images inside the product-cards.htm file
old_pattern = 'class="absolute inset-0 m-auto h-[70%] w-[92%] md:h-[84%] md:w-[92%] object-contain'
new_pattern = 'class="absolute left-0 right-0 top-[16%] bottom-[26%] m-auto h-[58%] w-[92%] md:top-[12%] md:bottom-[20%] md:h-[68%] md:w-[92%] object-contain'

content = content.replace(old_pattern, new_pattern)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Product card images updated successfully!")
