# [elements](https://mrcgrtz.github.io/elements/)

> elements is my personal Web Components library, built with [Lit](https://lit.dev/).

[![Test Workflow](https://github.com/mrcgrtz/elements/actions/workflows/test.yml/badge.svg)](https://github.com/mrcgrtz/elements/actions/workflows/test.yml)
[![Build Workflow](https://github.com/mrcgrtz/elements/actions/workflows/build.yml/badge.svg)](https://github.com/mrcgrtz/elements/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/mrcgrtz/elements/badge.svg?branch=main)](https://coveralls.io/github/mrcgrtz/elements?branch=main)
[![MIT license](https://img.shields.io/github/license/mrcgrtz/elements.svg)](https://github.com/mrcgrtz/elements/blob/main/LICENSE.md)

## Usage

Import a single element, or `src/index.ts` to register all of them:

```ts
import './src/logo';
```

```html
<mg-logo style="--logo-color: #bada55"></mg-logo>
```

## Available scripts

### Install and preview elements in Storybook

```bash
npm install && npm start
```

## Run tests

```bash
npm test
```

## Run linters

```bash
npm run-script lint
```

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
