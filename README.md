# next-delete-if
> Delete from object on if condition.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-delete-if
```

## usage
```js
import '@jswork/next-delete-if';

const obj = { name: 'fei', age: 122 };
nx.deleteIf(obj, ['age'], (obj) => obj.age < 100); // delete failed
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-delete-if/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-delete-if
[version-url]: https://npmjs.org/package/@jswork/next-delete-if

[license-image]: https://img.shields.io/npm/l/@jswork/next-delete-if
[license-url]: https://github.com/afeiship/next-delete-if/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-delete-if
[size-url]: https://github.com/afeiship/next-delete-if/blob/master/dist/next-delete-if.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-delete-if
[download-url]: https://www.npmjs.com/package/@jswork/next-delete-if
