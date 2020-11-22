(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.deleteIf true , can delete', function () {
      var obj1 = { name: 'fei', age: 122 };
      nx.deleteIf(obj1, ['name']);
      expect(obj1.name).toBe(undefined);
    });

    test('nx.deleteIf use callback: can not delte', function () {
      var obj1 = { name: 'fei', age: 122 };
      nx.deleteIf(obj1, ['age'], (key, value, obj) => obj.age < 100);
      expect(obj1.age).toBe(122);
    });

    test('nx.deleteIf use callback: can delte', function () {
      var obj1 = { name: 'fei', age: 122 };
      nx.deleteIf(obj1, ['age'], function (key, value, obj) {
        return obj.age > 100;
      });
      expect(obj1.age).toBe(undefined);
    });

    test('api: return result && the same obj', () => {
      var obj = { row: 1, col: 2, colspan: undefined, rowspan: undefined };
      var res = nx.deleteIf(obj, ['colspan', 'rowspan'], (k, v) => !v);
      expect(res).toBe(obj);
      expect(res).toEqual({ row: 1, col: 2 });
    });
  });
})();
