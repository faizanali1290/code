// 01 string




// let a='faizan ali '
// let z= 'g  '
// let n='1'

// console.log(a.length)  is used to find the length of string
// console.log(a.slice(0,6)) is used to get pice of character in string
// console.log(a.substring(0,6)) is simialr to slice
// console.log(a.substr(0,6))
// console.log(a.replace('faizan','hello faizan'))
// console.log(a.replaceAll('faizan ali','hello faizan'))
// console.log(a.concat(' good night'))
// console.log(a.toUpperCase())
// console.log(a.toLocaleLowerCase())
// console.log(z.length)
// let x=z.trim()
// console.log(x.length)
// let padd=n.padEnd(100," _")
// console.log(padd)
// console.log(a.charAt(4))
// let c='1'
// console.log(c.charCodeAt())
// console.log(a.indexOf('f'))
// console.log(a.lastIndexOf('n'))
// console.log(a.search('i'))
// console.log(a.match('faizan'))
// console.log(a.includes('f'))
// console.log(a.endsWith('i'))
// console.log(a.split())
// console.log(a.at(-1))
// console.log(a.codePointAt(7))
// console.log(a.localeCompare('faizan ali'))
// console.log(a.valueOf())
// console.log(a.repeat(1000))















// Array are used to store signle name multiple values there are two syntax
// const array = ['apple', 'banana', 'orange', 'mango', 'pear']
// const array2 = new Array(1, 9, 2, 3, 4, 56, 743, 2)
// const array2 = [1, 9, 2, 3, 4, 56, 743, 2]
// array2.fill(3)

// console.log(array2)
// console.log(array.pop()) //remove last element
// console.log(array.push('moon'))//add last element
// array.unshift('pear2')
// array.shift()//remove frist element
// let sort=(a, b) => {
//     a - b
// }
// console.log(array2.sort(sort()))
// array2.reverse()



// let z=array.slice(0,2,)

// let z=array.concat('faizan')
// array.splice(0,3,'faizan','hussin')
// let z=array.join(' _')
// console.log(z)
// for(let iterate of array){
//     console.log(iterate+1)
// }

// array.forEach((value,index,array)=>{

//     console.log(index,value,array)

// })

// array2.map((value,index,array)=>{
//     console.log(value)
// })

// function hii(a,b){
//     a-b
// }

// array2.sort(hii())
// console.log('after used map',array2)

// let z=array2.find((numb)=>{

//   return  numb>2

// })
// console.log(z)

// let z=array2.findIndex(iterate=>  iterate>=200)
// console.log(z)

// let z=array2.filter((index)=>{

//     return (index>3);


// });
// console.log(z)

// let z=[1,2,['faizan','ali']]
// let c=z.flat()
// console.log(c)



// let z=array2.reduce((a,b)=>{
//     return(a+b)
// })
// console.log(z)

// let f='hello wordl';
// let z=Array.from(f)
// for(let element in z){
//     document.write(`${element,z[element]}<br>`)
// }






















//03 Object

// let obje = {
//     name: 'faizan',
//     age: 18,
//     sum: function () {

//         return this.good = this.name

//     }

// };
// obje.sum1 = function () {
//     return this.age
// }
// obje.profession = 'programing'
// // console.log(Object.entries(obje))
// delete obje.name

// console.log(obje.sum1())

// document.write(`${i}:${obje[i]}<br>`)







// 4 function















// function Studendata(name,Class,age){
//     this.name=name,
//     this.Class=Class,
//     this.age=age


// };
// let z=new Studendata('faizan',12,18)
// console.log(z)

// "use strict"
/* let youtuber1={
    name:'faizan',
    content:'progrming',
    feature(star){


        document.write(`my name is ${this.name} and my content is ${this.content} plase give me star ${star}`)


    }
}
 */
// youtuber1.feature(5)


// the call method is used to link  the  method for another object 

// let youtuber2={
// name:'baboo',
// content:'general knowledge',
// }
// youtuber1.feature.call(youtuber2,[5])//the frist parameter is object which can be used and scond is the method parameter
// youtuber1.feature.call(youtuber2,5)//the frist parameter is object which can be used and scond is the method parameter




//here we start bind method 
//the bind is similar to call method but the difference is that the arragumet can pass in arrray

// let bind1={

//     fruit:'apple',
//     color:'red',
//     properties:function(yes){
//         document.write(`<br>my name is ${this.fruit} and my color is ${this.color} do you want to like me ${yes}`)
//     }
// };

// bind1.properties('yes')

// let bind2={

