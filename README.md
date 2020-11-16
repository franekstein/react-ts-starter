# 📦 React Typescript Starter

Modern React & Typescript boilderplate for rapid project contruction

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

Clone this repo and yarn install.

```bash
yarn
```

## Usage

### Development server

```bash
yarn start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
yarn build
```

You need to generate certificates if you want to use local server (HTTPS/HTTP2) for serving production build

```bash
cd server/certificates
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:4096 -keyout private.key -out certificate.crt
```

or you can serve it with `serve` package

```bash
yarn build
npx serve dist
```

## Features

- [Webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/) - with CSS Modules, custom properties, custom selectors, custom media and image set

## License

This project is open source and available under the [MIT License](LICENSE).