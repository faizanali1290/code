let x=10,y=2;
x<y?console.log("true"):y>x?console.log("y>x"):console.log("x>y")



// nusllish operator



let a,b=null,userNot='user not input'
let input
input=prompt('enter your name')
alert(a??b??input??userNot)
console.log(input)






// function defination

/* function sum(a=4,b=90){
return(a+b)

}
console.log(sum(3))
 */


// function experation

let multiply=function (a,b){
    console.log(a*b)
}
multiply(2,4)
let divide=(x,y)=>{
console.log("the divide of two number",x/y)
}

// divide(4,44)

// callback function

let callback=(a)=>{
a(9,3)
}
callback(divide)


