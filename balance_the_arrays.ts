function balance(arr1: string[], arr2: string[]){
    const getCounts = (array:string[]) => {
         return array.reduce((counts, item): Record<string, number> => {
             counts[item] = (counts[item] || 0) + 1;
             return counts;
         }, {})
     }
 
     const counts1 = Object.values(getCounts(arr1) as number).sort((a, b) => a - b);
     const counts2 = Object.values(getCounts(arr2)as number).sort((a, b) => a - b);
 
     return JSON.stringify(counts1) === JSON.stringify(counts2);
 }
 