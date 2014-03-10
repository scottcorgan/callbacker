# callbacker

Last argument in a function is always the callback function.

## Install

```
npm install callbacker --save
```

## Usage

```js
var callbacker = require('callbacker');

function doSomething () {
  var args = callbacker(arguments);
  var arg1 = args.at(0);
  
  args.callback();
}

doSomething('arg1', function () {
  // Called back
});
```

## Methods

### at(index)

Returns the argument at that index. Returns `null` if argument is the callback. Use `args.callback` to access the callback.

### callback()

Returns the last item in the arguments array if it is a function. Assumes the "node-style" callback-as-last-argument structure.

## Run Tests

```
npm install
npm test
```