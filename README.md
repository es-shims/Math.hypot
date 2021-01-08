# Math.hypot <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.hypot` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.hypot
```

## Usage/Examples

```js
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(5, 7)); // 8.602325267042627
console.log(Math.hypot(2, 3, 6)); // 7
console.log(Math.hypot(-5)); // 5
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.hypot
[npm-version-svg]: https://versionbadg.es/es-shims/Math.hypot.svg
[deps-svg]: https://david-dm.org/es-shims/Math.hypot.svg
[deps-url]: https://david-dm.org/es-shims/Math.hypot
[dev-deps-svg]: https://david-dm.org/es-shims/Math.hypot/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.hypot#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.hypot.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.hypot.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.hypot.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.hypot
