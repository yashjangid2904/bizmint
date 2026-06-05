const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('bizmint.in')) {
    // Replace any occurrence of bizmint.in that doesn't have .co before it with bizmint.co.in
    const updated = content.replace(/(?<!\.co)bizmint\.in/g, 'bizmint.co.in');
    
    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        traverseDir(fullPath);
      }
    } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.json'))) {
      replaceInFile(fullPath);
    }
  }
}

// Target the app directory relative to this script
traverseDir(path.join(__dirname, '..', 'app'));
console.log('Domain replacement finished.');
