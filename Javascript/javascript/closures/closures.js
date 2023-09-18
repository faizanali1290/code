
// closure in action that is inner function can have access to the outer function variables as well as all the global varaibles
// a closure is the combination of a function and the lexical enviroment within which that function was declared


let outerfun= function(a){
    let b=10;
    let innerfun=function ()
    {

console.log(`the sum of two number is ${a+b}`);

    };

    return innerfun



}

let f=outerfun(3)

f()
// console.log(f)
