let p=new Promise((resolve, reject) => {
 setTimeout(()=>{
    alert('hello iam resolve')
    resolve(true)

// reject(new Error('error in promises'))

 },1000)
})

p.then((resolve)=>{  //here then mean the promise is completed and what do you do
    alert('sucessfully complete')
    console.log("hii faizan",resolve)
})

p.catch((error)=>{
    alert('result not found')
    console.log(error)
})


// here we can catch the error

let p2=new Promise((resolve,reject)=>{
let a='resolve'
    // reject('please connect your interConnection')
    // reject('please connect your interConnection')
    resolve("iam reolve")
});
p2.then((value)=>{//here the value mean the inside reolve we can show value
    console.log('faizan'+value)
},(error)=>{  // error mean inside reject message show 
    console.log('error'+ error)
})



// chaining proeses


let chain=new Promise((resolve,reject)=>{
resolve('iam resolve in frist')
}).then((value)=>{


    console.log(value);

}).then(()=>{
    console.log('done')

    let newPromise=new Promise((reolve,reject)=>{
        reolve('hii')
    })
    return newPromise




}).then((value)=>{
    console.log(value)

})


console.log('here start multiple promise handler')

p=new Promise((resolve, reject) => {
    resolve(console.log('iam ha handler'))
})
p.then(console.log('iam second'))
