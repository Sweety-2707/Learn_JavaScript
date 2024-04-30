// //for loop
// for(let i=0;i<10;i++){
//     console.log(i+1);
// }

let obj={
    sweety:76,
    saloni:80,
    sonam:78
}


//map
const map=new Map();
map.set('A','Apple')
map.set('B','Ball')
map.set('C','Car')
map.set('C','Chair')

//array
let arr=["apple","banana","cherry"]

//for loop for object
// console.log("for loop")
// for(let i=0;i<obj.lenght;i++){
//     console.log("Marks of "+i+ " is: "+obj[i])
// }

// for(let i=0;i<arr.length;i++){
//     console.log(`Element at index ${i} is ${arr[i]}`);
// }

// for (let i = 0; i < map.length; i++) {
//     const element = map[i];
// }     //iteration of map not possible as map is not iterable


//for-in loop


// console.log("for-in loop")
// for(let o in obj){
//     console.log("Marks of "+o+ " is: "+obj[o]);
// }

// for (const key in arr) {
//     console.log(`Element at index ${key} is ${arr[key]}`);
// }

// for (const key in map) {
//     console.log(`Value of ${key} is ${map[key]}`);
// }    // iteratation not possible



// //for-of loop

// for(let i of "Object"){
//     console.log(i);
// }

// for(let o of obj){
//     console.log("Marks of "+o+ " is: "+obj[o]);
// }    //iteration of object not possible

for (const i of arr) {
    console.log(`Elements are ${i}`);
}


// for (const [key,val] of map) {
//     console.log(`${key} -> ${val}`);
// }


// foreach

// arr.forEach( (item,key,arr)=>{
//     console.log(item,key,arr);
// })

map.forEach((value,key,map)=>{
    console.log(`${key} => ${value}`,map);
})

// obj.forEach((value,index,obj)=>{
//     console.log(`${index}=>${value}`);
// })   //not applicable