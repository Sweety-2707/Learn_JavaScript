class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }

    welcome(){
        return ` Welcome ${this.username}`;
    }
}

const user1 = new user("sweety","123abc");
console.log(user1.welcome());

function User(username,password){
    this.username=username
    this.password=password
}

User.prototype.welcome=function(){
    return ` Welcome ${this.username}`;   
}

const user2 = new User("Sarika","4563");
console.log(user2.welcome());