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

const files = walk('components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Regex to find dangerouslySetInnerHTML={{ __html: `...` }}
  // We need to match the template literal safely.
  const regex = /dangerouslySetInnerHTML={{ __html: `([\s\S]*?)` }}/g;
  
  content = content.replace(regex, (match, htmlContent) => {
    let newHtml = htmlContent;
    
    // 1. Revert className= to class= in raw HTML
    if (newHtml.includes('className=')) {
      newHtml = newHtml.replace(/className=/g, 'class=');
    }
    
    // 2. Remove HTML comments to prevent React hydration mismatch bugs
    if (newHtml.includes('<!--')) {
      newHtml = newHtml.replace(/<!--[\s\S]*?-->/g, '');
    }
    
    if (newHtml !== htmlContent) {
      changed = true;
    }
    
    return `dangerouslySetInnerHTML={{ __html: \`${newHtml}\` }}`;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed innerHTML in ${file}`);
  }
});
