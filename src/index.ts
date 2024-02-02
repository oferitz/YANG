import { adjectives, animals, professions } from './dictionary/index.js'

const getRandom = (limit: number) => Math.floor(Math.random() * limit)

export default function generate({ the = false, titleize = false, separator }: {
  the?: boolean,
  titleize?: boolean,
  separator?: string | boolean
} = {}) {
  const prefix = the ? 'the ' : ''

  const allWords = animals.concat(professions)
  let stupidname = `${adjectives[getRandom(adjectives.length)]} ${allWords[getRandom(allWords.length)]}`.toLowerCase()

  if (titleize) {
    stupidname = stupidname.replace(/(?:^|\s|-)\S/g, c => c.toUpperCase())
  }

  if (typeof separator === 'string') {
    stupidname = stupidname.split(' ').join(separator)
  } else if (!separator) {
    stupidname = stupidname.split(' ').join('')
  }

  return prefix + stupidname
}
