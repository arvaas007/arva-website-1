const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'assets', 'css', 'main.css');
let css = fs.readFileSync(filePath, 'utf8');

// Replace all Georgia serif with Syne CSS variable
css = css.split('font-family: Georgia, "Times New Roman", serif;')
         .join('font-family: var(--font-display);');

css = css.split("font-family: Georgia, 'Times New Roman', serif;")
         .join('font-family: var(--font-display);');

css = css.split('font-family: Georgia, "Times New Roman", serif !important;')
         .join('font-family: var(--font-display) !important;');

// Replace Inter with Space Grotesk in any inline declarations
css = css.split("'Inter', system-ui, -apple-system, sans-serif")
         .join("var(--font-body)");

css = css.split('"Inter", system-ui, sans-serif')
         .join("var(--font-body)");

css = css.split("'Inter', system-ui, sans-serif")
         .join("var(--font-body)");

fs.writeFileSync(filePath, css);
console.log('Done! All Georgia and Inter font-family declarations replaced.');
