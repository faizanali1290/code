const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name: {
        type: String,


    },
    DOB: String,
    phone: Number


})

const student = new mongoose.model('post', Schema);

module.exports = student
 