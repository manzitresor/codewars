/*
Write a function capitalizeChar that takes a sentence as an argument.
The function should return a new sentence where for each word, if the length of the word is 6, the last character is capitalized. 
If the length of the word is 5, the first character is capitalized. For all other word lengths, the word is left as is.

examples:
  capitalizeChar("Hello world from the cosmos") // "Hello WorlD From the CosmoS"   capitalizeChar("I love JavaScript programming") // "I Love JavaScript ProgramminG"  
  capitalizeChar("Exploration of the cosmos is fascinating") //"Exploration of the CosmoS is FascinatinG"
*/

function capitalizeChar(words:string): string{
 return words.split(' ').map(word => {
      if(word.length === 6) return word.slice(0,-1) + word.slice(-1).toUpperCase()
     if(word.length === 5) return word.toUpperCase() + word.slice(1)
      return word
    }).join(' ')
}

console.log(capitalizeChar('Hello world from the cosmos'))