//change value of const 

const a=123;
//a+=12;   //throws error as const can't be changed
console.log(a);

const b={
    name: "sweety",
    age:14
}

//b=12;   throws an error as const can't be changed
b['name']="maya";
b['course']="JavaScript";
console.log(b);