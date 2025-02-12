/*

Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

*/


function sortme(names:string[]) :string[]{
  return names.sort((a,b)=> {
    if(a.toLowerCase() < b.toLowerCase()){
      return -1
    } else {
      return 1
    }
  }); 
}

console.log(sortme(["Hello","there","I'm","fine"]))
