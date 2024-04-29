const myObj = {
    name: "Sweety",
    age:21,
    isGraduate:false
}
console.log(myObj.name);   // access element of object

console.log(myObj);
myObj.age=22    //Update value of key age
console.log(myObj);

myObj.lastname="Sharma"    //add new key value
console.log(myObj);

myObj.greetings = function(){
    console.log("Hello Everyone");
}

myObj.greetings()

// Object.freeze(myObj)   // freeze object by which element can't be modified

myObj.greet2=function(){
    console.log(`Hello ${this.name}`);   //backtick in which object element is accessed using ${}
}

myObj.greet2()