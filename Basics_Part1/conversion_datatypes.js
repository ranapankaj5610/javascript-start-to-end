let score = "pankaj"

console.log(typeof score); //--> string
console.log(typeof(score));//->string



let valueInNumber = Number(score)
  console.log(typeof valueInNumber); //-->number
  console.log(valueInNumber);//-> NaN

//   convert to Number:- 
//   "33" => 33
//   "33abc" => NaN
//    true => 1; false => 0

let isLoggedIn = "pankaj"

let booleanIsLoggedIn = Boolean(isLoggedIn) //---->true
  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "pankaj" => true

let someNumber = 33

let stringNumber = String(someNumber) 
console.log(stringNumber); //->33
console.log(typeof stringNumber); //-->string

//console.log(Number(undefined)) ---> NaN