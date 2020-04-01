/*!
 * name: @feizheng/next-delete-if
 * description: Delete from object on if condition.
 * url: https://github.com/afeiship/next-delete-if
 * version: 1.0.3
 * date: 2020-04-01 14:26:30
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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

//# sourceMappingURL=next-delete-if.js.map
