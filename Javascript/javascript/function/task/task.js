


let add = 0,b;
function sum(start) {
    for (let i = 1; i <= start; i++) {

         b = add += i; 
       

    }

    console.log("the sum of above sum is", b)
}
let number = prompt("Enter a number")
sum(Number(number))

// function all(x){
//     console.log(x)
//   if (x<10){
//     all(x+1)
//   }
// }
// all(3)
// function sum(x=10){
//     console.log(x)
//     if(x==1){
//         return 1
//     };
    
// return x*sum(x-1)
    
   
//     // return 5*loop(5-1)*loop(4-1)*loop(3-1)*loop(2-1)*loop(1-1)
// };
// let number=prompt("enter a number")
// number=Number(number)
// console.log((sum(number)))