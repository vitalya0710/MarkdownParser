# Markdown Parser

A simple JavaScript library for parsing Markdown text into HTML.

## Installation

You can install the Markdown Parser package via npm:

```bash
npm install markdown-parser-js
```

## Usage

```javascript
const MarkdownParser = require('markdown-parser-js');

// Create a new instance of MarkdownParser
const parser = new MarkdownParser();

// Parse Markdown text into HTML
const markdownText = '## Heading\nThis is **bold** text.';
const htmlText = parser.parse(markdownText);

console.log(htmlText);
// Output: "<h2>Heading</h2>\n<p>This is <strong>bold</strong> text.</p>"
```

## Supported Markdown Syntax

- Headings: `#`, `##`, `###`, etc.
- Bold: `**text**`, `__text__`
- Italic: `*text*`, `_text_`
- Links: `[text](url)`
- Images: `![alt text](image url)`
- Code: `` `code` ``
- Horizontal Rule: `---`
- Line Break: `<br />`

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/your-username/markdown-parser-js).

## License

This project is licensed under the [MIT License](LICENSE).
