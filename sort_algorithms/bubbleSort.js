const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // let temp = arr[i];
        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;

        // ES6
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

const arr = [-6, 20, 8, -2, 4];

console.log(bubbleSort(arr));

// Time Complexity --> O(n^2) --- nested loops
