import re

file_path = r"c:\Users\ks209\Downloads\urbanland\nexas-260\nexas-260\nexas-260\main-v2.6.0\templates\urbanland\src\components\home\product-cards.htm"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Track Container
content = content.replace(
    'class="flex gap-8 overflow-x-auto scroll-smooth px-10"',
    'class="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth px-4 md:px-10"'
)

# 2. Update Article dimensions
content = re.sub(
    r'(<article\s+class="relative flex )h-\[550px\] w-\[400px\]( shrink-0 flex-col justify-between overflow-hidden bg-white group")',
    r'\1h-[240px] w-[160px] sm:h-[380px] sm:w-[280px] md:h-[550px] md:w-[400px]\2',
    content
)

# 3. Update Image class
content = re.sub(
    r'(<img src="[^"]+" alt="[^"]+" class="absolute inset-0 )size-full( object-contain transition-transform duration-700 group-hover:scale-110" />)',
    r'\1m-auto h-[50%] w-[80%] md:h-[60%] md:w-[75%]\2',
    content
)

# 4. Update Top Div
top_div_pattern = re.compile(
    r'<div class="relative z-10 flex items-start justify-between gap-3 p-6">\s*<div class="flex shrink-0 gap-1\.5 pt-0\.5">\s*<span class="(size-\[18px\] rounded-full bg-\[[^\]]+\])"></span>\s*</div>\s*<h3 class="text-right text-\[15px\] font-normal leading-snug text-\[#1A1A1A\]">([^<]+)</h3>\s*</div>'
)
top_div_repl = r'''<div class="relative z-10 flex items-start justify-between gap-3 p-4 md:p-6">
          <h3 class="text-left text-[11px] md:text-[15px] font-normal leading-snug text-[#1A1A1A] max-w-[70%]">\2</h3>
          <div class="flex shrink-0 gap-1.5 pt-0.5">
            <span class="size-3 md:\1"></span>
          </div>
        </div>'''
content = top_div_pattern.sub(top_div_repl, content)

# 5. Update Bottom Div
bottom_div_pattern = re.compile(
    r'<div class="relative z-10 p-6">\s*<p class="mb-0\.5 text-\[10px\] font-semibold uppercase tracking-\[0\.18em\] text-\[#1A1A1A\]/70">[^<]+</p>\s*<p class="font-sora text-base font-bold uppercase tracking-widest text-\[#1A1A1A\]">([^<]+)</p>\s*</div>'
)
bottom_div_repl = r'''<div class="relative z-10 p-4 md:p-6 text-left">
          <p class="font-sora text-xs md:text-base font-bold uppercase tracking-widest text-[#1A1A1A]">\1</p>
        </div>'''
content = bottom_div_pattern.sub(bottom_div_repl, content)

# 6. Update Scroll buttons for mobile hiding (they take up too much space on small screens)
content = content.replace(
    'class="absolute left-3 top-1/2 z-10 flex size-10',
    'class="absolute left-3 top-1/2 z-10 hidden md:flex size-10'
)
content = content.replace(
    'class="absolute right-3 top-1/2 z-10 flex size-10',
    'class="absolute right-3 top-1/2 z-10 hidden md:flex size-10'
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
