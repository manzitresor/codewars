/*
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.

*/



function checkOccurence(arr){
    return arr.reduce((acc,letter)=> {
       acc[letter] = (acc[letter] || 0) + 1;
      return acc
    },{})
  }
  
  
  function balance(arr1: string[], arr2: string[]): boolean{
    const arr1Occ: object = checkOccurence(arr1)
    const arr2Occ: object = checkOccurence(arr2)
    
    const sortedCount1 = Object.values(arr1Occ).sort((a,b) => a - b)
    const sortedCount2 = Object.values(arr2Occ).sort((a,b) => a - b)
    
     for (let i = 0; i < sortedCount1.length; i++) {
          if (sortedCount1[i] !== sortedCount2[i]) {
              return false;
          }
      }
    
    return sortedCount1.length == sortedCount2.length
  }