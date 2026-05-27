const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const componentFiles = walk('components');
const targetComponentPath = path.join(process.cwd(), 'components', 'shared', 'Component.jsx');

componentFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<Component') && !content.includes('import Component from')) {
    let relDir = path.relative(path.dirname(file), path.dirname(targetComponentPath));
    if (relDir === '') relDir = '.';
    relDir = relDir.replace(/\\/g, '/');
    const importStatement = `import Component from "${relDir}/Component";\n`;
    
    if (content.startsWith('"use client";')) {
      content = content.replace('"use client";', '"use client";\n' + importStatement);
    } else {
      content = importStatement + content;
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
