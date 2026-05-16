import re

file_path = r"c:\Users\ks209\Downloads\urbanland\nexas-260\nexas-260\nexas-260\main-v2.6.0\templates\urbanland\src\components\home\category-bar.htm"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the buttons (everything inside <div id="cat-track"...> and </div>)
# We can use regex to find the content between the start of <!-- 1. Wicker --> and the end of the 10th button.
match = re.search(r'(<!-- 1\. Wicker -->.*?</button>\s*)</div>', content, re.DOTALL)
if match:
    buttons_html = match.group(1).strip()
    
    new_html = f"""<!-- category bar section -->
<section
  class="w-full border-b border-gray-200 bg-white"
  aria-label="Product categories"
>
  <div class="relative flex overflow-hidden">
    <!-- Marquee Track -->
    <div class="marquee-track flex animate-marquee whitespace-nowrap py-8">
      <!-- Group 1 -->
      <div class="flex items-center gap-8 px-4">
        {buttons_html}
      </div>
      <!-- Group 2 (Clone for seamless loop) -->
      <div class="flex items-center gap-8 px-4">
        {buttons_html}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes cat-marquee {{
    0% {{ transform: translateX(0); }}
    100% {{ transform: translateX(-50%); }}
  }}
  .animate-marquee {{
    animation: cat-marquee 40s linear infinite;
  }}
  .marquee-track:hover {{
    animation-play-state: paused;
  }}
</style>
"""

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Successfully updated category-bar.htm")
else:
    print("Failed to extract buttons")
