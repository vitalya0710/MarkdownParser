// markdownParser.js

class MarkdownParser {
    constructor() {
      this.rules = [
        { regex: /##\s+(.*)\n/g, replacement: '<h2>$1</h2>' }, // Heading 2
        { regex: /#\s+(.*)\n/g, replacement: '<h1>$1</h1>' }, // Heading 1
        { regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>' }, // Bold
        { regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>' }, // Italic
        { regex: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2">$1</a>' }, // Links
        { regex: /!\[(.*?)\]\((.*?)\)/g, replacement: '<img src="$2" alt="$1">' }, // Images
        { regex: /`([^`]+)`/g, replacement: '<code>$1</code>' }, // Code
        { regex: /^-{3,}\n/g, replacement: '<hr />' }, // Horizontal Rule
        { regex: /\n/g, replacement: '<br />' } // Line Break
      ];
    }
  
    parse(markdownText) {
      let htmlText = markdownText;
  
      this.rules.forEach(rule => {
        htmlText = htmlText.replace(rule.regex, rule.replacement);
      });
  
      return htmlText;
    }
  }
  
  module.exports = MarkdownParser;
  