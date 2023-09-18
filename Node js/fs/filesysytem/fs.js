const fs = require('fs')
const path = require('path')

// this comman is used to write file

// fs.writeFile('faizan.txt', 'welcom my frist file in node js', (e) => {
//     console.log('here')
// })

// this comman is used to append text on file


// fs.appendFile('faizan.txt', 'this is my second file', (error) => {
//     console.log(error)
// })


// fs.mkdir('newdirectory', () => {
//     console.log('directory success full create')

// })


// fs.writeFile('./newdirectory/ newfile.txt', '', () => {
//     console.log('file has been created')

// })

// const directoryinfo=fs.readdir('/media/faizan/50DE81A3DE8181C8/fs/filesysytem',()=>{
//     console.log('directory in fo has success fully sent')
// })
// console.log('faizan '+ directoryinfo)

// fs.rename('newdirectory', 'newname', () => {
//     console.log('directory name can be change')
// })

// fs.rename('hii.txt', 'hellow.txt', () => { })


// fs.writeFile('newname/newfile.txt','',()=>{})

// fs.rename('newname/newfile.txt','newname/mynameis',()=>{})

// let z=fs.stat('/media/faizan/50DE81A3DE8181C8/Node js/fs/filesysytem/fs.js',(e,s)=>{

//     console.log(s)
// })


// let a;
// let access=fs.access('./hellow.txt',a,()=>{})
// console.log('here',access)
// const filePath = 'hellow.txt';

// fs.access(filePath,fs.constants.R_OK|| fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log(`${filePath} is not readable`);
//     return;
//   }
//   console.log(`${filePath} is readable`);
// });
// let filname='./hellow.txt';

// fs.chmodSync(filname, 0o444, () => {
//     console.log('permison has been set')

// })





// fs.appendFileSync(filname,' weiafhwioehf wioeafh weoisfhwelhfw',()=>{

// })


// fs.closeSync(1)

// file_descriptor = fs.openSync("hellow.txt");
// console.log("The file descriptor i:", file_descriptor);

// fs.closeSync(19)
// let sent='hello world this is oiwerh'
// fs.writeFile('copy.txt',sent,()=>{})
// fs.copyFileSync('hellow.txt','copy.txt')

