
const fs = require('fs')
// fs.writeFileSync('faizan.text','hello world')
// fs.writeFileSync('faizan.text', 'hello worlf')
// if we write the file data the old data can be rmove in file
// fs.appendFileSync('faizan.text', 'this is frist program in node js')

// node js inculdes an additonal data type called buffer
//not available in browser js
//buffer is mainly used to store binary data

// let filedata = fs.readFileSync('faizan.text').toString()

// fs.renameSync('faizan.text', 'text')
// console.log(filedata)


// task one


// fs.mkdirSync('task')

// fs.writeFileSync('task/ biodata.txt','hii faizan')
// fs.renameSync('task/ biodata.txt','task/ faizan.txt')
// fs.unlinkSync('task/ faizan.txt')
// fs.unlinkSync('task/ biodata.txt')
// fs.rmdirSync('task')
fs.rename('hii.txt', 'hellow.txt', () => { })
console.log('here')