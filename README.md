# next-delete-if
> Delete from object on if condition.

## installation
```bash
npm install -S @feizheng/next-delete-if
```

## usage
```js
import '@feizheng/next-delete-if';

const obj = { name: 'fei', age: 122 };
nx.deleteIf(obj, ['age'], (obj) => obj.age < 100); // delete failed
```
