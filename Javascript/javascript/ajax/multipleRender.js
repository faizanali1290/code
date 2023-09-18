const fetchBtn=document.getElementById('fetchBtn')
const render=document.getElementById('render')
fetchBtn.addEventListener('click',fetch)


function fetch(){

    ajx=new XMLHttpRequest()
    ajx.open("GET","http://dummy.restapiexample.com/api/v1/employees",true)
    ajx.onload=function(){
        
        let json=(this.responseText)
        
        console.log(json)
        let ul=document.getElementById('ul');
        let srt=""
        for(let key in json){

            srt+=`<li> ${json[key]} </li>`
        }
        ul.innerHTML=srt;
    }
    ajx.send()
}
