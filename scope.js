
//hoisting 

function func1(){
    username="Sweety"
    function func2(){
        age=21
        console.log(`Username is ${username} and age is ${age}`);   //username is global for func2 hence can be access
    }
    // console.log(`Age is ${age}`);   // age is local variable in func2() hence can't access
    func2()
}

func1()