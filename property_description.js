const pi = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(pi);

// Object.defineProperty(Math,"PI",{
//     writable:true
// })

// const pi1 = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(pi1);


const User={
    name:"Sweety",
    age:34,
    isAvailable:true
}

Object.defineProperty(User,"name",{
    writable:false
})

Object.defineProperties(User,{
    name:{
        value:"Sweety",
        enumerable:false   // accessable but not visible and not iterable
    },
    age:{
        writable:false,
        enumerable:false
    }
})

User.name="Sarika"    // writable is disabled
console.log(User);

for(const key in User){
    console.log(`${key}->${User[key]}`);
}


console.log(Object.getOwnPropertyDescriptor(User,"name"));