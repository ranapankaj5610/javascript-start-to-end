//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

//In javascript {} these braces bascially called scope which we can see in function and loops.

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "pankaj"

    function two(){
        const website = "youtube"
        console.log(username); // Here we can access the username beacuse it is defined inside the parent fucntion.
    }
    // console.log(website);  //Here we can't access the website beacuse it is out of scope for the website variable

     two()

}

// So in above example as we can see that the variable defined in the parent scope can be accessed in child scope this we can say clousers.


// one()

if (true) {
    const username = "pankaj"
    if (username === "pankaj") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //Here we didn't see any error while executing the program beacuse here we are not assiged the fucntion to any variable.

function addone(num){
    return num + 1
}



addTwo(5) //Here we will see the error while executing the program beacuse we have assiged the fucntion to a variable. 
//So basically it is called hoisting in javascript in which the fucntion call is depenedent on how we have declare the fucntion. we can not call the fucntion before its declaration if we assign it to a variable.
const addTwo = function(num){
    return num + 2
}
