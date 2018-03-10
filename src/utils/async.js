




function returnPromise(x) {
  return new Promise(function(res, rej) {
    setTimeout(function() {
      const OPERATION_SUCCESSFUL = true;

      if (OPERATION_SUCCESSFUL) {
        // if async operation was successful
        res("Operation successful: ", x);
      } else {
        // if async operation was not successful
        rej('Error: async operation not successful');
      }
    }, 2000);
    console.log('hello owrldlddd');
  
  })
}

async function bear() {
  // console.log('tree1');
  // console.log(typeof (await returnPromise('hallo')));
  const x = await returnPromise('hallo');
  // console.log('it is ', typeof x);
  return false;
}

bear()
  .then(val => console.log(val))
  .catch(err => console.log(err));
