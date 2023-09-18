const fetchBtn=document.getElementById('fetchBtn')
const render=document.getElementById('render')
fetchBtn.addEventListener('click',fetch)

function fetch(){
const xhr=new XMLHttpRequest();

// xhr.open('GET','https:api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d2af3d54485ac669dbfd7b2d5d75b5ab',true)
// get request
// xhr.open('GET','https://dummyjson.com/products/1',true)

// post request
xhr.open('post',' http://dummy.restapiexample.com/api/v1/create',true)
xhr.getResponseHeader('Content-type','application/json')

// console.log(xhr)
// console.log(( XMLHttpRequest.responseText))
// console.log('you click on v=buttin')

xhr.onprogress=function (){
        console.log('on progress')
    }
xhr.onload=function (){
    
    // console.log ( JSON.parse( this.responseText))
    console.log ( ( this.responseText))
// 
    }


        
        // if(status===200){
            
            

// else{
    //     alert('error in code')
    // }
// url format

    // param='"name=test","salary=123","age=23"';
    param=`{"name:test","salary:123","age:23"}`;


    xhr.send(param)




}
