// console.time("time")
// console.log(" iam log")
// console.assert(3==3,"iam assert")
// console.warn("iam warming")
// console.info("iam info")
// console.error("iam error")
// console.timeEnd("time")
// console.info(document.body.firstChild)
// console.log(document.body.lastChild)


// console.log(document.body.childNodes)
// // let a=prompt("enter a color")
// document.body.style.background=a;
// document.body.style.color="red"

// console.log(document.head.childNodes[0])
// console.log(document.head.childNodes.length-1)


// let a=document.body.firstChild;
// console.log(a)
// let b=a.firstChild
// console.log(b.nextSibling)
// here we acces elemnt and elemnt child


// let body=document.body.firstElementChild;
// console.log(body)
// let d=body.firstElementChild.nextElementSibling.
// console.log(d)




// console.log(document.body.parentElement.firstChild)
// let body=document.body.firstElementChild;
// console.log(body)
// let nextchildbody=body.previousElementSibling
// console.log(nextchildbody)


// color change using function

// const backgroundcolor1 = (a) => {
//     if(a=="black"){
//     document.body.firstElementChild.style.color="white"
//     }

//    return document.body.firstElementChild.style.background=a

// }

// let a=prompt("enter your favoriate color")
// console.log(backgroundcolor1(a))

// console.log(document.body.hasChildNodes)





// document.body.style.background = "red"
// console.log(document.getElementById("home").style.color = "yellow")
// document.getElementsByClassName("green")[0].style.color = "yellow"
// document.getElementsByTagName("p")[1].style.color = "yellow"
// console.log(document.getElementsByName("text1")[0].style.background = "yellow")
// document.querySelector("p").style.background = "white"




// let li = document.querySelectorAll(".li").style.background = "green"
// let li = document.querySelectorAll(".li")
// li.forEach(element => {
//     console.log(li[element].style.background="green")
// });
// for(let i=0;i<=li.length-1;i++){
//     console.log(li[i].style.background="green")}




// matches closest contains


// here check it if i target elemt it exsist
// let id=document.getElementById("green")
// console.log(id)
// console.log(id.matches("#green"))

// let cls=document.getElementsByClassName("p")[0]
// console.log(cls)
// console.log(cls.matches(".p"))

// let clo= document.getElementsByClassName("red")[0]
// console.log(clo.closest(".p"))




// let id1 = document.getElementById("id1")
// let sp1 = document.getElementById("sp1")
// console.log(sp1.contains(id1))
// console.log(document.getElementById("id1").matches(".box"))
// console.log(document.getElementById("sp1").closest("#id1"))
// console.log(id1.contains(sp1))


// 
// inner HTML outer HTMl


// console.log(document.getElementById("id1").innerHTML="iam inner html i change <li>outerHTML</li>previous content")
// document.getElementById("id2").outerHTML="<li> outerHTML</li>"



// attributes 



// let artb=document.getElementById('id1')
// let spb=document.getElementById("sp1")
// console.log(artb.getAttribute("class"))
// // console.log(artb.hasAttribute("class"))
// console.log(artb.setAttribute("class","hello big"))
// console.log(artb.removeAttribute("class"))
// console.log(artb.dataset) //here is used to access coustom arrtibute
// console.log(artb.attributes) 




// let repl=document.getElementById("id1")
// let div=document.getElementsByClassName("add")[0];
// let child=document.createElement("li")
//         child.innerHTML="iam a chidl"
// div.apend(child)
// div.prepend(child)
// div.after(child)
// div.replaceWith(child)

// document.getElementById("id1").innerHTML="hellow"

// document.getElementById("id1").insertAdjacentHTML("afterbegin","<li>hellow</>")
// document.getElementById("id1").insertAdjacentHTML("beforeend","<li>hellow</>")
// document.getElementById("id1").insertAdjacentHTML("afterend","<li>hellow</>")
// document.getElementById("id1").insertAdjacentHTML("beforebegin","<li>hellow</>")

// let a=document.getElementById("id1").classList.remove("pak")
// document.getElementById("id1").classList.add("lap")
// console.log(document.getElementById("id1").classList)

 let a=setInterval((a) => {
       
      
                alert("hello")
             
             
               

               
        
 }, 1000)
 console.log(a)
 b=prompt("do you want to show alert")
                if("n"==b){
                        clearTimeout(a)
                 }

// let b=setTimeout(()=>{
//         alert("iam setTimeOut")
// },2000)