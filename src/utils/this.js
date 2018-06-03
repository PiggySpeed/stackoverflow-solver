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

//var tree = 'tree';
//tree[2] = 't';
//console.log(tree);

var bear = [2, 1];
var tree = 'x';

const one = {};
const two = one;
one["hey"] = "hello";
// one.push("hello");
// console.log(one);
// console.log(two);

// two.push("bear");
two["penguin"] = "pig";
// console.log(one);
// console.log(two);
// console.log(one === two);



// console.log(Object.prototype.toString.call(NaN));


// postfix/prefix
let i = 0;
console.log("value is: ", ++i); // variable incremented before assignment
console.log("value is: ", i);

i = 0;
console.log("value is: ", i++); // variable incremented after assignment
console.log("value is: ", i);




