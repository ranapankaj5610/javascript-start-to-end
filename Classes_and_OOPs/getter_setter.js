class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() //Here we can not write this.email beacuse it is already used in constuctor such that both will try to use the this.email so we have to avoid this race.
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}pankaj`
    }

    set password(value){
        this._password = value
    }
}

const pankaj = new User("h@pankaj.ai", "abc")
console.log(pankaj.email);
