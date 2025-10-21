# Tools Directory

This directory contains build and linting tools for the LaTeX project.

## Files

### `build-latex.js`
Node.js script that compiles the LaTeX document to PDF using `node-latex`.

**Features:**
- Reads LaTeX file as string (required for multiple passes)
- Runs pdflatex twice to resolve references and bookmarks
- Outputs PDF to `build/` directory

**Usage:**
```bash
npm run build
# or
node tools/build-latex.js
```

### `lint-latex.js`
Node.js script that lints the LaTeX document using ChkTeX.

**Features:**
- Validates file exists and has content
- Runs ChkTeX with custom configuration
- Warnings allow build to continue, errors stop the build

**Usage:**
```bash
npm run lint
# or
node tools/lint-latex.js src/hours_activities_report.tex
```

### `.chktexrc`
ChkTeX configuration file that customizes linting rules.

**Suppressed warnings:**
- Warning 1: Command terminated with space (false positive in tables)
- Warning 2: Non-breaking space (~) should have been used
- Warning 8: Wrong length of dash (-- vs ---)
- Warning 13: Interword spacing should be used
- Warning 24: Delete this space to maintain correct pagereferences
- Warning 36: Uppercase letter should start sentence
- Warning 44: User Regex matches

## Integration

These tools are integrated into:
- **package.json** - npm scripts (`lint`, `build`, `prebuild`)
- **.vscode/tasks.json** - VSCode build tasks
- **.vscode/launch.json** - VSCode debug configurations
- **.vscode/settings.json** - LaTeX Workshop linting settings
