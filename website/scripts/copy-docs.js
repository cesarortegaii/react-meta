const fs = require('fs');
const path = require('path');

try {
    const src = path.join(__dirname, '../../DOCUMENTATION.md');
    const dest = path.join(__dirname, '../DOCUMENTATION.md');
    
    // Check if source exists
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log('✅ Copied DOCUMENTATION.md to website root');
    } else {
        console.warn('⚠️ Could not find source DOCUMENTATION.md at ' + src);
    }
} catch (error) {
    console.error('❌ Failed to copy docs:', error);
    process.exit(1);
}
