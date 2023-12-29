console.log("var const and let");

var a=124;
var a="Sweety";

let b=12;
//let b="Sharma";  error will be occured i.e.no duplicant
const c=123;
//c=23 const can't be changed hence error will be occured

{
    let b=23;  //let has block scope 
    var a="Sharma";  // var has global scope and not used nowadays
    console.log(a,b);
}
console.log(a,b);