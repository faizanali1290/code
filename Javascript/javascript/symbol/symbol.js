// let a=Symbol('hello')
// console.log(a)
// console.log(a.description)


// usiing inside object symbol data type
let age=Symbol();

let obj={
    name:'faizan',
    [age]:20//symbol data type can be used in object method
}
console.log(obj)