
function sayMyName(){
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ //Here number1 and number2 are called paramaters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //Here 3,5 are called arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pankaj"))
// console.log(loginUserMessage("pankaj"))


function calculateCartPrice(val1, val2, ...num1){ //here three dots ...  are called rest operator which basically take all the values which is passed as an arguments in function.
    return num1  
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) //----> o/p [500,2000] //beacuse the 200 and 400 are get into val1 and val2

const user = {
    username: "pankaj",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) //here we see how can we pass an object as an argument in the fucntion.
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
