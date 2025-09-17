# Hello-TeX Resume

A professional LaTeX resume template for Roku Developer positions, featuring clean typography and modern formatting.

## 📋 Features

- **Professional Layout**: Clean, modern design optimized for technical positions
- **Customizable Spacing**: Easy-to-modify spacing variables for consistent formatting
- **Typography Enhancements**: Uses microtype for improved text rendering
- **Section Styling**: Blue headers with horizontal rules for visual hierarchy
- **Responsive Design**: Optimized for both digital viewing and printing

## 🛠️ Requirements

### LaTeX Distribution
You need a LaTeX distribution installed on your system:

#### macOS
```bash
# Using Homebrew (recommended)
brew install --cask mactex

# Or download from: https://tug.org/mactex/
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install texlive-full
```

#### Windows
- [MiKTeX](https://miktex.org/) or [TeX Live](https://tug.org/texlive/)

### Required Packages
The following LaTeX packages are used (usually included in full distributions):
- `inputenc`, `fontenc` - Character encoding
- `geometry` - Page layout
- `enumitem` - Enhanced lists
- `hyperref` - Clickable links
- `parskip` - Paragraph spacing
- `xcolor` - Colors
- `multicol` - Multi-column layouts
- `microtype` - Typography improvements
- `titlesec` - Section formatting

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/fragualej/hello-tex.git
cd hello-tex
```

### 2. Navigate to Resume Directory
```bash
cd resume
```

### 3. Compile the Resume
```bash
pdflatex resume.tex
```

Or use your preferred LaTeX editor (TeXShop, TeXworks, VS Code with LaTeX Workshop, etc.)

### 4. View the Output
The compiled PDF will be available as `resume.pdf`

## 📁 Project Structure

```
hello-tex/
├── README.md
├── .gitignore
└── resume/
    ├── resume.tex    # Main LaTeX source file
    └── build/        # Generated files (ignored by git)
```

## ✨ Customization

### Spacing
Modify the spacing between job entries by changing:
```latex
\setlength{\jobspacing}{0.8em}  % Adjust this value
```

### Colors
Change section header colors by modifying:
```latex
\titleformat{\section}{\Large\bfseries\color{blue!70!black}}{}{0em}{}[\titlerule]
```

### Personal Information
Update your details in the header section:
```latex
{\LARGE \textbf{Your Name}}\\
\textbf{Your Title} \\
Location | Phone | \href{mailto:email}{email} \\
\href{linkedin-url}{LinkedIn} | \href{github-url}{GitHub}
```

## 🔧 Development

### Build Script (Optional)
You can create a simple build script:

```bash
#!/bin/bash
cd resume
pdflatex resume.tex
pdflatex resume.tex  # Run twice for proper references
```

### VS Code Setup
If using VS Code, install the [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) extension for integrated compilation and preview.

## 📝 Common Issues

### Missing Packages
If you get package errors, install missing packages using these commands:

#### TeX Live (macOS/Linux)
```bash
# Update package database
sudo tlmgr update --self

# Install specific package
sudo tlmgr install package-name

# Install all packages (warning: large download)
sudo tlmgr install scheme-full

# Check if package is installed
tlmgr info package-name
```

#### MiKTeX (Windows)
```bash
# Install package
mpm --install package-name

# Update packages
mpm --update
```

#### Linux Package Managers
```bash
# Ubuntu/Debian - install additional packages
sudo apt install texlive-latex-extra texlive-fonts-extra

# Fedora/RHEL
sudo dnf install 'tex(package-name.sty)'
```

### Compilation Errors
- Run `pdflatex` twice to resolve cross-references
- Check for typos in LaTeX commands
- Ensure all `\begin{}` have matching `\end{}`

### Underfull/Overfull Box Warnings
The template includes `\raggedright` and `\sloppy` to minimize these warnings. If you still see them, they're usually cosmetic and don't affect the final output.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Alejandro Gutiérrez Franco**
- GitHub: [@fragualej](https://github.com/fragualej)
- LinkedIn: [Alejandro Gutiérrez Franco](https://www.linkedin.com/in/alejandro-gutierrez-franco-06214674)

---

⭐ **Star this repo if you find it helpful!**