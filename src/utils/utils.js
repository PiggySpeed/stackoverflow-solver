




// Sorting
// ------------------------------------------












// Sorting
// ------------------------------------------

/** QuickSort **/
const arr3 = [14, 7, 2, 9, 4, 5, 6, 10, 7, 2, 9, 4, 7, 3, 4, 1, 0, 6, 4, 9, 4, 4, 4, 4, 12];

const quickSort = (arr) => {
  if(arr.length < 2){
    return arr
  }
  else {
    var array = arr.slice();

    var middle = array.splice( 0, 1 );

    var arrLess = array.filter( item => item < middle[0] );
    var arrMore = array.filter( item => item >= middle[0] );

    console.log('middle is ', middle, ' arrLess is ', arrLess, ' arrMore is ', arrMore);
    return Array.prototype.concat( quickSort(arrLess), middle, quickSort(arrMore));
  }
};
//var quickSortResult = quickSort(arr3);
//console.log(quickSortResult);
//console.log("length of quickSort: ", quickSortResult.length, " length of original ", arr3.length);


// Array Manipulation
// ------------------------------------------

/** Flatten The Array **/
const arr1 = [ [ 3, [ 4, 1, 6 ], 4, 2, 10, [ 2, 4 ], [ 6 ], 3 ], 3, [4, 3, 5, 8, 94],8, [], 5 ];
const result = [];

const flatten = (arr) => {
  if(!(arr instanceof Array)){
    result.push(arr)
  }
  else{
    for(var i = 0; i < arr.length ; i++){
      flatten(arr[i]);
    }
  }
};

//flatten(arr1);
//console.log(result);


/** Find the Max Number in Array **/
const arr2 = [14, 7, 2, 9, 5, 6, 10];

const max = (arr) => {
  if(arr.length === 2){
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }
  else {
    console.log(arr);
    var maxNum = max(arr.slice(1));
    return arr[0] > maxNum ? arr[0] : maxNum;
  }
};

//console.log('max is ', max(arr2));


// Mathematical Concepts
// ------------------------------------------

// Euclid's Algorithm - find the greatest common divisor of two numbers