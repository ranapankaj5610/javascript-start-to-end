const name = "pankaj"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //Interpolation :- here we can add the value of string dynamically.


const gameName = new String('rana-cricket') // String is a class we can create a object of it.

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);   // length is property of string which give us the lenegth of the string.
console.log(gameName.toUpperCase());  // function to convert the string character to uppercase.
console.log(gameName.charAt(2));  // give us the value at 2nd index.
console.log(gameName.indexOf('t'));  // give the index value of passed argument.
 
const newString = gameName.substring(0, 4)// return substring in which the we have character form start to end-1.
console.log(newString); 

const anotherString = gameName.slice(-8, 4)// in slice we can give the negative index which start the iteration from end.
console.log(anotherString);

const newStringOne = "   pankaj    " 
console.log(newStringOne);
console.log(newStringOne.trim());  //used to remove the spaces from the string.

const url = "https://panakj.com/pankaj%20rana"

console.log(url.replace('%20', '-'))// to replace the character of the string.

console.log(url.includes('sundar'))// give true false if the passed argument is present in the string

console.log(gameName.split('-')); // return an array by the seperation of the given parameter.  o/p :- [ 'rana', 'cricket' ]