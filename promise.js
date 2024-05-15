// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("PromiseOne executed");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("PromiseOne Resolved")
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Promise Executed");
//     const error = false;
//     if (error) {
//       reject("Error: Something went Wrong..");
//     } else {
//       resolve({ username: "sweety", password: 123 });
//     }
//   }, 1000);
// })
//   .then(function (user) {
//     return user.username;    //return is transfer to next then
//   })
//   .then((username) => {
//     console.log(`Username from Above then is ${username}`);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (error) {
      reject("Error:Something went Wrong...");
    } else {
      resolve({ username: "Sweety", password: "123" });
    }
  }, 1000);
});

async function consumePromiseTwo() {
  try {
    const response = await promiseTwo;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// consumePromiseTwo();

async function getURLData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const obj = await response.json();
    console.log(obj.results[0]);
  } catch (error) {
    console.log("Error: ", error);
  }
}

// getURLData();

fetch("https://randomuser.me/api/")
.then(function (response) {
    return response.json();
})
.then((obj)=>{
    console.log(obj.results[0].id.name);
})
.catch(function(error){
    console.log(error);
})


