//Operators in JS
let a=12;
let b=5;

//arithmetic operators
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);


//assignment operators
console.log("a+=",a+=5);
console.log("a-=",a-=5);
console.log("a*=",a*=5);
console.log("a/=",a/=5);
console.log("a**=",a**=5);

let c=12;
let d="12";
//comparison operators
console.log("d==c",d==c);   //compare only value
console.log("d!=c",d!=c);
console.log("d===c",d===c);   //compare value as well as type
console.log("d!==c",d!==c);
console.log("a>c",a>c);
console.log("a<c",a<c);
console.log("a>=c",a>=c);
console.log("a<=c",a<=c);

//logical operators
console.log("a==b and a==c",a==b && d==c);  //and operator
console.log("a==b or a==c",a==b || d==c);   //o operator
console.log("!true",!true);   //not operator

//ternary operator
console.log("a>b",a>b?"yes":"no");