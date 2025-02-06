/*
Reverse all elements in an array that occur an odd number of times.

['a', 'a', 'b', 'c', 'c', 'd'] will output:

['a', 'a', 'd', 'c', 'c', 'b']

Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.

*/

function reverseOddCount(array: string[]): string[]{
    const occurency = array.reduce((acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc;
    },{})

    const reversedOdd = array.filter(char => occurency[char] % 2 !== 0).reverse();
    let oddIndex = 0
    
    return array.map(char => occurency[char] % 2 !== 0 ? reversedOdd[ oddIndex ++] : char)
}

reverseOddCount(['a', 'a', 'b', 'c', 'c', 'd'])