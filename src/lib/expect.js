import testResponse from './testResponse';

const expect = (assert) => {
  return {
    toBe(expectValue){
      return testResponse(assert === expectValue, assert, expectValue);
    },
    notToBe(expectValue){
      return testResponse(assert !== expectValue, assert, expectValue, true);
    },
    toBeOK(){
      return testResponse(assert ? true : false, assert, 'Truthy');
    },
    toNotBeOK(){
      return testResponse(assert ? false : true, assert, 'Truthy', true);
    },
    toBeEqual(expectValue){
      return testResponse(assert == expectValue, assert, expectValue);
    },
    toNotBeEqual(expectValue){
      return testResponse(assert != expectValue, assert, expectValue, true);
    },
    toHaveLength(expectValue){
      return testResponse(assert.length === expectValue, assert.length, expectValue);
    },
    toBeType(expectValue){
      return testResponse(typeof assert === expectValue, typeof assert, expectValue);
    },
    toNotBeType(expectValue){
      return testResponse(typeof assert !== expectValue, typeof assert, expectValue, true);
    },
    toContain(expectValue){
      const lowerAssert = assert.toLowerCase();
      return testResponse(
        lowerAssert.indexOf(expectValue.toLowerCase()) > -1 ? true : false, 
        assert, 
        `contained ${expectValue}`
      );
    },
    toBeEmpty(){
      return testResponse(assert.length === 0, assert.length, 0);
    },
    toMatch(expectValue){
      const regexResult = assert.match(expectValue);
      return testResponse(regexResult ? true : false, assert, `matched with regex ${expectValue}`);
    },
    toHaveProperty(expectValue){
      return testResponse(assert[expectValue] ? true : false, assert, expectValue);
    },
    toBeGreaterThan(expectValue){
      return testResponse(assert > expectValue, assert, `greater than ${expectValue}`);
    },
    toBeLessThan(expectValue){
      return testResponse(assert < expectValue, assert, `less than ${expectValue}`);
    }
  }
}

export default expect;