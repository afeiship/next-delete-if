/*!
 * name: @feizheng/next-delete-if
 * description: Delete from object on if condition.
 * url: https://github.com/afeiship/next-delete-if
 * version: 1.0.0
 * date: 2020-04-01 14:07:40
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var FUNCTION = 'function';

  nx.deleteIf = function(inObject, inArray, inTarget) {
    var target = typeof inTarget === FUNCTION ? inTarget(inObject) : inTarget;
    if (target) {
      for (var index = 0; index < inArray.length; index++) {
        var key = inArray[index];
        delete inObject[key];
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deleteIf;
  }
})();

//# sourceMappingURL=next-delete-if.js.map
