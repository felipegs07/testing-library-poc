const testResponse = (assertion, assert, expectValue, not = false) => {
  return {
    assertion,
    assert,
    expectValue,
    not
  }
}

export default testResponse;