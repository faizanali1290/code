require('dotenv').config()
const mongoose = require('mongoose')


mongoose.set("strictQuery", false)

mongoose.connect(process.env.MONGO_URI, {
    // mongoose.connect('mongodb+srv://ffaizan:monodb123456789@faizan.bcwofpc.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(() => {
    console.log('server is successfully connected to the database')
}, (e) => {
    console.log(e)
})
mongoose.set("strictQuery", true)

