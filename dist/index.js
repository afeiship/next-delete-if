/*!
 * name: @jswork/next-delete-if
 * description: Delete from object on if condition.
 * homepage: https://github.com/afeiship/next-delete-if
 * version: 1.0.0
 * date: 2020-11-22 13:46:10
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.deleteIf = function (inObject, inArray, inCallback) {
    for (var index = 0; index < inArray.length; index++) {
      var key = inArray[index];
      if (typeof inCallback === 'undefined' || inCallback(key, inObject[key], inObject)) {
        delete inObject[key];
      }
    }
    return inObject;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deleteIf;
  }
})();
