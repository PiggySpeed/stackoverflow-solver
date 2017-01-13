//'use strict';
// this
// ------------------------------------------

var x = {
  tree: 3,
  bear: 56,
  pig: 12,
  cat: 67,
  seal: 23123
};

//const m = Object.keys(x);
//for(var i of m){
//  console.log(i)
//}

//function *gen(arr){
//  var count = 0;
//  var keys = Object.keys(arr);
//  while(true){
//    console.log(keys[count % keys.length]);
//    count++;
//    yield;
//  }
//}
//const iter = gen(x);
//iter.next();
//iter.next();
//iter.next();
//iter.next();
//iter.next();
//iter.next();
//iter.next();

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

//var tree = 'tree';
//tree[2] = 't';
//console.log(tree);