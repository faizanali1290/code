let object={

    name:'faizan',
    age:20,
    profession:'programing'
};
console.log(object)
// document.write(object)
let z=JSON.stringify(object)
// document.write(z)
console.log(z,typeof z)
let c=JSON.parse(z)
console.log(c,typeof c)
