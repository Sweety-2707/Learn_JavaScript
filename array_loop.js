let num=[35,45,24,56,234]

//for loop
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//forEach loop
num.forEach(element => {
    console.log(element)
});

//for..of loop
for(let item of num){
    console.log(item)
}

//for..in loop
for(let i in num){
    console.log(num[i])
}

//Array.from
let name="Sweety"
let arr=Array.from(name)
console.log(arr,typeof arr)