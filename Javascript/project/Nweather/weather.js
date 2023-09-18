let input=document.getElementById('input');
const btn=document.getElementById('btn')
const form=document.getElementById('form')
const render=document.getElementById('render')
const API_KEY = "d2af3d54485ac669dbfd7b2d5d75b5ab"
// let city=input.value;

const getweather = async(city)=>{

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    // let url='https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d2af3d54485ac669dbfd7b2d5d75b5ab'
    const response= await fetch(url);
    const data= await response.json()
    // console.log(response)
    console.log(data)
    return showWeather(data)
     
 };
 const showWeather=(data)=>{
    render.innerHTML=`
    
    
    <h1>${data.main.temp}</h1>
    <h2>${data.weather[0].main}</h2>
    
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"" alt="">
    `

}


form.addEventListener('submit',(e)=>{
e.preventDefault()
    getweather(input.value)
    console.log(input)



})

// getweather()


// api.openweathermap.org/data/2.5/forecast?q=gilgit&appid=d2af3d54485ac669dbfd7b2d5d75b5ab