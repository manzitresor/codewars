/*
Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]

*/

function groupInTens(...numbers): number[][]{
    const groups: number[][] = [];

    numbers = numbers.sort((a,b) => a - b);
    numbers.forEach( number => {
        const groupIndex = Math.floor(number/10);

        if(!groups[groupIndex]){
            groups[groupIndex] = [];
        }
        groups[groupIndex].push(number)
    })

    return groups;
}