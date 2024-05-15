// class getter and setter

class User1{
    constructor(username,password){
        this._username=username
        this._password=password
    }

    //getter is called when password is retrieving
    // property name with get or set is used to access property
    get password(){
        return `#abc${this._password}xyz`
    }

    set password(pass){
        this._password=pass
    }
}

const user1 = new User1("Sweety@123","123")
console.log(user1._username);
console.log(user1.password);



// function based getter and setter

function User2(username,password){
    this._username=username
    this._password=password
    
    Object.defineProperty(this,"password",{
        get:function(){
            return `#abc${this._password}xyz`;
        },
        set:function(pass){
            this._password=pass;
        }
    })
}

const user2 = new User2("sarika@123","456")
console.log(user2.password);


const User3={
    _username:"js@code",
    _password:"678",

    get password(){
        return `#abc${this._password}xyz`;
    },
    set password(pass){
        this._password=pass
    }
}

const user3 = Object.create(User3);
console.log(user3.password);