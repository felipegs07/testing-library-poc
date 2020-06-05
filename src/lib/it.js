const it = (title, callback) => {
  const test = callback();
  if(test.assertion){
    console.log('\x1b[32m%s\x1b[0m', `${title} - SUCCESS`) 
  }
  else{
    console.log('\x1b[31m%s\x1b[0m', 
      `${title} - FAILED | Expected that ${test.assert} ${test.not ? 'should not be' : 'should be'} ${test.expectValue}`
    );
  }
}

export default it;