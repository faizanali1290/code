// array destructring
/* 
let number=[1,2,3,4,5,5];
let [numb1,numb2,numb3,...numb4]=number
console.log(numb1)
console.log(numb2)
console.log(numb4)

console.log('sub array destructrung')

let fruitlist=['apple','banana',['faizan'],2]

let [name,name2,[number1,],number2]=fruitlist;
console.log(name)
console.log(name2)
console.log(number1)
console.log(number2)


let as=fruitlist[2][0]
console.log(as)
 */


    // object destructring


    /*let obj={

        name:'faizan',
        age:20,
        profession:'coding',
        qulafiaction:'intermediate'

    };

    let {name:n,a,p,q}=obj
  console.log(n) */


//   rest operator 


// the rest operator are used in function parameter and 


// function rest(name,...number){
//     let sum=0;
//     console.log(name)

//     for(let i in number){
//         sum+=number[i]
// }
// console.log(sum)
// }
// let x=[1,2,3]

// rest('faizan',...x)


// let number1=[1,2,3,4,5]
// let number=[6,7,8,9,10]
// let conact=[...number,...number1]
// console.log(...conact)


// // using spread operator used to concat object


// let obj1={
//     name:'faizan',
//     screen:'60hz'
// }


// let obj2={
//   laptop:'hp',
//   mobile:'infinx'
// }

// let obj3={...obj1,...obj2}
// for(let x in obj3){
//   console.log(`${x}:${obj3[x]}`)
// }


// Symbol data type


// let x=Symbol('hi')

// console.log(x.description)