const User={
    name:"Sweety",
    age:45
}

const Student={
    degree:"B-tech"
}


const Teacher={
    education:"M-tech",
    __proto__:User    // inheriting User
}

const Mentor={
    isAvailable:true
}

Student.__proto__=User    // inheriting User in Student 

Object.setPrototypeOf(Mentor,User)    // inheriting User in Mentor

console.log(Student.name);
console.log(Teacher.age);
console.log(Mentor.name);

// Inheritance in classes


class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }

    welcomeUser=function(){
        return `Welcome ${this.username}`
    }
}

class teacher extends user{
    constructor(username,password,email){
        super(username,password)
        this.email=email
    }

    sendMe=function(){
        return `Send at ${this.email}`
    }
}

const teacher1 = new teacher("Sweety","123","Sweety@gmail.com");
console.log(teacher1.welcomeUser());
console.log(teacher1.sendMe());
console.log(teacher1 instanceof teacher);
console.log(teacher1 instanceof user);