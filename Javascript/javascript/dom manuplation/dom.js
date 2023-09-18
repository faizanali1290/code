// inside Element text are called text node

// element that are direct child


// here we cover
// Element node
// Comment node
//text node
// frist child
// last child2
/* let z=document.getElementsByClassName('parent')[0];
console.log(z.firstChild) */

// let x=z.childNodes[1]

// sibling are the nodes that are children of the same parent
// using  nextSibling we can access children



// console.log(z.nextSibling.nextSibling)



// Element only navigation


//nextElemntSibling
//fristElemntSibling
//lastElementSibling


// let body=document.getElementsByTagName('body')

/* let v=document.getElementsByClassName('parent')[0];
console.log(v.nextElementSibling)
console.log(v.previousElementSibling)
console.log(v.firstElementChild) */


//table navigation

let body=document.getElementsByTagName('table')[0]

console.log(body.rows)
console.log(body.caption)
console.log(body.tHead)
console.log(body.tBodies)
console.log(body.tFoot)

// tr.cells
// give td and th
 
// this method to acces specific cell

console.log(body.rows[0].sectionRowIndex)
// /* console.log(body.rows[1].cells)
 */// give index of elemnt
console.log(body.rows[1])


// let f=body.rows[1].cells[0]
// f.addEventListener('click',()=>{
// alert('oawenksc ')
// })

// //cellindex have no index
// // console.log(body.rows[0].cellIndex)

console.log(typeof window)
console.log(typeof document)



// seraching the Dom

// doc.findElementByAttribute("myAttribute", "aValue");
// document.querySelectorAll('[data-foo="value"]');




let z=document.querySelector('input[type="text"]').style.background='red'
let x=document.querySelector('a[href="f"]').style.color='green'
console.log(z)
console.log(x)

let ele=document.getElementsByName('faizan')[0].style.background='yellow'
document.getElementsByName('password')[0].style.background='blue'




// closest coantion and matches


// matches  check the given css selctor can matche inside the parent

let matches=document.getElementById('para1').matches('.child1')
console.log(matches)

// closest check the nearset axcestor that matches the given css slector


let closest=document.getElementById('para5').closest('.parent')
console.log(closest)


// constain check elemt a inside b return true we can check id or class only one

let para=document.getElementById('para1')
let parent=document.getElementsByClassName('parent')[0];
let child1=document.getElementsByClassName('child1')[0];

let contain=para.contains(con)
console.log(contain)





console.log('parnet')

let contain_parent=parent.contains(child1)
console.log( contain_parent)



//innerHtml
//outerHtml
//innerText
//textContent it is used to get the text of body


// hidden property in html


let hidden=document.getElementById('hidden')
let btn=document.getElementById('btn')




btn.addEventListener('click',()=>{

    


        document.getElementById('hidden').hidden=false

    

})



console.log('here work on attribute')
// attributes method


// hasAttributes
// setAttributes //it has disadvantage is that it remove previous class 
//getAttributes //it give all atributes
//Attributes
//removeAttributes
//Attributes

let att=document.getElementById('para1')

console.log(att.hasAttribute('class'))

att.setAttribute('class','faizan ali attibutes')

// const givemeAttributes=att.getAttribute('class')
// document.getElementById('para1').removeAttribute('class')
// document.getElementById('para1').removeAttribute('id')
let attribute=document.getElementById('para1').attributes
console.log(attribute)

let attr=document.createAttribute('class')
attr.value='i was created on javascript'
const get=document.getElementById('progress').setAttributeNode(attr)


//this method can be used to set coustom attributes data-yourcoustomAttributes

console.log(frist.dataset)
console.log(frist.dataset.paragraph)



// create elemnet in javascript



const ProgressH1=document.createElement('h1');
const ProgressH1Text='hello world iam here me create in javascript'

ProgressH1.append(ProgressH1Text)
// document.getElementById('progress').appendChild(ProgressH1)
// document.getElementById('progress').prepend(ProgressH1)





// insersation method

// const innerT=document.createElement('h1').innerText="iam going to sleep"
// document.getElementById('progress').insertAdjacentElement('beforebegin',ProgressH1)
// document.getElementById('progress').insertAdjacentElement('beforeend',ProgressH1)


// document.getElementById('progress').insertAdjacentText('afterbegin','iam a a text of insertAdjacentText')
document.getElementById('progress').insertAdjacentHTML('afterbegin','<h1>iam a a text of insertAdjacentHtml<h1')



const comment=document.createComment('this is me')

// document.body.appendChild(comment)

// document.getElementById('progress').appendChild(comment)
// document.getElementById('progress').insertAdjacentElement("beforebegin",comment)

const replace=document.getElementById('replace')
let c=document.createElement('div');
c.innerHTML='<h1>congratulation you have been replace</h1>'


console.log(replace)
replace.replaceWith(c)


// class name class list

const eleme=document.getElementById('classList');
eleme.classList.add('red')
// eleme.classList.remove('red')
console.log(eleme.classList.contains('red')
)

let gi=eleme.classList.item(1)
console.log(gi)
let va=eleme.classList.value='faizan'
console.log(va)

let len=eleme.classList.length
console.log(len)

eleme.addEventListener("click",()=>{

        eleme.classList.toggle('red')
})

