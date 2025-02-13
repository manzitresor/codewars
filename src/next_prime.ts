/*

You will get a numbern (>= 0) and your task is to find the next prime number.
Make sure to optimize your code: there will numbers tested up to about 10^12.

Examples
5   =>  7
12  =>  13

*/

function checkPrime(num: number): boolean {
    if(num < 2) return false;
    if(num === 2) return true;
   if(num % 2 === 0) return false;
   for(let i=3; i*i <= num; i+= 2) {
     if( num % i ===0) return false
   } 
   return true;
}


function nextPrime(num2: number): number {
    if(num2 < 1) return 2;
    let prime = num2 + 1;
    if(prime % 2 === 0) prime ++
    while(!checkPrime(prime)){
        return prime += 2;
    }
    return prime;
}

console.log((nextPrime(17), 19))
