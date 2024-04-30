// sum(2,3)   // it will show error as sum is not declared before

//creating function
//hoisting
let sum=(a,b)=>{
    console.log("Sum of "+a+" and "+b+" is:")
    return a+b
}

let ans=sum(2,3)   //function call return value assigned to ans
console.log(ans)

//creating function
function hello(){
    console.log("Hello Everyone")
}
//function call
hello();

//rest operator ...nums (for infinite number of arguments)
function calculateSum(...nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum
}

console.log(calculateSum(2,3,4,5))

// passing object as an argument
function objFunc(anyObj){
    console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`)
}


const myObj={
    username:"Sweety",
    age:21
}
 objFunc(myObj)

// passing array as argument
 function arrayFunc(myArray){
    console.log(myArray[1]);
 }

 arrayFunc([2,5,6])
