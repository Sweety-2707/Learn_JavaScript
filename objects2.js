// const obj=new Object(); //constructor
const obj={}
console.log(obj);

const obj1={
    emp1:{
        name:{
            firstName:"Sweety",
            lastName:"Sharma"
        },
        sal:20000
    }
}

console.log(obj1.emp1.name.firstName);

const obj2={
    email:"sweety@gmail.com",
    isLoggedIn:true
}


//const obj3 ={obj1,obj2}  //create object of object
// const obj3 = Object.assign({},obj1,obj2)   //assign obj1,obj2 to {} object
const obj3 ={...obj1,...obj2}
console.log(obj3);


console.log(Object.keys(obj3.emp1));  //display array of all keys
console.log(Object.values(obj3));   //display array of all values
console.log(Object.entries(obj3));   //display array of all entries i.e array of array of key value pair

console.log(obj3.emp1.hasOwnProperty("sal"));   //checks if key is present or not


const {firstName: name}=obj3.emp1.name  //de-structor
console.log(name);


//JSON
// {
//     "name":"sweety",
//     "age":21
// }