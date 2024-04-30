const myObj={
    username:"Sweety",

    //implicit return in arrow function where this return undefined
    greetings:()=> (`Hello! ${this.username}`),

    //explicit return in arrow function where this return undefined
    //if object variable is modified in function then this return modified value
    welcome:()=>{
        console.log(`Hello! ${this.username}`);
        this.username="Jhanvi"
        return `Hello ${this.username}`
    },

    //normal function where this indicated current context which is object not function
    hello:function(){
        this.username="Shaurya"
        return `Hello! ${this.username}`
    }



}

console.log(myObj.greetings())
console.log(myObj.welcome())
console.log(myObj.hello())
myObj.username="Aman"
console.log(myObj.username)


console.log(this);   //for node environment this is {} which in browser it in Windows Object