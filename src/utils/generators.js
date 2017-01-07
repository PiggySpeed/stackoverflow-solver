
function *bear(m) {
  var x = 0;
  while(true){
    yield m[x];
    x = (x + 1) % m.length;
  }
}

const arr = ['awfe', 'tree', 'bear', 'pigg', 'flag', 'dog', 'cat'];

var it = bear(arr);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//for(var x of arr){
//  console.log(x);
//}