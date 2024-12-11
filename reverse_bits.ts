/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/

function reverseBits(num:number): number {
    const reversedBits = num.toString(2).split('').reverse().join('')
    return parseInt(reversedBits,2)
}

console.log(reverseBits(417), 267);
console.log(reverseBits(267), 417); 

console.log(reverseBits(0), 0); 