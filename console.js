console.info("info")
console.error("error")
console.warn("warn")
console.assert(55>10)
console.assert(55<10)

let obj={nams:"Sweety",age:21,sem:6,branch:"CSE"}
console.table(obj)

console.log("Time for for loop execution")
console.time("forloop")
for(let i=0;i<5;i++){
    console.log(i)
}
console.timeEnd("forloop")