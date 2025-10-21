#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read the LaTeX file
const filePath = process.argv[2] || './src/hours_activities_report.tex';
const chktexrcPath = path.join(__dirname, '.chktexrc');

// Simple validation - check if file exists and has content
if (!fs.existsSync(filePath)) {
  console.error(`✗ Error: File not found: ${filePath}`);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

if (!content.trim()) {
  console.error(`✗ Error: File is empty: ${filePath}`);
  process.exit(1);
}

console.log('='.repeat(60));
console.log('LaTeX Linting with ChkTeX');
console.log('='.repeat(60));
console.log(`File: ${filePath}`);
console.log(`Size: ${content.length} bytes`);
console.log('');

// Run ChkTeX linter with config from tools directory
try {
  const output = execSync(`chktex -l ${chktexrcPath} ${filePath}`, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // ChkTeX outputs to stderr even on success, so we check both
  console.log(output);
  console.log('✓ ChkTeX linting passed!');
} catch (error) {
  // ChkTeX returns non-zero exit code if there are warnings/errors
  // But we still want to see the output
  if (error.stdout) {
    console.log(error.stdout);
  }
  if (error.stderr) {
    console.error(error.stderr);
  }

  // Only fail on actual errors, not warnings
  if (error.stderr && error.stderr.includes('Error')) {
    console.error('\n✗ ChkTeX found errors!');
    process.exit(1);
  } else {
    console.log('\n⚠ ChkTeX found warnings (continuing build...)');
  }
}

console.log('');
