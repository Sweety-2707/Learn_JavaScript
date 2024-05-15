function setUserName(username){
    this.username=username
}

function createUser(username,password,email){
    // setUserName(username)    // function is not called explicitly
    setUserName.call(this,username)   // call is used to hold reference of called function
    this.password=password
    this.email=email
}

const user1 = new createUser("Sweety","1234","sweety@gmail.com")
console.log(user1);