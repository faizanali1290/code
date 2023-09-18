const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
app.set('view engine', 'hbs')

// the hbs floder must have name  views but using this method to change the name
const h=path.join(__dirname,'/template/partials')
hbs.registerPartials('./template/partials')
app.set('views', 'template/views')



app.get('/', (req, resp) => {

    resp.render('index', { name: 'home' })
})
app.get('/about', (req, resp) => {

    resp.render('about', { name: 'about' })
})
app.get('/services', (req, resp) => {

    resp.render('services', { name: 'services' })
})
app.get('/contactus', (req, resp) => {

    resp.render('contactus', { name: 'faizan' })
})
app.listen(3000,()=>{
    console.log('server is lisning')
})