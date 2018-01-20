//'use strict';
// ------------------------------------------

// Basic promise demo
function asyncOperation(fn) {
  setTimeout(fn, 2000);
}

function countTo100() {
  for (let i = 0; i <= 100; i++) {
    console.log('counting ', i);
  }
  return true;
}

function bear() {
  return new Promise(function(res, rej) {

    console.log('starting promise');

    asyncOperation(function() {
      countTo100();
      rej('noooooo');
      console.log('hello');
      // res('success2');
    });

    // if (countTo100()) {
    //   res('success');
    // } else {
    //   rej('errrorrr!!!');
    // }
  });
}

function returnHi(val) {
  console.log(val);
  return 'hi';
}

bear()
  .then(val => returnHi(val))
  .then(val2 => console.log(val2))
  .catch(err => console.log(err));