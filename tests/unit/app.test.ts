/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {describe, it} from 'node:test'
import assert from 'node:assert'

async function importModule(id: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await import(id)
}

const mod = '../../src/app.js'
process.env.VAL = 'some'
const app = await importModule(mod)

describe('Mock env var', () => {
  it('Should be equal to some', () => {
    const val = app.val
    assert.strictEqual(val, process.env.VAL, 'No good')
  })
})

