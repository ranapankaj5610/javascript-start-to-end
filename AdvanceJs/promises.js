//This is how will we create promise
const promiseOne=new Promise((resolve,reject)=>{
  //Basically used to perform some async task
     //Db calls, cryptography, network 
  setTimeout(()=>{
    console.log('Async task is completed');
    resolve()
  },1000)
})

// Now we are cosuming the created promise
promiseOne.then(()=>{
    console.log("Promise consumed");
})

//Other way to create and consume promise 

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})

const promiseThree=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({username:"Pankaj",email:"pankaj@gmail.com"})
  },1000)
})

promiseThree.then((user)=>{
  console.log(user);
})

const promiseFour=new Promise((resolve,reject)=>{
   setTimeout(()=>{
      let error=true;
      if(!error){
        resolve({username:"Anshul",email:"anshul@gmail.com"})
      }else{
        reject('Error: Something went wrong')
      }
   },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promisFive=new Promise((resolve,reject)=>{
  setTimeout(()=>{
     let error=true
     if(!error){
        resolve({username:"Javascript",password:"123"})
     }else{
        reject('ERROR: Js went wrong')
     }
  },1000)
});

async function consumePromiseFive(){
    try {
        const response=await promisFive
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/ranapankaj5610') 
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data); //This data will print at the top beacuse the response we get from fetch it will go on the top of the call stack as comare to other async methods.
})
.catch((error) => console.log(error))