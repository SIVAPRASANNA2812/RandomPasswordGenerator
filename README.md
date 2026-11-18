# Random Password Generator

A small browser-based project for generating and copying a random 14-character password.

## Features

- Generates a 14-character password using uppercase and lowercase letters, numbers, and symbols.
- Copies the generated password to the clipboard.
- Shows a confirmation message after copying.

## Built With

- HTML
- CSS
- JavaScript
- Font Awesome icons

## Run Locally

1. Clone or download this repository.
2. Open `index.html` in a browser, or use a local development server such as the Five Server extension in VS Code.
3. Select **Generate** to create a password. Select the copy icon to copy it.

## Project Files

- `index.html` - Page structure and content.
- `style.css` - Page styling.
- `script.js` - Password generation and copy behavior.

## Security Note

This project currently uses `Math.random()` for password generation. It is intended for learning and demonstration, not for generating passwords for sensitive accounts. Use a cryptographically secure random source, such as the Web Crypto API, before relying on generated passwords for real-world security.
