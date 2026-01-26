import fs from 'fs';
import path from 'path';

// Path to the root DOCUMENTATION.md
const DOCS_PATH = path.join(process.cwd(), '../DOCUMENTATION.md');

export function getDocumentationContent() {
    try {
        const fileContent = fs.readFileSync(DOCS_PATH, 'utf8');
        return fileContent;
    } catch (e) {
        console.error('Failed to read DOCUMENTATION.md', e);
        return '# Error\n\nCould not load documentation. Please ensure DOCUMENTATION.md exists in the project root.';
    }
}
