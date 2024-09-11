// const powerOfTwo = (num) => {
//   if (num < 1) {
//     return false;
//   }
//   while (num > 1) {
//     if (num % 2 !== 0) {
//       return false;
//     }
//     num = num / 2;
//   }
//   return true;
// };

// console.log(powerOfTwo(1));
// console.log(powerOfTwo(64));


// Time complexity -- Big-O --> O(log(n));

// WITH BITWISE --------------------------------------------------------

const powerOfTwoBitWise = (num) =>{
    if(num < 1){
        return false;
    };

    return (num & (num-1)) === 0;
}

// console.log(powerOfTwo(1));
console.log(powerOfTwoBitWise(64));


// Time complexity -- Big-O --> O(1);  CONSTANT


