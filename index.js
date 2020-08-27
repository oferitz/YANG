const adjectives = require('./dictionary/adjectives')
const animals = require('./dictionary/animals')
const professions = require('./dictionary/professions')

const getRandom = limit => Math.floor(Math.random() * limit)

module.exports.generate = function generate(opts = {}) {
  let stupidname = ''

  if (typeof opts.the !== 'undefined' && opts.the === true) {
    stupidname += 'the '
  }

  const allWords = animals.concat(professions)
  stupidname += (adjectives[getRandom(adjectives.length)] + ' ' + allWords[getRandom(allWords.length)]).toLowerCase()

  if (typeof opts.titleize !== 'undefined' && opts.titleize === true) {
    stupidname = stupidname.replace(/(?:^|\s|-)\S/g, c => c.toUpperCase())
  }

  if (typeof opts.separator !== 'undefined') {
    if (opts.separator === false) {
      // trim spaces
      stupidname = stupidname.split(' ').join('')
    } else {
      stupidname = stupidname.split(' ').join(opts.separator)
    }
  }

  return stupidname
}
