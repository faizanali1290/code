const os = require('os')

let arch = os.arch()
//archtecture comman is used to check the the type syystem support 64bit and 32 bit
console.log(arch)

// console.log(os.cpus())

console.log(os.hostname())
console.log(os.loadavg())
const tolme = os.totalmem()
const gb = tolme / 1024 / 1024 / 1024
console.log(gb.toFixed(1) + ' GB')
const freemem = os.freemem()
const frememgb = freemem / 1024 / 1024 / 1024
console.log(frememgb.toFixed(1) + ' GB' )
console.log(os.networkInterfaces())
console.log(os.release())
console.log(os.machine())
console.log(os.homedir())
console.log(os.version())
console.log(os.tmpdir())
console.log(os.userInfo())