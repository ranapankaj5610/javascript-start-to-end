class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ //Here we are extending the User class.
    constructor(username, email, password){
        super(username) //used to call the constructor of the parent class.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe() //child object can access the function of the parent class as it is inheritated from the parent class.
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User); //A child object is the instance of the parent class.
