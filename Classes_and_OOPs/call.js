function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //use of call fucntion is basically to hold the values we have set in the SetUsername function after the execution of the fucntion becuse the values also get deleted after the fucntion will be removed from the call stack.
    SetUsername.call(this, username) //if we wont paas the this here then the this used in SetUsername will not pick the username we are passing from createUser fucntion.   
    this.email = email
    this.password = password
}

const user = new createUser("rana", "rana@fb.com", "123")
console.log(user);