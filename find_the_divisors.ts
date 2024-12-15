/*

Create a function named divisors/Divisors that takes an 
integer n > 1 and returns an array with all of the integer's 
divisors(except for 1 and the number itself), from smallest
to largest. If the number is prime return the string '(integer)
is prime'.

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"

*/

function divisor(integer: number): number[] | string{
    const result: number[] = [];
    for(let i = 2 ; i < integer ; i++) {
        if(integer%i === 0){
            result.push(i)
        }
    }
return result.length > 0 ? result : `${integer} is prime`
}