# nuxt-scss-to-js

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Load SCSS Variables into Nuxt instance for use in Templates/Scripts.

[📖 **Release Notes**](./CHANGELOG.md)

## Usage

```scss
//   /assets/scss/variables.scss
$primary: #0000ff;
$secondary: #00ff00;
$warning: #ff0000;
```

```html
<template>
  This themes primary color is {{$scss.primary}}!
  <Component :color="$scss.primary"/>
</template>
```

## Setup

1. Add `nuxt-scss-to-js` dependency to your project

```bash
yarn add nuxt-scss-to-js # or npm install nuxt-scss-to-js
```

2. Add `nuxt-scss-to-js` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-scss-to-js',

    // With options
    ['nuxtScssToJs', { /* module options */ }]
  ]
}
```
## Options

### `namespace`
- Type: `String`
- Default: `scss`

The name under which the scss variables will be accessible inside nuxt.

```js
$scss.primary // '#0000ff'
$scss.secondary // '#00ff00'
$scss.warning // '#ff0000'
```

### `path`
- Type: `String`
- Default: `'~/asstets/scss/variables.scss'`

The path to your scss file with variables.


### `generate`
- Type: `Boolean`
- Default: false

Will generate a `scss.js` file in the same directory as `path`.
This file can be used to explicitly import scss variables. Useful for work with other plugins/modules.
**Name of file depends namespace option**

**Result**
```dir
//path directory

variables.scss
scss.js
```
**Use**
```js
import variables from '~/assets/scss/scss.js'
```



### Possible Options:
```js
//defaults
{
  namespace: 'scss', //default
  path: '~/asstets/scss/variables.scss' //default
  generate: false
}
```

### `inject`
- Type: `Boolean`
- Default: true

By default the vue instance will be injected with the $scss object containing all scss variables.
This can be turned off. Useful in conjuntion with the option `generate`, to only import variables where necessary.



## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) sugoidesune

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-scss-to-js/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-scss-to-js

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-scss-to-js.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-scss-to-js

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/nuxt-scss-to-js.svg
[license-href]: https://npmjs.com/package/nuxt-scss-to-js
