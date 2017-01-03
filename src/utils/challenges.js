
// Is String a Palindrome
// ------------------------------------------
const strTest1 = 'racecar';
const strTest2 = 'moom';
const strTest3 = 'flubber';
const strTest4 = 'arewenotdrawnonwardtonewera';

const isPalindrome = (str) => {
  let res = true;
  let last = str.length - 1;

  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[last-i]){
      res = false;
      break
    }
  }

  console.log(`Is \"${str}\" a palindrome?: ${res}`);
};
// best case: O(1), worst case: O(n)
//isPalindrome(strTest4);


// Get Largest Value in Array
// ------------------------------------------

const test1 = [3, 6, 8, 3, 1, 6, 3, 0, 10, 12, 25, 3, 5, 11, 2];

const findMax = (arr) => {
  let largest = arr[1];

  arr.forEach( item => {
    largest = item > largest ? item : largest;
  });
  console.log(largest);
};

//findMax(test1);


// Get nth Fibonacci number
// ------------------------------------------

// Prime: 1, 1, 2, 3, 5, 8, 13

const findFibonacci = (index) => {
  let arr = [];
  let p2 = 0;
  let p1 = 0;
  let p0 = 1;
  let n = 0;

  while (arr.length < index) {
    arr[n] = p0;
    p2 = p1;
    p1 = p0;
    p0 = p2 + p1;

    n++
  }

  console.log('array is ', arr[arr.length - 1]);
};
//findFibonacci(20);

const findFibonacciR = (index) => {
  if(index <= 1){
    return index;
  }
  else {
    let prev1 = index - 1;
    let prev2 = index - 2;
    return findFibonacciR(prev1) + findFibonacciR(prev2);
  }
};
//console.log('result is ', findFibonacciR(20));


