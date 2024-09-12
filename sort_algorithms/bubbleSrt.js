const bubble = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        swapped = true;
      }
    }
  } while (swapped);

  // return arr;
};

// arr = [1, 2, 3, 4, 5];
arr = [5, 4, 3, 2, 1];

console.log(bubble(arr));
// console.log(bubble([-6, 20, 8, -2, 4]));
// console.log(bubble([-6, 20, 8, -2, 4]));
