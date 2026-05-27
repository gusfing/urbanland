const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.jsx')) results.push(file);
  });
  return results;
}

const componentFiles = walk('components');

function replaceComponents(content, file) {
  let result = '';
  let i = 0;
  let changed = false;
  
  while (i < content.length) {
    const idx = content.indexOf('<Component', i);
    if (idx === -1) {
      result += content.slice(i);
      break;
    }
    
    const endIdx = content.indexOf('/>', idx);
    if (endIdx === -1) {
      result += content.slice(i, idx + 10);
      i = idx + 10;
      continue;
    }
    
    const inner = content.slice(idx + 10, endIdx);
    
    const props = {};
    const attrRegex = /([a-zA-Z0-9_-]+)="([^"]*)"/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(inner)) !== null) {
      props[attrMatch[1]] = attrMatch[2];
    }
    
    if (props.src) {
      const htmPath = path.join(process.cwd(), props.src);
      if (fs.existsSync(htmPath)) {
        let html = fs.readFileSync(htmPath, 'utf8');
        for (const [key, value] of Object.entries(props)) {
          if (key === 'src') continue;
          const tplRegex = new RegExp(`{\\=\\$${key}}`, 'g');
          html = html.replace(tplRegex, value);
        }
        html = html.replace(/{\=\$[^}]+}/g, '');
        html = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        result += content.slice(i, idx) + `<div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: \`${html}\` }} />`;
        i = endIdx + 2;
        changed = true;
        continue;
      } else {
        console.warn(`Missing HTM file: ${htmPath} in ${file}`);
      }
    }
    
    result += content.slice(i, endIdx + 2);
    i = endIdx + 2;
  }
  
  if (changed) {
    // Remove the import Component statement we added previously
    result = result.replace(/import Component from ['"][^'"]+Component['"];?\n?/g, '');
  }
  
  return { result, changed };
}

componentFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const { result, changed } = replaceComponents(content, file);
  
  if (changed) {
    fs.writeFileSync(file, result);
    console.log(`Inlined components in ${file}`);
  }
});
