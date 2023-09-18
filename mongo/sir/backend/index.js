const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = process.env.PORT || 3000
// import db
const connectdb = require('./db/connect')
const route = require('./routers/authroutes')
app.use(express.json())
// app.use(bodyparser.urlencoded(),{extended:new})
// app.use(express().ur)
// coonect database
connectdb()
app.use( route)

app.listen(port)
console.log('portt is')