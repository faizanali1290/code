const http = require('http');
const fs = require('fs')
const readfile = fs.readFileSync('./index.html')

http.createServer((req, resp) => {

    resp.writeHead(200, 'content-type:"html/txt"')
    resp.end(readfile)

}).listen(3000, '127.0.0.1', () => {
    console.log('port is lisneing')
})