//     fruit:'pear',
//     color:'yellow'

// };
// let z=bind1.properties.bind(bind2,['yes'])
// z()







//apply method

//  let productinfo1={

// name:'laptop',
// waranty:'2 years',
// feature:function(agree){

//     document.write(`<br>my product name is ${this.name} and the waranty is ${this.waranty } do you want to agree ${agree}`)




// }


//  }
// productinfo1.feature('yes')

// let productinfo2={

//     name:'iphone',
//     waranty:'5 years',

// }

// let x=productinfo1.feature.apply(productinfo2,['no'])









// iterable object are generalization of array

/* let fruit=['apple','pear','alomons','mango']
let iterate=fruit[Symbol.iterator]()

iterate.next()
let intialization=iterate.next()

while(!intialization.done)
{
    console.log(intialization.value)
    intialization=iterate.next()

} */






// map and set


// the map method is similar to object but the differnce between is that in map we can set any data type but in object we can set string data type 




// let hii=new Map()
// hii.set("name",'faizan')
// hii.set('age',20)
// hii.set('profession','programing')

// hii.forEach((c,f)=>{
// // console.log(f,c)
// })
// // console.log(Object.keys(hii)[0])
// console.log(hii.get('name'))
// console.log(hii.has('name'))
// console.log(hii.size)
// console.log(hii.values())
// console.log(hii.delete('profession'))
// console.log(hii)
// hii.clear()
// console.log(hii)




// set method is similar to array but the differnce is that the repeat text or code can't be used again




// let array=new Set
// array.add('apple')
// array.add('pear')
// array.add('banana')
// array.add('mango')

// array.forEach((a)=>{
// console.log(a)
// })





// array destructring

// assigment of array values in varaible


// let a=[1,2,3,4,45]

// let [c,d,e,f]=a

// console.log(c)

// Object destructring

// let stud= {
//     name:'faizan',
//     2:20,
//     profession:'programing'

// }


// console.log(typeof stud[2])




















// time



// console.log(time)

// let time=new Date(2030,4,22)
// let for1 = new Date('january 4,2022')
// let for2 = new Date('2003-12-23 :1:44:2:900')
// console.log(time.getDate())
// console.log(time.getDay())
// console.log(time.getFullYear())
// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getMilliseconds())

// time.setDate(30)
// console.log(time.getDate())
// console.log(for2)
// let x=document.getElementById('t')
// setInterval(()=>{
// x.innerHTML=new Date()

// })





// rest operator


// rest('faizan', 1, 2, 3333, 44)


// spread operator


/* let array=[1,2,3,4]
let array23=[5,6,7] */

// let [...s]=array+array23
// console.log(s)

/* 
let z=[...array,...array23]
console.log(z)

let obje={
    name:'faozan'
}
let obj2={

    age:'12'
}

let x={...obje,...obj2}
console.log(x) */




// function Cont(name,age){


//    this.name=name
//     this.age=age
// };
// let student1=new Cont('faizan',16)
// let student2=new Cont('ali',3)
// console.log(student1)
// console.log(student2)

// console.log('hello world gilgit')


















// getter and setter



/* 
let obj={
frist_name:'faizan',
last_name:'ali',

 fullname(){

  console.log(  this.frist_name,this.last_name)


// }

// }
// obj.fullname.frist_name='karaim'
// obj.fullname.last_name='karaim'
// console.log(obj)
//  */






// let getset={
// name:'faizan',
// lastname:'ali',

// get fullname(){//get method is used when we want to make method inside object outside the object it can be access and the values can't be change  it can only be access

//     console.log(this.name,this.lastname)
// },
// set newNmae(value){ //the set method is used to the change of values of get method

//     [this.name,this.lastname]=value.split(" ")


// }

// }
// getset.fullname
// getset.newNmae='apple pineapple'
// getset.fullname










// // ___proto___ type


// let comon={
//     eat:'yes',
//     sleep:'yes'


//     }

//     let human={
//     work:'yes'

//     }

//     let animal={
//         // work:'no'
//         weight:'iaoehr'
//     }

//    human.__proto__=comon
//    human.__proto__=animal
//    comon.__proto__=animal
// //    comon.__proto__=animal
//     // console.log(human.weight)
//     console.log(comon.weight)












// Object.prototype.keys={
//     name:'faizan'
// }



// let obj={}
// console.log(obj)
//     // try and catch





// setTimeout(()=>{

//     try {
// let a=1;


// if(a<3){

//     throw  new ReferenceError('result not found')
// }
// console.log(a)





