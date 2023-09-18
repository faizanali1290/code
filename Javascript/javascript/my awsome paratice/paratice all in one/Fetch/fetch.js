



// let fetch1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
    
    //     // console.log(data)
    //     return data.json()
    
    // }).then((v) => {
        
        //     console.log(v)
// })



(async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()
    
    
})().then((value) => {
    
    // const render = document.getElementById('render')
    console.log(value)
    
    
    
    
})

let z=document.getElementsByTagName('p')[0]
console.log(z)



