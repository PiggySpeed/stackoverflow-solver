// Selection Sort

const selectionSort = arr => {

  for (let n = 0; n < arr.length; n++) {
    // set the first item to smallest
    let smallest = n;

    // then check the rest of the array for even smaller elements
    for (let i = (n + 1); i < arr.length; i++) {
      if (arr[i] < arr[smallest]) {
        smallest = i;
      }
    }

    // then take the smallest element found, and swap its position with the
    // current index n
    let temp = arr[n];
    arr[n] = arr[smallest];
    arr[smallest] = temp;
  }

  return arr;
};

// console.log(selectionSort([5, 3, 7, 10, 3, 8, 66, 4, 4]));


// Insertion Sort
const insertionSort = arr => {

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let pos = i;

    // while the incumbent is greater than the current
    while ((pos > 0) && (arr[pos - 1] > temp)) {
      // shift all of them up one space
      arr[pos] = arr[pos - 1];
      pos--;
    }

    // finally, insert the new value into the empty space
    arr[pos] = temp;
  }

  return arr;
};

console.log(insertionSort([5, 3, 7, 10, 3, 8, 66, 4, 4]));
