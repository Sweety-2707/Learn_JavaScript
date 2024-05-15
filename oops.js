const obj = {
    name:"Sweety",
    isLoggedIn:true,
    age:29,
    greetings:function(){
        //console.log(`User name is ${this.name}`);
        return `User name is ${this.name}`;
    }
}

console.log(obj.name);
console.log(obj.greetings());

//constructor function
function User(name,age,isLoggedIn){
    this.name=name
    this.age=age
    this.isLoggedIn=isLoggedIn
    greetings=function(){
        return `User name is ${this.name}`
    }

    //return this
}

const user1 = new User("Sweety",46,true);
const user2 = new User("Shaurya",65,false);

console.log(user1);
console.log(user1.constructor);    // return Constructor Function
console.log(User);
console.log(user1 instanceof Object);
console.log(user1 instanceof User);
console.log(User instanceof Object);