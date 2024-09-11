const recursiveBinarySearch = (
  arr,
  target,
  firstIndex = 0,
  lastIndex = arr.length - 1
) => {
  if (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (arr[middleIndex] < target) {
      firstIndex = middleIndex + 1;
    } 
    else {
      lastIndex = middleIndex - 1;
    }

    return recursiveBinarySearch(arr, target, firstIndex, lastIndex)
  };
  return -1;
};

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));


// Time complexity --> O(log(n))