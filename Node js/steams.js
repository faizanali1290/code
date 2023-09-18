const fs = require('fs');
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

http.createServer((req, resp) => {
    
    const rsteam = fs.createReadStream('steam.txt','utf-8')
    // rsteam.on('data', (chucnkdata) => {
    //     // resp.writeHead(200, { 'content-type': 'text' })
    //     resp.write(chucnkdata)

    //     resp.end(chucnkdata)
    //     resp.end()

    // })
    // rsteam.on('close', () => {
    //     resp.end('hii')
    // })


    rsteam.pipe(resp)


}).listen(port)

