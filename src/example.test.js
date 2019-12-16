import { expect } from 'chai'
import hello from './example'

describe('src/example.js', () => {
  it('Hello Corteza!', () => {
    expect(hello()).to.eq('Hello Corteza!')
  })
})
