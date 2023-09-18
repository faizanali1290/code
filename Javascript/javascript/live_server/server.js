const http=require('http');
const { json } = require('stream/consumers');
const server=http.createServer((req,resp)=>{

resp.console.log(('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d2af3d54485ac669dbfd7b2d5d75b5ab').parse.json()
);
// Request('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=d2af3d54485ac669dbfd7b2d5d75b5ab')
    resp.end()


})


server.listen(8080,'127.0.0.1',()=>{
    console.log("server is live")
})
// kill -INT $(lsof -t -i :8000)
