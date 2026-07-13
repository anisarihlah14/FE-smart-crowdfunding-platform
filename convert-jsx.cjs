const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, '..', 'views');
const pagesDir = path.join(__dirname, 'src', 'pages');
const componentsDir = path.join(__dirname, 'src', 'components');

if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

function htmlToJsx(html) {
    // Basic replacements for JSX
    let jsx = html;
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    
    // Auto-close specific tags
    jsx = jsx.replace(/<img([^>]*[^/])>/gi, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*[^/])>/gi, '<input$1 />');
    jsx = jsx.replace(/<br([^>]*[^/])>/gi, '<br$1 />');
    jsx = jsx.replace(/<hr([^>]*[^/])>/gi, '<hr$1 />');
    
    // Fix inline styles - just remove them for simplicity if they are like style="width: 65%" or style="width: 42%" 
    // They appear in progress bars. Let's replace simple style="..." with style={{...}}
    jsx = jsx.replace(/style="([^"]*?):([^"]*?)"/g, (match, prop, val) => {
        return `style={{ ${prop.trim()}: '${val.trim()}' }}`;
    });
    
    return jsx;
}

function extractBody(html) {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        let bodyContent = bodyMatch[1];
        // Remove script tags from body
        bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
        return bodyContent;
    }
    return html;
}

function run() {
    const files = fs.readdirSync(viewsDir);
    for (const file of files) {
        if (file.endsWith('.html')) {
            const filePath = path.join(viewsDir, file);
            const htmlContent = fs.readFileSync(filePath, 'utf8');
            
            let bodyContent = extractBody(htmlContent);
            
            // To make things simpler, we will leave navbar/footer inside each page for now
            // Or extract them. Let's extract them manually later to avoid complex regex logic here.
            
            let jsxContent = htmlToJsx(bodyContent);
            
            const componentName = file.replace('.html', '').split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
            
            const reactCode = `import React from 'react';

const ${componentName} = () => {
  return (
    <>
      ${jsxContent}
    </>
  );
};

export default ${componentName};
`;
            
            const jsxPath = path.join(pagesDir, `${componentName}.jsx`);
            fs.writeFileSync(jsxPath, reactCode);
            console.log(`Created ${componentName}.jsx`);
        }
    }
}

run();
