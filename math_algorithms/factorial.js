const factorial = (num) => {
  try {
    if (num >= 0) {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    };
  } catch (error) {
    console.log(error);
  }
};

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(0));

// Time complexity - O(n)
// Because for a number "n", "n-1" recursions occur
