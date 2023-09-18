const mongoose = require('mongoose')
const express = require('express')
const app = express()
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/faizan', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {



    console.log('connection successfully....')
}, (e) => {
    console.log('error found.....')
})





mongoose.set('strictQuery', true)




const playlistSchema = new mongoose.Schema({

    // "name": String,
    // "age": Number,
    // "active": {
    //     type: Boolean,
    //     require: true,
    // }
    name: String,
    ctype: String,
    active: Boolean





})


// const Playlist = new mongoose.model('uconnectstd', playlistSchema)
const Playlist = new mongoose.model('uconnectstd', playlistSchema)






const createdocument = async() => {



        const documnet = new Playlist({

            "name": "faizan",
            "age": 12,
            "active": true

        })


        await documnet.save()




        // here we can add multiple elenen

        const student1 = Playlist({
            "name": "faizan",
            "ctype": "full stuck webdevelopment",
            "active": true
        })
        const student2 = Playlist({
            "name": "sajad",
            "ctype": "full stuck webdevelopment",
            "active": true
        })
        const student3 = Playlist({
            "name": "zubair",
            "ctype": "full stuck webdevelopment",
            "active": true
        })


        const result = await Playlist.insertMany([student1, student2, student3])
            // console.log(result)




    }
    // createdocument()


// read document

(async() => {

    // const result = await Playlist.find({ name: "faizan" })
    // const result = await Playlist.find().select({
    //     "ctype": 1
    // });
    // const result = await Playlist.find().sort({ name: -1 })

    // await Playlist.updateOne({ name: 'faizan' }, { $set: { name: 'faizan ali' } })


    // const result = await Playlist.find()

    let result = await Playlist.findByIdAndDelete({
        _id: '63d898ee8f0934965cde4562'
    })


    console.log(result)


})()

// let z = Playlist.find({ name: "faizan" })
// console.log(z)