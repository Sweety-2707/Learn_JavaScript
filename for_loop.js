//for loop
for(let i=0;i<10;i++){
    console.log(i+1);
}

let obj={
    sweety:76,
    saloni:80,
    sonam:78
}

//for loop for object
console.log("for loop")
for(let i=0;i<Object.keys(obj).length;i++){
    console.log("Marks of "+Object.keys(obj)[i]+ " is: "+obj[Object.keys(obj)[i]])
}
//for-in loop
console.log("for-in loop")
for(let o in obj){
    console.log("Marks of "+o+ " is: "+obj[o]);
}

//for-of loop
for(let i of "Object"){
    console.log(i);
}