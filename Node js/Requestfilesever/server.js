
const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contactus = fs.readFileSync('./contactus.html');



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html/script');

    if (url == '/') {
        res.end(home)
    }
    else if (url == '/about') {
        res.end(about)
    }

    else if (url == '/services') {
        res.end(services)
    }

    else if (url == '/contactus') {
        res.end(contactus)
    }
    else {
        res.statusCode=200
        res.end('<h1>not  found</h1>')

    }


    // switch (url) {
    //     case '/': res.end(home);
    //         break;
    //     case '/about': res.end(about);
    //         break;
    //     case '/services': res.end(services);
    //         break;
    //     case '/contactus': res.end(contactus);
    //         break;
    //     default: res.end('<h1>404 error</h1>')

    // }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
