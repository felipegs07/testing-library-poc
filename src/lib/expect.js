import testResponse from './testResponse';

const expect = (assert) => {
  return {
    toBe(expectValue){
      return testResponse(assert === expectValue, assert, expectValue);
    }
  }
}

export default expect;