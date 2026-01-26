import fs from 'fs';
import path from 'path';

// Paths to documentation files
const DOCS_PATH = path.join(process.cwd(), 'DOCUMENTATION.md');
const CHANGELOG_PATH = path.join(process.cwd(), 'CHANGELOG.md');
const CONTRIBUTING_PATH = path.join(process.cwd(), 'CONTRIBUTING.md');
const CODE_OF_CONDUCT_PATH = path.join(process.cwd(), 'CODE_OF_CONDUCT.md');
const MIGRATION_PATH = path.join(process.cwd(), 'MIGRATION.md');
const COMPARISON_PATH = path.join(process.cwd(), 'COMPARISON.md');

function readMarkdownFile(filePath: string, fileName: string): string {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return fileContent;
    } catch (e) {
        console.error(`Failed to read ${fileName}`, e);
        return `# Error\n\nCould not load ${fileName}. Please ensure the file exists in the website root.`;
    }
}

export function getDocumentationContent(): string {
    return readMarkdownFile(DOCS_PATH, 'DOCUMENTATION.md');
}

export function getChangelogContent(): string {
    return readMarkdownFile(CHANGELOG_PATH, 'CHANGELOG.md');
}

export function getContributingContent(): string {
    return readMarkdownFile(CONTRIBUTING_PATH, 'CONTRIBUTING.md');
}

export function getCodeOfConductContent(): string {
    return readMarkdownFile(CODE_OF_CONDUCT_PATH, 'CODE_OF_CONDUCT.md');
}

export function getMigrationContent(): string {
    return readMarkdownFile(MIGRATION_PATH, 'MIGRATION.md');
}

export function getComparisonContent(): string {
    return readMarkdownFile(COMPARISON_PATH, 'COMPARISON.md');
}

