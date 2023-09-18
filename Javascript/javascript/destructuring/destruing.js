//this is called array destructring


// let fruits = ['apple', 'mango', 'banana', 'pear', 'orange']

// let fruit1=fruit[0]  //this is called array destructring it has two method one is this and the other is below
// let fruit2=fruit[1] 
// let fruit3=fruit[2] 
// let fruit4=fruit[3] 


// let [fruit1, fruit2, fruit3] = fruits

// console.log(fruit1, fruit2, fruit3)
// console.log(fruit)
// console.log('hello')



//this is called object destructring


// let obj = {
//     name: 'faizan',
//     profession: 'programing',
//     Class: '12th'


// };

// let { name, profession, Class} = obj;


// let name=obj.name;
// let profession=obj.profession;
// let Class=obj.Class;

// console.log(name,profession,Class)




// nested destruring

                                                        //here check it
// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
//   // destructuring assignment split in multiple lines for clarity

// // destructuring assignment split in multiple lines for clarity
// let {size:{
//     width,
//     height,

// },
// items:[item1,item2]

// }=options
// console.log(width)




// we pass object to function

// let objs={
//     name:'faizan',
//     Class:'intermediate',
//     profession:'webdevelopment'

// }
// function objectpasee(a,b,c,fession){

//     // console.log(name,Class,profession)
//     console.log(a)
// }
// objectpasee(objs)

 

// here will strart rest and spread operator
function sum(...a){
let z=0;
  for(let i of a){
z+=i
    }
    console.log(z)

}
sum(1,2,3,435,6,535,4,43434,43,43,34,43,34,34,43)