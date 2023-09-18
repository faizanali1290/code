"use strict"
// alert("")


let x=document.getElementById('h1')
// let z=x.getAttribute('class')
// console.log(z)
// x.setAttribute('class','king')
// let a=x.attributes;

// console.log(a)
// let a=x.value();
// let z=document.getElementsByTagName('p')[0]
// x.removeChild(z)
// console.log(a)

// let cl=x.classList;
// console.log(cl)
// x.classList.add('faizan','k')
// x.classList.remove('faizan')
// let z=x.classList
// console.log(z)
// let c=x.classList.item(1)
// console.log(c)

let p=document.createElement('p');
let text=document.createTextNode('helo world iam html');
p.append(text)
console.log(p)
let par="<a>helo world"
x.insertAdjacentHTML('afterbegin',par)

x.replaceChildren()


