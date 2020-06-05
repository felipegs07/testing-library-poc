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
      return testResponse(assert == expectValue, assert, expectValue)
    },
    toNotBeEqual(expectValue){
      return testResponse(assert != expectValue, assert, expectValue, true)
    },
    toHaveLength(expectValue){
      return testResponse(assert.length === expectValue, assert.length, expectValue)
    }
  }
}

export default expect;