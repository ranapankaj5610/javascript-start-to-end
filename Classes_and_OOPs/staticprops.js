class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

 //The static keyword defines static methods for classes.
//Static methods are called directly on the class (User from the example above) - without creating an instance/object (user) of the class.


    static createId(){ 
        return `123`
    }
}

const user = new User("panakj")
// console.log(user.createId()) //--> we cant access the static varibale of the class from outside.

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const khansir = new Teacher("khansir", "khansir@.com")
console.log(khansir.createId());
