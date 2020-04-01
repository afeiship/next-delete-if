const nx = require('@feizheng/next-js-core2');
require('../src/next-delete-if');

describe('api.basic test', () => {
  test('nx.deleteIf true , can delete', function () {
    var obj1 = { name: 'fei', age: 122 };

    nx.deleteIf(obj1, ['name'], true);

    expect(obj1.name).toBe(undefined);
  });

  test('nx.deleteIf false, not delte', function () {
    var obj1 = { name: 'fei', age: 122 };

    nx.deleteIf(obj1, ['name'], false);
    expect(obj1.name).toBe('fei');
  });

  test('nx.deleteIf use callback: can not delte', function () {
    var obj1 = { name: 'fei', age: 122 };
    nx.deleteIf(obj1, ['age'], (obj) => obj.age < 100);
    expect(obj1.age).toBe(122);
  });

  test('nx.deleteIf use callback: can delte', function () {
    var obj1 = { name: 'fei', age: 122 };

    nx.deleteIf(obj1, ['age'], function (obj) {
      return obj.age > 100;
    });

    expect(obj1.age).toBe(undefined);
  });
});
