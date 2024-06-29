# ArSky

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/yourusername/arsky/actions/workflows/node.js.yml/badge.svg)](https://github.com/yourusername/arsky/actions/workflows/node.js.yml)

ArSky is a powerful and easy-to-use Node.js CLI tool for generating or fetching ASCII art. With ArSky, you can either retrieve ASCII art for any word or create your own from an image file.

## Features

- Fetch ASCII art for given words or phrases
- Generate ASCII art from image files
- TypeScript support for enhanced type safety and developer experience
- Comprehensive test suite using Jest
- Consistent code style with ESLint and Prettier

## Installation

Install ArSky globally using npm:

```sh
npm install -g arsky
```

For local development:

```sh
git clone https://github.com/yourusername/arsky.git
cd arsky
npm install
```

## Usage

ArSky can be used with the following options:

### CLI Options

- `-g, --get <text>`: Input text to get ASCII art
- `-c, --create <path>`: Input path to an image file to create ASCII art

### Examples

Fetch ASCII art for a word:

```sh
arsky -g coffee
```

Create ASCII art from an image:

```sh
arsky -c path/to/your/image.png
```

For more options and detailed usage instructions:

```sh
arsky --help
```

## Development

### Available Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled app
- `npm run dev`: Run the app in development mode with ts-node
- `npm test`: Run the test suite
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Run ESLint with auto-fix
- `npm run format`: Format code with Prettier
- `npm run format:check`: Check code formatting without making changes

### Testing

We use Jest for unit testing. Run the test suite with:

```sh
npm test
```

### Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. 

To run the linter:

```sh
npm run lint
```

To automatically fix linting issues:

```sh
npm run lint:fix
```

To format code with Prettier:

```sh
npm run format
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code adheres to the existing style by using the provided ESLint and Prettier configurations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ASCII Art Archive](https://www.asciiart.eu/) for providing a vast collection of ASCII art
- [Sharp](https://sharp.pixelplumbing.com/) for high-performance image processing