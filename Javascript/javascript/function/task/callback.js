function random(){
    console.log("hellow world")
}


function sum(num1, num2,callback){
    

    console.log(num1+num2)
    callback()
}
sum(22,44 ,random);
