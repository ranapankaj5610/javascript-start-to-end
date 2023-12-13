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

/**************************************Array Part 2****************************/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros). //It will take dc_heroes an element and push in array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros). //To concatinate two arrays.
// console.log(allHeros);  

const all_new_heros = [...marvel_heros, ...dc_heros]  //Spread operator take all the values of array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //It will return an array with all the elements inside array with single single. means array inside array now convert to one array only.

console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //return true false is it an array or not.
console.log(Array.from("Hitesh")) //return an array 
console.log(Array.from({name: "hitesh"})) // it will return an empty array because we have to mention that which array we need, array of keys or array of values.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //return an array of all the passing variables.

