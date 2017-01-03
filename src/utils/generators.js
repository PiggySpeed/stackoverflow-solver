var x = 0;

function *bear(m) {
  var t = m * (yield 'hellooo');
  //return t;
}

function boy() {
  x++
}

var it = bear(2);
var res1 = it.next();
console.log(res1.value);
var res = it.next(2);
console.log(res);