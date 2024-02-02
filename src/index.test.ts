import test from 'node:test'
import { strict as assert } from 'node:assert'
import { generate } from './index.js'

test('should generate a stupid name without options', () => {
  const result = generate()
  assert.ok(result)
  assert.strictEqual(typeof result, 'string')
})

test('should generate a stupid name with "the" option', () => {
  const result = generate({ the: true })
  assert.ok(result)
  assert.strictEqual(typeof result, 'string')
  assert.strictEqual(result.startsWith('the '), true)
})

test('should titleize the stupid name with "titleize" option', () => {
  const result = generate({ titleize: true })
  assert.ok(result)
  assert.strictEqual(typeof result, 'string')
  assert.strictEqual(result[0].toUpperCase(), result[0])
})

test('should use a custom separator if provided', () => {
  const result = generate({ separator: '-' })
  assert.ok(result)
  assert.strictEqual(typeof result, 'string')
  assert.strictEqual(result.includes('-'), true)
})
