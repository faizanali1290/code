const mongoose = require('mongoose');




// connecting to database

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://localhost:27017/post', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    w: 'majority'


}).then(() => {
    console.log('server is connected to the database')
}, () => {
    console.log('error found')
})
// mongoose.set('strictQuery', true)