const { describe, it, expect } = require('../development/fest');

function sum(value1, value2){
  return value1 + value2;
}


describe('Test of simple assertions', () => {
  it('Should be true when we pass true', () => {
    return expect(true).toBe(true);
  });
  it('Should be true when we pass true', () => {
    return expect(true).toBe(false);
  });
  it('Should not be true when we pass false', () => {
    return expect(false).notToBe(true);
  });
  it('Should not be true when we pass false', () => {
    return expect(false).notToBe(false);
  });


  it('Should be truphy', () => {
    return expect(true).toBeOK();
  });
  it('Should be truphy', () => {
    return expect(false).toBeOK();
  });
  it('Should be falsy', () => {
    return expect(false).toNotBeOK();
  });
  it('Should be falsy', () => {
    return expect(true).toNotBeOK();
  });


  it('Should be true when we pass truthy value', () => {
    return expect(1).toBeEqual(true);
  });
  it('Should NOT be equal when pass a true value', () => {
    return expect('true').toBeEqual(true);
  });
  it('Should not be equal false when pass a truphy value', () => {
    return expect(1).toNotBeEqual(false);
  });
  it('Should not be equal false when pass a falsy value', () => {
    return expect(0).toNotBeEqual(false);
  });


  it('Should a array with 3 values have the length 3', () => {
    const testArray = [1, 2, 3];
    return expect(testArray).toHaveLength(3);
  });
  it('Should a array with 3 values have the length 3', () => {
    const testArray = [1, 2, 3];
    return expect(testArray).toHaveLength(2);
  });
});