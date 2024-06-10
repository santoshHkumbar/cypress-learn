let promise = new Promise((resoive,reject)=>{
    let a=5
    if(a==5){
     resoive('promise is achived')
    }
    else{
        reject('promise is rejected')
    }

})
promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})


// let promise = new Promise((ressolve,reject)=> {
//     let a=5
//     if(a==4){
//         ressolve("Passed")
//     }else{
//         reject("Failed")
//     }
// })
// promise.then((message)=>{
//     console.log(message)
// }).catch((message)=>{
//     console.log(message)
// })