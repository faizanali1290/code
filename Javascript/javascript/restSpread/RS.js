 function sum(argums1,...more){
let sum=0;
for(let i in more){

sum+=more[i];
}

console.log(argums1  +sum)

};

sum('sum',1,2,3,43,433);



// this is called rest operator
// if we have more arguments can be input with similar data type then we use  rest operator and rest operator before other data type can be put not effect the rest operator
// it can be used in function arguments



// spread operator array can can be converted in spreat as pass in array it only used in calling function



//  function sum(argums1,...more){
let sum=0;
for(let i in more){

sum+=more[i];
}

// console.log(argums1  +sum)

// };
// let a=[1,2,3,43,433]
// sum('f',...a);

// let fruit=['almonds','apple','banan','orange']
// console.log(...fruit)
// console.log([...fruit])
// let newF=...fruit;


// spread operator can also used to concat array



// let arr1=[10,20,30,40]
// let arr2=[50,60,70,80]
// let array3=[...arr1,...arr2]
// console.log(array3)



// // sprad operaor can also used object

// let obj={

// name:'faizan',



// }
// let obj2={
//     age:20
// }


// let object3={...obj,...obj2}
// console.log(object3)




let comon={
    eat:'yes',
    sleep:'yes'
    
    
    }
    
    let human={
    work:'yes'
    
    }
    
    let animal={
        // work:'no'
        weight:'iaoehr'
    }

   human.__proto__=comon
   human.__proto__=animal
   comon.__proto__=animal
//    comon.__proto__=animal
    // console.log(human.weight)
    console.log(comon.weight)

