const fs = require('fs');
const path = require('path');

const files = [
    { name: 'DOCUMENTATION.md', required: true },
    { name: 'CHANGELOG.md', required: true },
    { name: 'CONTRIBUTING.md', required: true },
    { name: 'CODE_OF_CONDUCT.md', required: true },
    { name: 'MIGRATION.md', required: true },
    { name: 'COMPARISON.md', required: true }
];

let hasErrors = false;

console.log('📝 Copying documentation files...\n');

// Function to find the project root by looking for package.json with react-meta-seo
function findProjectRoot(startDir) {
    let currentDir = path.dirname(startDir); // Start from parent of scripts directory
    const maxDepth = 5; // Prevent infinite loops
    let depth = 0;

    while (depth < maxDepth) {
        // Check if DOCUMENTATION.md exists in this directory (marker for project root)
        if (fs.existsSync(path.join(currentDir, 'DOCUMENTATION.md'))) {
            return currentDir;
        }

        // Also check package.json name
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            try {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                if (packageJson.name === 'react-meta-seo') {
                    return currentDir;
                }
            } catch (e) {
                // Invalid package.json, continue searching
            }
        }

        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) {
            // Reached filesystem root without finding project root
            break;
        }
        currentDir = parentDir;
        depth++;
    }

    // Fallback to relative path
    return path.join(__dirname, '../..');
}

const projectRoot = findProjectRoot(__dirname);
console.log(`📂 Project root: ${projectRoot}\n`);

files.forEach(file => {
    try {
        const src = path.join(projectRoot, file.name);
        const dest = path.join(__dirname, '../', file.name);
        
        // Check if source exists
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
            console.log(`✅ Copied ${file.name}`);
        } else {
            const message = `⚠️  Could not find ${file.name} at ${src}`;
            if (file.required) {
                console.error(message);
                hasErrors = true;
            } else {
                console.warn(message);
            }
        }
    } catch (error) {
        console.error(`❌ Failed to copy ${file.name}:`, error.message);
        hasErrors = true;
    }
});

console.log('\n' + (hasErrors ? '❌ Copy completed with errors' : '✅ All documentation files copied successfully'));

if (hasErrors) {
    process.exit(1);
}


