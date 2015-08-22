var assert = require('assert');
var YANG = require('./index');

var simple = YANG.generate();
assert(simple.length, 'failed to generate');
assert(typeof simple === 'string', 'not typeof string');

var withThe = YANG.generate({the: true});
assert.equal(withThe.split(' ')[0], 'the', 'failed to add "the"');

var camelize = YANG.generate({camelize: true});
var words = camelize.split(' ');
words.forEach(function(word, idx) {
  var chr = word.charAt(0);
  assert(/[A-Z]|[\u0080-\u024F]/.test(chr) && chr === chr.toUpperCase(), 'not camelized');
});

var seperatorFalse = YANG.generate({separator: false});
assert.equal(seperatorFalse.split(' ').length, 1, 'failed to trim spaces between words');

var withSeperator = YANG.generate({separator: '-'});
assert(withSeperator.split('-').length > 1, 'failed to custom separate between words');


console.log(YANG.generate({the: true, camelize: true, separator: '-'}));