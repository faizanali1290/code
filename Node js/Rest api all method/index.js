const express = require('express')
require('./src/db/connec')
const Router = require('./src/router/routes')

const app = express()

const mongoose = require('mongoose')

app.use(express.json())
const port = process.env.PORT || 3000

app.use(Router)





app.listen(port, () => {
    console.log('port is lisining ' + port)
})





