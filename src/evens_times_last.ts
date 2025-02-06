/* 
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

function evenLast(numb: number[]):number {
    let sumOfEvens:number = 0;
    const lastIndexNumber = numb[numb.length - 1]

    for(let i=0; i < numb.length; i++){
      if(i%2 === 0){
        sumOfEvens += numb[i]
      }
    }
    
    return numb.length > 0? sumOfEvens * lastIndexNumber : 0;
}