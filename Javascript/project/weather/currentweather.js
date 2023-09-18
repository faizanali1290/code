
/* https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d2af3d54485ac669dbfd7b2d5d75b5ab
 */
var i;
let html;
let output='';

let btn=document.getElementById('btn')
let apiResponse=document.getElementById('apiResponse');


btn.addEventListener('click',api)

function api() {
    console.log('hiasodfhc')
   let fetch=new XMLHttpRequest()
   fetch.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d2af3d54485ac669dbfd7b2d5d75b5ab',true)

   fetch.onload=function (){
       // console.log(x)
       
       var x=JSON.parse(this.responseText)
       for(i in x){
output+=`<li>${x[i]}<li>`
        
 
    }
    console.log(x)
   apiResponse.innerHTML=output;
   }
   fetch.send()
    

}
ca