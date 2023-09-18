const { on } = require('events')
const EventEmitter = require('events')
const event = new EventEmitter()



event.on('request',(status,ok)=>{
    console.log('file sent succesfully with status code '+status + " "+ok)
})


event.emit('request',200,'ok')