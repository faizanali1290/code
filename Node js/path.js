const path=require('path')
console.log(path.basename('/media/faizan/50DE81A3DE8181C8/Node js/path.js'))
console.log(path.dirname('/media/faizan/50DE81A3DE8181C8/Node js/path.js'))
console.log(path.extname('/media/faizan/50DE81A3DE8181C8/Node js/path.js'))
console.log(path.parse('/media/faizan/50DE81A3DE8181C8/Node js/path.js'))
console.log(path.relative('/media' ,'path.js'))
console.log(path.normalize('path.js'))
let a=path.parse('/media/faizan/50DE81A3DE8181C8/Node js/path.js');
console.log(path.format(a))

console.log(path.isAbsolute('/media/faizan/50DE81A3DE8181C8/Node js/path.js'))