//         // console.log(a)
//     } catch (e) {
//         // console.log('errror found')
//         console.log(e.message)
//     }

// },100)


// let stud = {

//     fristName: 'faizan',
//     lastName: 'ali',
//     profession:'web programing',
//     feature: function (x) {
//         console.log(this.fristName + this.lastName,x)
//     }



// }
// stud.feature()

// let stud1={
// fristName:'Hussain',
// lastName:'ali',
// profession:'AI'

// }

// stud.feature.call(stud1,'gilgit')

// stud.feature.apply(stud1,['gilgit'])

// let borrow=stud.feature.bind(stud1)
// borrow()


// stud1.feature()



// here we discuss __proto type prototype




// let car={

//     product:'laptop',
//     model:'2001',
// feature:function(){
// console.log(this.product,this.model)

// }
// }
// let bicycle={

//     product:'honda',
//     model:'2022',
//     bicy:car.feature
//if we use this method to acccess the other object method it slow the program wen we write object name automatically show bicy() object method but we used prototype it can be show when we used

// }

// car.feature()
// bicycle.bicy()
// console.warn(car)

// Object.prototype.faizan='faizan is here'
// Object.prototype.faizan1=function(){


//     alert('faizan is here')
// }
// String.prototype.faizanS3='good morning'

// let x='faizan'
// let c=x.faizanS3
// console.log(c)

// // String.prototype.includes='byyy'

// let p='x'

// console.log(p.includes('x'))

// did i make method which show every object  string array yes it is possible


// parymoid of dom



/* setTimeout(() => {

    alert('on second')
    setTimeout(() => {
        alert('2 seond')


        setTimeout(() => {
            alert('three second')
        }, 100)

    }, 1000)



}, 1000)


 */







// function hello() {
//     alert('frist funciton')
//     function a() {
//         alert('seond funciton')


//         function b() {
//             alert('funciton threee')


//             function c(){

//                 alert('funcion four')

//                 function d(){

//                     alert('funcion five')
//                 }
//                 d()
//             }
//             c()
//         }
//         b()
//     }

//     a()
// }
// hello()







// promise



// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {


//         alert('frist fucnion')
//         resolve()
//     }, 1000)
// })
// p.then((x) => {
//     setTimeout(() => {

//         alert('funcion two')
//     }, 100)


// })

// p.then(() => {


//     setTimeout(() => {
//         alert('funtion three')
//     }, 100);
// })
// p.then(() => {


//     setTimeout(() => {
//         alert('funtion four')
//     }, 1000);
// })




// function y(){

//     setTimeout(() => {
//         console.log('start')
//     }, 2000);
// }
// function x(){

//     setTimeout(() => {
//         console.log('end')
//     }, 1000);
// }


// (async()=>{

//      await y()
//     await x()

// })
// ()



// promise chaning













// let pro1 = new Promise((resolve,reject) => {
// //  resolve (fetch('./ff'))
//  return fetch('./ff')

// reject('connect your enter')
// // throw  new TypeError('result not found')

// }).then((r) => {

//   if(r.status==200){

//      return r.text()
//   }
// //   else{

// //             //   throw new ReferenceError("plase connect you enter connection")
// //             // alert('plase conect you enter connection')
// //   }

// },(e)=>{
 
// alert(e)




// }).then((v) => {
//     console.log(v)



// })





// let promise=new Promise ((resolve,rejcet)=>{

//     let z=true
//     if(z==false){

        
// resolve(fetch('https://jsonplaceholder.typicode.com/todos/1'))
// }


// else{
// rejcet('plase enter you internet connection')

// }





// }).then((a)=>{


//    return a.json()
// },(e)=>{
//     console.log('plase connect your internet connection')
//     console.log(e)


// }).then((v)=>{

//     console.log(v)
// })





// (async()=>{

//  const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')

//  return response.json()
 




// })().then((v)=>{

//     console.log(v)
// })





// generator 




// function* general(){
// yield 'iam frist yield'
// yield 'iam second  yield'
// yield 'iam third yeild'
// yield 'iam fourth yeild'

    
// }

// let z=general()
// let frist1=z.next().value
// let frist2=z.next().value
// let frist3=z.next().value
// let frist4=z.next().value
// alert(JSON.stringify(frist1))
// alert(JSON.stringify(frist2))

// alert('faizan is here')
// alert(JSON.stringify(frist4))




















// dom      stand for document object model that is used to change  the content of web page and modify the html element in javascript javascript can treat the dom as object




let p=document.getElementsByClassName('p')[0].tex

















