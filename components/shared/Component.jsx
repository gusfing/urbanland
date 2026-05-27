import fs from 'fs';
import path from 'path';

export default function Component(props) {
  const { src, ...restProps } = props;
  
  if (!src) return null;

  try {
    const filePath = path.join(process.cwd(), src);
    let html = fs.readFileSync(filePath, 'utf8');

    // Replace properties like {=$propName} with the actual prop value
    for (const [key, value] of Object.entries(restProps)) {
      const regex = new RegExp(`{\\=\\$${key}}`, 'g');
      html = html.replace(regex, value !== undefined && value !== null ? value : '');
    }

    // Remove any unmatched {=$someVar} template tags
    html = html.replace(/{\=\$[^}]+}/g, '');

    // Return the HTML directly inside a wrapper that doesn't affect flex/grid layouts
    return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />;
  } catch (error) {
    console.error(`Error loading HTML partial ${src}:`, error);
    return null;
  }
}
