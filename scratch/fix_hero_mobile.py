import re

file_path = "src/components/home/hero.htm"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace slide container paddings
content = content.replace(
    'px-10 pb-12 md:px-16 md:pb-16',
    'px-6 pb-24 md:px-16 md:pb-16'
)

# Replace slide heading sizes
content = content.replace(
    'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
    'text-3xl sm:text-6xl md:text-7xl lg:text-8xl'
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Hero section mobile typography and paddings fixed successfully!")
