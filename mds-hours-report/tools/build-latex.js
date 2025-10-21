#!/usr/bin/env node

const latex = require('node-latex');
const fs = require('fs');
const path = require('path');

// Paths
const inputFile = './src/hours_activities_report.tex';
const outputDir = './build';
const outputFile = path.join(outputDir, 'hours_activities_report.pdf');

// Create build directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read the LaTeX file as a string (required for multiple passes)
const input = fs.readFileSync(inputFile, 'utf8');
const output = fs.createWriteStream(outputFile);

console.log('Building LaTeX document...');
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);

// Compile LaTeX to PDF
const pdf = latex(input, {
  cmd: 'pdflatex',
  inputs: path.resolve(path.dirname(inputFile)),
  passes: 2, // Run pdflatex twice to resolve references and bookmarks
  errorLogs: path.join(outputDir, 'latex-error.log')
});

pdf.pipe(output);

pdf.on('error', err => {
  console.error('LaTeX compilation error:', err);
  process.exit(1);
});

pdf.on('finish', () => {
  console.log('✓ PDF generated successfully!');
  console.log(`Output file: ${outputFile}`);
});

output.on('finish', () => {
  console.log('✓ Build complete!');
});
