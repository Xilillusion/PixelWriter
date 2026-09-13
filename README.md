# PixelWriter

PixelWriter is a local-first browser toolkit for converting text, PDF pages, and Markdown documents into PNG images.

## Tools

### TXT to pixel PNG

- Converts ASCII text into a crisp PNG.
- Includes a built-in 5x7 bitmap glyph set.
- Supports system monospace fonts.
- Supports custom cell width and height.
- Supports black-and-white and grayscale output.
- Shows preview dimensions and PNG size estimates.

### PDF to PNG

- Renders selected PDF pages with PDF.js.
- Supports start and end page selection.
- Supports vertical stitching of multiple pages.
- Supports 0-300% render scale.
- Supports black-and-white, grayscale, 16-color, and 256-color output.
- Supports lossless and compressed render settings.
- Shows preview dimensions and PNG size estimates.

### MD to PNG

- Converts Markdown files into styled PNG images.
- Supports headings, lists, links, blockquotes, code blocks, and LaTeX.
- Supports system font selection.
- Supports 0-300% render scale.
- Supports black-and-white, grayscale, 16-color, and 256-color output.
- Shows preview dimensions and PNG size estimates.

## Running locally

No build step or package installation is required.

Open [index.html](index.html) in a browser, then select a tool. The pages can also be served with any simple local HTTP server:

```powershell
python -m http.server
```

Then open `http://localhost:8000/`.

Local HTTP hosting is recommended because browsers may restrict `fetch()` when pages are opened directly with `file://`.

## Test files

Default test inputs are stored in the [`test/`](test/) folder:

- [`test/test.txt`](test/test.txt)
- [`test/test.pdf`](test/test.pdf)
- [`test/test.md`](test/test.md)

The three tools load their corresponding test file automatically when available.

## Project structure

```text
.
├── index.html
├── txt-to-png.html
├── pdf-to-png.html
├── md-to-png.html
├── shared.css
├── shared.js
└── test/
    ├── test.txt
    ├── test.pdf
    └── test.md
```

`shared.css` and `shared.js` provide the common navigation and preview styling used by the tools.

## External dependencies

The browser loads these libraries from public CDNs:

- [PDF.js 4.4.168](https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs)
- [Marked 15.0.7](https://cdn.jsdelivr.net/npm/marked@15.0.7/)
- [KaTeX 0.16.11](https://cdn.jsdelivr.net/npm/katex@0.16.11/)
- [html2canvas 1.4.1](https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/)

## Limitations

- PNG size values are estimates; the final encoded size depends on image content and browser encoding.
- “Compressed” output reduces render scale before PNG encoding. Browser PNG encoding itself remains lossless.
- PDF and Markdown rendering depends on browser support and the availability of the CDN libraries.
- TXT bitmap mode replaces non-ASCII characters with `?`.

## Citation

If you reuse or adapt this project, please cite it as:

> PixelWriter, a local browser-based text, PDF, and Markdown to PNG toolkit. Created with assistance from an AI assistant using the Copilot CLI runtime in VS Code, 2026.

AI-assisted implementation and refactoring were provided by **OpenAI ChatGPT**, operating as an AI assistant using the Copilot CLI runtime in VS Code.
