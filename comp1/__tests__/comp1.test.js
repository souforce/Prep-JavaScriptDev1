const nome = require('../comp1');

describe('Testing comp1', ()=>{
  it('Give me full name', () => {
    expect(nome('Fernando', 'Sousa')).toBe('Fernando Sousa')
  })

  it('Give me the Wrong full name', () => {
      expect(nome('Fernando')).not.toBe('Fernando')
  })

  it('Give me the Wrong full name', () => {
        expect(nome('Fernando')).toBe('Fernando undefined')
    })
})