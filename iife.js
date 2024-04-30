// (Immediate ivoked function expression)
// used to remove global scope variable pollution


//named iife
(function db(){
    console.log(`Database Connected!`);
})();  //; is needed to run more than 1 iife

//named iife with parameter
(function db(name){
    console.log(`Database Connected! ${name}`);
})("Sweety");  //; is needed to run more than 1 iife


// unnamed iife
(()=>{
    console.log(`Database Connected!`);
})();


// unnamed iife with parameter
((name)=>{
    console.log(`Database Connected! ${name}`);
})("Sweety")


// ()() first () for function and second () for its execution