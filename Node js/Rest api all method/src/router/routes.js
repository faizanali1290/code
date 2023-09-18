const { json } = require('express');
const express = require('express');
const Routers = new express.Router;
const student = require('../model/menus')


// post request

// Routers.post('/post',functionname) module.exports=functionname


Routers.post('/post', async (request, response) => {

    console.log(request.body)
    const re = await new student(
        request.body
    );

    re.save();


    response.send(JSON.stringify(re))
})




// get request


Routers.get('/get', async (re, resp) => {

    // let result = await student.find()

    // resp.send(result )

    resp.send('hello thzeeb')


})
Routers.get('/get/:id', async (req, resp) => {

    try {
        let param = req.params.id


        let result = await student.find({ name: param })


        resp.send(result)

    } catch (e) {

        resp.status(500).send('not found')
    }

})




// patch method


Routers.patch('/patch/:id', async function (req, resp) {

    const _id = req.params.id;


    const update = await student.updateOne({ _id }, req.body)

    // let update = await student.findByIdAndUpdate(id, req.body, { new: true })
    console.log(update)
    resp.send(update)


})


//put



Routers.put('/put/:id', async (req, resp) => {



    const _id = req.params.id
    const body = req.body

    let u = await student.findByIdAndUpdate(_id, body, { new: true })

    resp.send(u)

})



// findByIdAndUpdate(id,requestbody,{new:true})
// means give me update value





Routers.delete('/delete/:_id', async (req, resp) => {

    let del = await student.findByIdAndDelete(req.params._id)
    resp.send("delete data" + del)


})




module.exports = Routers