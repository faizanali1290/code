/* console.log("please enter you password")
try{ // try is a error handling frist exected try if in try has been error then execte catch
    console.log(a)
}
catch(error){ 
console.log("errro",error)
}
console.log("click the login button")
console.log('your wifi is hack')
console.log('change you password')
// note : the try catch method not working on ascronous script
//if we want to try catch mehtod then we used that method


setTimeout(()=>{
    try{
console.log(a)
    }
    catch(e){
console.log('erro'+e)
    }
},200) */


// coustome error in javascript


try {
    console.log(a)
    if(!a){

        throw new  ReferenceError('enter the correct email adress')
    }
    
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)
}


let a=+prompt('enter a your age')
try{
if(a<18){
throw new RefferenceError1("you can't applied this particular job")
}
}
catch(error){
    console.log(error.name)
    console.log(error.message)

console.log(error.stack)
}
