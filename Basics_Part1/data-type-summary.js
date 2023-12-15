//  Primitive --> call by value of datatypes

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 //This is also came under number.

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //Here we can see the use of symbol as we pass the same value to symbol but has retured the different symbol valuse.

// const bigNumber = 3456543576654356754n --> BigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}



console.log(typeof anotherId); //---->symbol


//Link for the refernce of the type of datatypes:-  https://262.ecma-international.org/5.1/#sec-11.4.3


//******************************************* */
//Primitive datatypes are stored in the stack memory.
  // if we write:- let a=4;
                   // let b=a;
                    // so here here we are giving the copy of a to b...means if we change something in b it is not changed in a


//Non primitive data types are stored in heap memory.
    //let obj1={
    //     let a=4;
    // }
     
    //let obj2=obj1
    // if we do obj2.a=5. ----> so here the value of the obj1.a also get changed because here we are passing the refernce of obj1 to obj2 both objects are referencing the same location.
     


