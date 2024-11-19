/**
 * Returns the number(count) of vowels in the given string.
 * @param {string} str The string to check.
 * @returns {number} The number of vowels in the string.
 */
function getCount(str:string): number {
    const vowels = 'aeiou';
    let count = 0;
    for(let i=0; i <= str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}