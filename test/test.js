var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-delete-if');

describe('next/deleteIf', function () {


  it('nx.deleteIf true , can delete', function () {
    var obj1 = { name: 'fei',age:122 };

     nx.deleteIf( obj1, ['name'], true );

    assert.equal(obj1.name, undefined);
  });

  it('nx.deleteIf false, not delte', function () {
    var obj1 = { name: 'fei', age:122 };

    nx.deleteIf( obj1, ['name'], false );
    assert.equal(obj1.name, 'fei');
  });


  it('nx.deleteIf use callback: can not delte', function () {
    var obj1 = { name: 'fei',age:122 };

    nx.deleteIf( obj1, ['age'], function(obj){
      return obj.age<100;
    } );

    assert.equal(obj1.age, 122);
  });

  it('nx.deleteIf use callback: can delte', function () {
    var obj1 = { name: 'fei',age:122 };

    nx.deleteIf( obj1, ['age'], function(obj){
      return obj.age>100;
    } );

    assert.equal(obj1.age, undefined);
  });

});
