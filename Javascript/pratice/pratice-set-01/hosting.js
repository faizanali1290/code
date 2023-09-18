let obj = {
    name: "faizna",
    class: 7
}
// for (let key in obj){
//     console.log(obj["name"])
// }

for(let i=0;i<Object.keys(obj).length;i++){
    console.log(Object.keys(obj)[i]+" : "+obj[Object.keys(obj)[i]])
}