var asArray = require('as-array');
var noop = function () {};

module.exports = function (args) {
  args = asArray(args);
  var callback = last(args);
  
  if (typeof callback !== 'function') callback = noop;
  
  return {
    callback: callback,
    at: at(args, callback)
  }
};

function at (arr, callback) {
  return function (idx) {
    var arg = arr[idx];
    
    if (equalsFn(arg, callback)) arg = null;
    
    return arg;
  }
}

function last (arr) {
  return arr[arr.length-1];
}

function equalsFn (fn1, fn2) {
  return (typeof fn1 === 'function' && typeof fn2 === 'function' && fn1.toString() === fn2.toString());
}