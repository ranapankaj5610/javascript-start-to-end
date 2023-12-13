// array

const myArr = [0, 1, 2, 3, 4, 5] //way to define an array
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //we can cretate an object of array.
// console.log(myArr[1]); 

// Array methods

// myArr.push(6) //add value in end of an array
// myArr.push(7) 
// myArr.pop() //remove value from end of an array

// myArr.unshift(9) //add value in start of an array and shift the others element to right.
// myArr.shift() //remove element from start of the array.

// console.log(myArr.includes(9)); //return true if array include the given element
// console.log(myArr.indexOf(3)); //return index of the passed value

// const newArr = myArr.join() // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string

// console.log(myArr);  
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // return the array from index 1 to 2

console.log(myn1); 
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //return array from index 1 to 3 but the difference is it manipulate the original array.
console.log("C ", myArr);
console.log(myn2);