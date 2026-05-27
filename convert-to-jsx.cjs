const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'components');
const outputDir = path.join(__dirname, 'components');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function htmlToJsx(html) {
  let jsx = html;
  
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Close void tags: <img ...> -> <img ... />
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<link([^>]*[^\/])>/g, '<link$1 />');
  jsx = jsx.replace(/<meta([^>]*[^\/])>/g, '<meta$1 />');
  
  // Inline styles are tricky: style="width: 100%; height: 100%; object-fit: cover;"
  // Simplistic conversion for style strings. This handles basic cases.
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const rules = styleString.split(';').filter(s => s.trim());
    const styleObj = {};
    for (const rule of rules) {
      let [key, ...valueParts] = rule.split(':');
      let value = valueParts.join(':').trim();
      if (!key) continue;
      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObj[key] = value;
    }
    return `style={{ ${Object.entries(styleObj).map(([k, v]) => `${k}: '${v}'`).join(', ')} }}`;
  });

  // Convert HTML comments <!-- ... --> to JSX comments {/* ... */}
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // SVG attributes
  jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
  jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
  jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
  jsx = jsx.replace(/fill-rule/g, 'fillRule');
  jsx = jsx.replace(/clip-rule/g, 'clipRule');
  jsx = jsx.replace(/viewBox/g, 'viewBox'); // Already viewBox usually but just in case
  
  // Custom element attributes like content-type="catalog"
  jsx = jsx.replace(/content-type=/g, 'data-content-type=');
  
  // Inline scripts inside <script>...</script>
  // We'll wrap them in a fragment, but actually Next.js prefers useEffect or <Script>
  // Let's comment them out with a generic warning for manual migration
  jsx = jsx.replace(/<script>([\s\S]*?)<\/script>/g, '{/* TODO: Migrate script to useEffect \n$1\n*/}');

  return jsx;
}

function processDirectory(dir, outDir) {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath, path.join(outDir, file));
    } else if (file.endsWith('.htm') || file.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      const isClient = content.includes('<script>') || content.includes('id="');
      const clientDirective = isClient ? '"use client";\nimport { useEffect } from "react";\n\n' : '';
      
      const componentName = file
        .replace(/\.html?$/, '')
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      
      let jsxContent = htmlToJsx(content);
      
      // Wrap in a fragment if there are multiple root elements
      const finalCode = `${clientDirective}export default function ${componentName}() {
  return (
    <>
${jsxContent}
    </>
  );
}`;

      const outFilePath = path.join(outDir, `${componentName}.jsx`);
      fs.writeFileSync(outFilePath, finalCode);
      console.log(`Converted ${file} to ${componentName}.jsx`);
    }
  }
}

processDirectory(inputDir, outputDir);
console.log('Conversion complete!');
