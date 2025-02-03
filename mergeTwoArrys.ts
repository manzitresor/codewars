/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

*/

function mergeArrays(arr1: string[], arr2: number[]):(string | number)[]{
  const newArr: (string | number)[] = [];
  const maxLength = Math.max(arr1.length,arr2.length)

  for(let i=0; i < maxLength; i++){
    if(i < arr1.length) newArr.push(arr1[i])
    if(i < arr2.length) newArr.push(arr2[i])
  }

  return newArr
}

const arr1 = ["a", "b", "c", "d", "e"]
const arr2 = [1, 2, 3, 4, 5]

mergeArrays(arr1,arr2)