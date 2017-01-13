// Convert to Next Letter in Alphabet
// ------------------------------------------
// - preserve capitalization
// - z => a, Z => A
// 65-90 => A-Z
// 97-122 => a-z
const test1 = 'bear'; // 'cfbs'
const test2 = 'ZeBrA'; // 'AfCsB'

const shiftAlpha = (str) => {
  var result = '';

  for(var i of str){
    var char = i.charCodeAt()+1;
    char = (char === 91) ? 65 : (char === 123) ? 97 : char;
    result += String.fromCharCode(char);
  }
  console.log(result);
};

//shiftAlpha(test2);

// Print Duplicate Characters
// ------------------------------------------
const test3 = 'aria'; // a
const test4 = 'bubbleleee'; // b
const test5 = 'bear'; // none
const test6 = 'moOn'; // none

const printDuplicates = (str) => {
  var arr = str.split('');
  var duplicates = [];

  // removes duplicates to reduce future traversal times
  while(arr.length > 0){
    var char = arr.shift();
    for(var i=0; i<arr.length; i++){
      if((arr[i] === char) && !duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
        arr.splice(i, 1);
        console.log(char);
      }
    }
  }
};

//printDuplicates(test3);

// Check if Anagram
// ------------------------------------------
const test7 = ['mfary', 'armfy'];

const checkAnagram = (str1, str2) => {
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();

  const result = arr1.every(((item, id) => {
    console.log('checking ', item);
    return item === arr2[id];
  }));

  console.log(result);
};
//checkAnagram(test7[0], test7[1]);


// Print the First Non-Repeated Character from String
// ------------------------------------------
const test8 = 'penguin pelt'; // g
const test9 = 'brown bear bow'; // n

const hashFunction = (str) => {
  var obj = {};
};

const checkNoRepeats = (str) => {
  var obj = {};
  var firstNonRepeat = null;

  for(var i=0; i<str.length; i++){
    if(!obj[str[i]]){
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++
    }
  }

  for(var i=0; i<str.length; i++){
    if((obj[str[i]] === 1) && (firstNonRepeat === null)){
      firstNonRepeat = str[i];
    }
  }

  console.log(obj, firstNonRepeat);
};
//checkNoRepeats(test9);


// Recursively Reverse a String
// ------------------------------------------
const test10 = 'bear pig tree'; // 'eert gip raeb'

const reverseRecursive = (str) => {
  if(str.length <= 2){
    return str.length === 2 ? str[1] + str[0] : str;
  } else {
    const middleStr = str.slice(1, str.length-1);
    return str[str.length - 1] + reverseRecursive(middleStr) + str[0];
  }
};

//console.log(reverseRecursive(test10));


// Find all Permutations of a String
// ------------------------------------------
const test11 = 'abcd'; // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

const findPermutationsR = (str) => {
  var result = [];

  (function permute(str, root, arr) {
    if(str.length < 1){
      //console.log(root);
      arr.push(root);
      return str;
    }
    else {
      for(var i=0; i<str.length; i++){
        permute(str.slice(0, i) + str.slice(i+1, str.length), root + str[i], arr);
      }
    }
  })(str, '', result);

  return result;
};
console.log(findPermutationsR(test11));