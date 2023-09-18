let str='';
let ul=document.getElementById('ul')
let fruit={
    name:'faizna',
    class:'inte'
};

for(let i of fruit){
// ul.appendChild(i[fruit])
console.log(fruit[i])

str+=`<li> ${fruit[i]}</li>`
    
}
document.getElementById('ul').innerHTML=str;
// let fruit=['apple','banan','orange']

// let btn=document.getElementById('btn');
// document.getElementById('btn').addEventListener('click',buttonHandler)


// function buttonHandler(){

// let ajax=new XMLHttpRequest()
// ajax.open("GET",fruit,true)

// ajax.onload=function(){

// for(let key of fruit){
//         // document.body.innerHTML=this.responseText;
//         // console.log(key)
//  str+=`<li>${key}</li>`

// }
// ul.innerHTML=str;
    
// }
// ajax.send()
// }

// // buttonHandler()