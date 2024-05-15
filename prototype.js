function user(name,age){
    this.name=name
    this.age=age
}

user.prototype.increaseAge=function(){
    this.age++;
}

const user1 =new user("sweety",45)
console.log(user1);
user1.increaseAge();
console.log(user1.age);



let string1= "Sweety Sharma    "

String.prototype.trueLength=function(){
    console.log(`True Length of String ${this} is ${this.trim().length}`);
}

console.log(string1.length);
string1.trueLength();
"gdshdm jsds      ".trueLength();


Object.prototype.demo=function(){
    console.log(`Hello this is Demo Prototype function!`);
}


const arr = [1,2,3]
arr.demo();
string1.demo();
