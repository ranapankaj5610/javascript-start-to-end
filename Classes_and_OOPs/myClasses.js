// ES6

//Here we can see how we can create the class in js.
// class User {
//     //here we can define the custructor in js
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

//to add method in function we use the prototype becuse function also can behave like object in js.
User.prototype.encryptPassword = function(){ 
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());