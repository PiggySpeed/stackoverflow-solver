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

    // console.log('starting promise');

    asyncOperation(function() {
      // countTo100();
      // rej('noooooo');
      // console.log('hello');
      // res('success2');
    });

    if (true) {
      res('success');
    } else {
      rej('errrorrr!!!');
    }
  });
}

function bear2() {
  const tree = [bear(), bear(), bear()];
  return Promise.all(tree)
    .then(() => { return Promise.resolve({ tree: 'bear' })})
    .catch(err => err);
}

function returnHi(val) {
  console.log(val);
  return 'hi';
}

console.log(bear().tree);

bear2()
  .then(val => console.log(val))
  .catch(err => console.log(err));