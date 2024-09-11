const primeNumber = (num)=>{
    if(num < 2){
        return false;
    };
    for(let i = 2; i <= Math.sqrt(num); i++){
     if(num % i === 0){
        return false;
     };      
    };
    return true;
};

console.log(primeNumber(1));
console.log(primeNumber(5));
console.log(primeNumber(40));


// Time complexity - O(Math.sqrt(n));