

let time=new Date()
let year=time.getFullYear()
let month=time.getMonth()
let day=time.getDay()
let hours=time.getHours()
let minute=time.getMinutes()
let second=time.getSeconds()
console.log(year)
console.log(month)
console.log(day)
console.log(hours)
console.log(minute)
console.log(second)




// let timeshow=document.getElementById('time')
// setInterval(()=>{
//    timeshow.innerHTML=new Date()
// })

console.log('here i set date')
let setTimeNow=new Date()

setTimeNow.setFullYear('2034')
setTimeNow.setMonth('12')
setTimeNow.setDate('29')
setTimeNow.setHours('4')
setTimeNow.setMinutes('56')
setTimeNow.setMilliseconds('4')

console.log(setTimeNow)


// date formats



let format1=new Date('2022-4-22')
let format2=new Date('2022,4,22')
let format3=new Date('january 4,2022')
let for2=new Date('2003-12-23 :1:44:2:900' )

console.log("('2022-4-22')"+ format1)
console.log("('2022,4,22')"+format2)
console.log("('january 4,2022')"+format3)
// frist format is







