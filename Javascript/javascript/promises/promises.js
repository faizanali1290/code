let p1 = new Promise((resolve, reject) => {
    console.log('promise is pending')
    resolve(setTimeout(() => {
        console.log("nice job")
        reject(new Error("iam error")) //there is way to throw errror
    }, 2000))
    reject(console.log('your promise is reject'))


})
p1.catch(() => {
    console.log('error in promise')
})
console.log("last")

p1.then((value) => {
    console.log('congraulation data can be fetch')

}, (error) => {
    console.log('error found ')
})
console.log(p1)




////  promise handler


let p = new Promise((resolve, reject) => {
    setTimeout(() => {


        resolve('value 1')

    }, 2000);
})

p1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('value 2')
        // reject(new Error('error'))

    }, 4000)

})
let newPromise = Promise.all([p, p1])
newPromise.then((a) => {
    console.log(a)

})
newPromise.then((v) => {
    console.log(v.v[0])
})
 )





let p = new Promise((resolve, reject) => {
    setTimeout(() => {


        resolve('value 1')

    }, 2000);
})

p1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        // resolve('value 2')
        reject(new Error('error'))

    }, 4000)

})
let newPromise = Promise.allSettled([p, p1])
newPromise.then((a) => {
    console.log(a)

})
    .then((a) => {
        // console.log(a.status)
    })






let f = [{
    name: 'faizan',
    class: '4'
}, {
    value: '08',
    icon: 9
}]

let z = f[0].name
console.log(z)
for (let x in z) {
    console.log(x, z[x])
}




async function weather() {


    await setTimeout(() => {
        console.log('iam running')
    }, 4000);

    await (console.log('finsihed'))
}
weather()




(async()=>{

    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
   
    return response.json()
    
   
   
   
   
   })().then((v)=>{
   
       console.log(v)
   })