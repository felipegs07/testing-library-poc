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


  it('Should have type string when pass string', () => {
    return expect('test').toBeType('string');
  });
  it('Should have type string when pass string', () => {
    return expect(1).toBeType('string');
  });
  it('Should NOT have type string when pass string', () => {
    return expect(1).toNotBeType('string');
  });
  it('Should NOT have type string when pass string', () => {
    return expect('test').toNotBeType('string');
  });


  it('Should have world in a string Hello World', () => {
    return expect('Hello World').toContain('world');
  });
  it('Should have world in a string Hello World', () => {
    return expect('Hello World').toContain('test');
  });


  it('Should array length of an array with 0 values be empty', () => {
    const arrayTest = [];
    return expect(arrayTest).toBeEmpty();
  });
  it('Should array length of an array with 0 values be empty', () => {
    const arrayTest = [1, 2, 3];
    return expect(arrayTest).toBeEmpty();
  });


  it('Should find and match in the string with regex', () => {
    return expect('For more information, see Chapter 3.4.5.1').toMatch(/(chapter \d+(\.\d)*)/i);
  });
  it('Should find and match in the string with regex', () => {
    return expect('Test').toMatch(/(chapter \d+(\.\d)*)/i);
  });


  it('Should the object have property name', () => {
    const testObj = {
      name: 'name'
    }
    return expect(testObj).toHaveProperty('name');
  });
  it('Should the object have property name', () => {
    const testObj = {
      surname: 'name'
    }
    return expect(testObj).toHaveProperty('name');
  });


  it('Should number 5 to be greater than 3', () => {
    return expect(5).toBeGreaterThan(3);
  });
  it('Should number 5 to be greater than 3', () => {
    return expect(2).toBeGreaterThan(3);
  });
  it('Should number 3 to be less than 5', () => {
    return expect(3).toBeLessThan(5);
  });
  it('Should number  3 to be less than 5', () => {
    return expect(5).toBeLessThan(3);
  });


  it('Should the functionn works well', () => {
    const testFunction = (num1, num2) => {
      return num1 + num2;
    }
    return expect(testFunction).toThrow(2, 4);
  });
  it('Should the functionn works well', () => {
    const testFunctionError = () => {
      throw new Error('teste');
    }
    return expect(testFunctionError).toThrow();
  });


  it('Should the object have some keys', () => {
    const testObj = {
      name: 'test',
      adress: 'test',
      phone: 'test'
    }
    return expect(testObj).toHaveKeys(['name', 'adress', 'phone']);
  });
  it('Should the object have some keys', () => {
    const testObj = {
      name: 'test',
      adress: 'test',
      phone: 'test'
    }
    return expect(testObj).toHaveKeys(['test']);
  });

  it('Should the object NOT have some keys', () => {
    const testObj = {
      name: 'test',
      adress: 'test',
      phone: 'test'
    }
    return expect(testObj).toNotHaveKeys(['test']);
  });
  it('Should the object NOT have some keys', () => {
    const testObj = {
      name: 'test',
      adress: 'test',
      phone: 'test'
    }
    return expect(testObj).toNotHaveKeys(['name']);
  });

  it('Should the object ONLY have some keys', () => {
    const testObj = {
      name: 'test',
      adress: 'test',
      phone: 'test'
    }
    return expect(testObj).toOnlyHaveKeys(['name', 'adress', 'phone']);
  });
  it('Should the object ONLY have some keys', () => {
    const testObj = {
      name: 'test',
      adress: 'test',
      phone: 'test'
    }
    return expect(testObj).toOnlyHaveKeys(['test']);
  });
});