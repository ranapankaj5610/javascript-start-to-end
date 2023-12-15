const user = {
    username: "pankaj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //this basically refer to current context of the object
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "pankaj"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "pankaj"
//     console.log(this.username);
// }
                // This is how we create a arrow function.
const chai =  () => { 
    let username = "pankaj"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "pankaj"}) //this is how we return an object in arrow function without using return keyword. if it is wrapped inside () braces we dont need return.



console.log(addTwo(3, 4))


