const mongoose = require('mongoose')

const scema = mongoose.Schema({
    userid: Number,
    username: String,
    comment: String

})
const model = new mongoose.model('newcollection', scema)

module.exports = model