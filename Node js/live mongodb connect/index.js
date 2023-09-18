const mongoose = require('mongoose')
const express = require('express')
const app = express()

const uri = 'mongodb+srv://ffaizan:monodb123456789@faizan.bcwofpc.mongodb.net/?retryWrites=true&w=majority'



mongoose.set('strictQuery', false)

// Connect to MongoDB database

mongoose.connect(uri,

    {

        useNewUrlParser: true,
        useUnifiedTopology: true,


        w: 'majority'
    }

);
mongoose.set('strictQuery', true)

// Define a Mongoose schema
const schema = new mongoose.Schema({
    name: String,
    age: Number
}, mongoose.Collection = 'faizan ');

// Compile the schema into a model
const Person = mongoose.model('Person', schema);

// Create a new document
const person = new Person({
    name: 'John Doe',
    age: 30
});

// Save the document to the database
person.save((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Person saved successfully!');
    }
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000!');
});