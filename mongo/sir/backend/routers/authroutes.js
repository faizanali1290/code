const mongoose = require('mongoose')
const { getmethod,postmethod } = require('../conroller/authlogic')

const { Router } = require("express")
const route = Router()

route.get('/entry', getmethod)
route.post('/entry', postmethod)

module.exports = route