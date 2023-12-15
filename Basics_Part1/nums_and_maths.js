const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);---> length is a property of string which return the length of the string.
console.log(balance.toFixed(1)); //-->100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  ---> it will show the number in indian number system:- 10,00,000 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   --> give the positive value
// console.log(Math.round(4.6));   ---> give 5
// console.log(Math.ceil(4.2));    ---> give 5
// console.log(Math.floor(4.9));  ----> give 4
// console.log(Math.min(4, 3, 6, 8));   ---> give minimum value 3
// console.log(Math.max(4, 3, 6, 8));   ---> give maximum value 8

console.log(Math.random());         //-----> random value between 0 and 1
console.log((Math.random()*10) + 1);  //----> Random value between 1 and 10 but that can be the decimal as well
console.log(Math.floor(Math.random()*10) + 1);  //-----> Random Value between 1 and 10 only integers now as we use the floor


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //----> It will always give the random value between min and max.
