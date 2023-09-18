

const express = require('express')
const model=require('../models/Secma')
const app = express()

const postmethod = async (req, resp) => {

    resp.send('hello from server side')

}
// postmethod()

const getmethod = async (req, resp) => {

    const data = await  model({
        userid: req.body.userid,
        username: req.body.username,
        comment: req.body.comment
    }

    )
    await data.save()
    console.log(data)
    resp.send('data can be recived')


}
module.exports = {
    getmethod, postmethod
}