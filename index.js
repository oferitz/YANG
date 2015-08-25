var adjectives = require('./dictionary/adjectives');
var animals = require('./dictionary/animals');
var professions = require('./dictionary/professions');

function getRandom(limit) {
  return Math.floor(Math.random() * limit)
}

module.exports.generate = function generate(opts) {
  var _opts = opts || {};
  var stupidname = '';

  if(typeof _opts.the !== 'undefined' &&  _opts.the === true) {
    stupidname += 'the ';
  }

  var allWords = animals.concat(professions);
  stupidname += (adjectives[getRandom(adjectives.length)] + ' ' + allWords[getRandom(allWords.length)]).toLowerCase();

  if(typeof _opts.titleize !== 'undefined' && _opts.titleize === true) {
    stupidname = stupidname.replace(/(?:^|\s|-)\S/g, function(c) {
      return c.toUpperCase();
    });
  }

  if(typeof _opts.separator !== 'undefined') {
    if(_opts.separator === false) {
      // trim spaces
      stupidname = stupidname.split(' ').join('');
    }
    else {
      stupidname = stupidname.split(' ').join(_opts.separator);
    }

  }

  return stupidname;

};