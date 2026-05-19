import re

file_path = "src/components/home/world-presence.htm"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace classes for titles
content = content.replace(
    'class="font-sora text-2xl md:text-3xl font-semibold leading-tight tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-500"',
    'class="font-sora text-xl md:text-3xl font-semibold leading-tight tracking-tight lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500"'
)

# Replace classes for description paragraphs
content = content.replace(
    'class="font-inter text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"',
    'class="font-inter text-xs text-white/80 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"'
)

# Replace classes for badge divs
content = content.replace(
    'class="flex items-center gap-2.5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75"',
    'class="flex items-center gap-2.5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 delay-75"'
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("World presence card details updated successfully for mobile!")
