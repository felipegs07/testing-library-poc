const { describe, it, expect } = require('../development/fest');

function sum(value1, value2){
  return value1 + value2;
}


describe('Test of simple assertions', () => {
  it('Should be true when we pass true', () => {
    return expect(true).toBe(true);
  });

  it('Should be true when we pass true', () => {
    return expect(true).toBe(true);
  });
});