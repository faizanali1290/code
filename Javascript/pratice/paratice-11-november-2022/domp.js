let ul1=document.getElementById("parent");
// let by=document.body;
// let thchild=document.getElementsByTagName("li")[2]
// console.log(thchild)
// console.log(thchild.parentElement.style.background="red")
// let child=document.getElementById("sc")
// console.log(ul1.matches("#parent"))


let element =document.createElement("p")
let te=document.createTextNode("hellow")
element.appendChild(te)
document.getElementById("parent").appendChild(element)