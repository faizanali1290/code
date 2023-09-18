const url=require('http');
const server=url.createServer((req,resp)=>{

resp.end(console.log('iam here'));
})
server.listen(8080,'127.0.0.1',()=>{
    console.log('server is live')
    
})