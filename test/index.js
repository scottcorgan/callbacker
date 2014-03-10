var callbacker = require('../');
var lab = require('lab');
var describe = lab.experiment;
var it = lab.test;
var expect = lab.expect;

describe('parsing arguments', function () {
  
  it('parses the last element in arguments array as the callback', function (done) {
    function tester () {
      var args = callbacker(arguments);
      expect(args.callback.toString()).to.eql(testCallback.toString());
      args.callback();
    }
    
    function testCallback () {
      done();
    }
    
    tester('arg1', testCallback);
  });
  
  it('parses an empty function if no callback is passed as last argument', function (done) {
    function tester () {
      var args = callbacker(arguments);
      expect(args.callback.toString()).to.eql(function () {}.toString());
      args.callback();
      done();
    }
    
    tester('arg1', 'arg2');
  });
  
  it('gets an argument at index', function (done) {
    function tester () {
      var args = callbacker(arguments);
      
      expect(args.at(0)).to.equal('arg1');
      expect(args.at(1)).to.equal('arg2');
      done();
    }
    
    tester('arg1', 'arg2', function () {});
  });
  
  it('returns null for an argument at index if that argument is the callback', function (done) {
    function tester () {
      var args = callbacker(arguments);
      
      expect(args.at(2)).to.not.equal(function () {}.toString());
      expect(args.at(2)).to.equal(null);
      done();
    }
    
    tester('arg1', 'arg2', function () {});
  });
  
});