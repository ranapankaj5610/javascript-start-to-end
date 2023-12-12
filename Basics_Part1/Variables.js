const id= 144553     //we can not modify constatnt once it is defined.
let email = "pankaj@google.com" //let is scope based ...scope basically means --> {}.
var password = "12345"  //var is now not used that much but it is used globally in program.
city = "Jaipur" //we can define a value to a variable in js.
let state; //state value is undefined 

//id=8988; --> we can not modify the const value.

email= "hc@hc.com"
password = "7432786"
city = "Bengaluru"

console.log(id);  //simple way to print in js

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([id,email,password,city,state]);