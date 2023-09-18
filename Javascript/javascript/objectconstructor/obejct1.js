
// // let info=prompt("what do you know about user")
// // let obj={

// // name:"faizan",
// // age:"21",
// // class:12,
// // }
// // delete obj
// // obj["school"]="legend";


// // for (let print in obj){
// //     console.log(print)
// // }


// let obj = {
//     name: "faizan",
//     class: "intermediate",
//     subject: "computerscience"
// }
// // obj.class="ghs"
// // delete obj.name

// // console.log(obj)



// for (let print in obj) {
//     console.log(print)
// }
// // for(let obj_in of obj){          //for of loop does't work in object
// //     console.log(obj_in)
// // }

let arr = [3, 2, 3]
// for(let print1 in arr){
//     console.log(print1)
// }
// for(let array of arr){
//     console.log(array)
// }


// arr.forEach((element, value) => {
//     console.log(element, value)
// });
// obj.forEach((index) => {
//     console.log(index)
// })
let objectInsideArray = {
    name: "faizan",
    car: {
        bycycle: "dd",
        motor:"mo"
    },
    arraY: ["number1", "number2", "number3"]
}
// console.log(objectInsideArray.arraY[2])
for(let ff in objectInsideArray){
    console.log(ff,objectInsideArray[ff])
}