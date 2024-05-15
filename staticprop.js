class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }

    welcomeUser=function(){
        return `Welcome ${this.username}`
    }

    static setUserId=function(){    // don't allow to acces this function to itself or child class
        return '123';
    }
}

class teacher extends user{
    constructor(username,password,email){
        super(username,password)
        this.email=email
    }

    sendMe=function(){
        return `Send at ${this.email}`
    }
}

const teacher1 = new teacher("Sweety","123","Sweety@gmail.com");
const user1 = new user("Shaurya","234")
// console.log(user1.setUserId());   
console.log(teacher1.welcomeUser());
console.log(teacher1.sendMe());
// console.log(teacher1.setUserId());