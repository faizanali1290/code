const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// this is used to convert body data to normalback
app.use(bodyParser.json());


// app.use(express.json())

// this method is used to get usrl paramater

app.get('/:id', (req, resp) => {

        console.log(req.params)
        console.log(req.query)
        resp.send('hello from another side')
    })
    

    // this method is used to get server from client

app.post('/data', (req, resp) => {
    const data = req.body
    console.log(data)
    resp.end('data can recived')
})





app.listen(3000, () => {
    console.log('port is lisning')
})