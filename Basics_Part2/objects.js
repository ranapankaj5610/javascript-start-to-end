// singleton
   // Object.create // we can create object by create method and it will create singleton objects. 

// object literals

const mySym = Symbol("key1") //Symbol datatype declaration

// Create an object
const JsUser = { 
    name: "Pankaj",
    "full name": "Pankaj Rana",
    [mySym]: "mykey1", //This is how we set key value pair for symbol data type.
    age: 24,
    location: "dehradun",
    email: "pankaj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "pankaj@chatgpt.com" //This is how we can update the value of any key of object
// Object.freeze(JsUser). // by this we can freeze the object such that we can not update the object values anymore.
JsUser.email = "pankaj@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ //This is how we can define a function of object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //Here we see the string interpolation
}

console.log(JsUser.greeting()); //Here we see how to call the object function.
console.log(JsUser.greetingTwo());


/************************* Objects Part2 **************************/

// const tinderUser = new Object()
const tinderUser = {} //it will create an empty object

tinderUser.id = "123abc" //we can define key values for object
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { //we can create object inside object.
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pankaj",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //in assign we take a target and source , the first paramter always work like target which combine all the values inside assign(). and return a new object

const obj3 = {...obj1, ...obj2} //by using spread operator we can concate two objects.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //It will return the array of keys of the object
// console.log(Object.values(tinderUser)); //It will return the array of values of object
// console.log(Object.entries(tinderUser)); // It will return the array of key value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //it will return boolean is this property present or not in object.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pankaj"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //object destructuring

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "pankaj",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]