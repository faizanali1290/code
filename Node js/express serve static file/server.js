const fs = require('fs');
const express = require('express')
const app = express()
const index = fs.readFileSync('./public/index.html', 'utf-8',)
const about = fs.readFileSync('./public/about.html', 'utf-8',)
const services = fs.readFileSync('./public/services.html', 'utf-8',)
const contactus = fs.readFileSync('./public/contactus.html', 'utf-8',)

app.get('/', (req, rep) => {
    rep.send(index)

})
app.get('/about', (req, rep) => {
    rep.send(about)

})
app.get('/services', (req, rep) => {
    rep.send(services)

})
app.get('/contactus', (req, rep) => {
    rep.status(200).send(contactus)
})
app.use((req, res) => {
    res.status(404).send("Sorry, that page was not found.");
});


app.listen(3000)

