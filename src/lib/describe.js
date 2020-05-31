const describe = (title, callback) => {
  console.log('\x1b[36m%s\x1b[0m', `Running test suit: ${title}`);
  callback();
}

export default describe;
