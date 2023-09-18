require('dotenv').config()
const mongoose = require('mongoose');

// connect server

const connectdb = async () => {

    try {
    
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URI)
        console.log('succesfully connect to database')

    }

    catch (e) {
        console.log('connection fail')
    }

}
module.exports = connectdb