/*  getattribute */

let x = document.getElementsByTagName("h1")[0]
// console.log(x)
// let getV=x.innerText
// getV=x.getAttribute('class')
// let get=x.getAttribute('id')
// let get=x.getAttributeNode("class")
// let get=x.attributes[2]
// console.log(get)
// console.log(getV)

// x.innerText="hellow-world pakistani"
// x.outerHTML="<h1>hellow-world pakistani</p>"

// z=x.setAttribute("id", "para")    
// myval=x.attributes[0].value
// console.log(myval)




// function name1() {
//     document.getElementById("style")
// }
// name1(z)
// x.setAttribute("class","hah dsac dc ")

// let z1=x.className=("caslkcn alckn")
// console.log(z1)

// let classl=x.classList[1]
// let classl=x.classList.item(0)
// let classl=x.classList.add("kkkpppppppppppp")
// // let rp=x.classList.replace("p","faizna")
// let rp=x.classList.contains("k")
// console.log(rp)
// console.log(classl)

let b = document.getElementById('b').classList;
let t = document.getElementsByClassName("para")[0]


// addEventListener('change', function ch() {
//     let t = document.getElementsByClassName("para")[0].classList;
//     t.toggle.style.background = "red"

// // })
// let element=document.createElement('p');
// let text=document.createTextNode("hell")
// element.appendChild(text)
// document.body.appendChild(element)


// let dark=element.setAttribute('class',"dark")
// let all=document.querySelectorAll('.dark')

//     // document.querySelectorAll('.dark')[element].style.background="red"


// document.getElementById('para').classList.add("dark")


// function fun(params) {
//     // t.toggle.style.background = "red"

//     let t = document.getElementsByClassName("para")[0].classList.toggle('dark')

// }


let p=document.getElementById('para')
p.addEventListener('click',function fun(){
document.getElementById('para').style.background="red"
})
p.removeEventListener('click', fun)