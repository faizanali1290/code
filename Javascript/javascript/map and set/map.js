// Map
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.


// syntax of map

let hi=new Map()

// map.set(key, value) – stores the value by the key.




hi.set('name','faizan')
hi.set('age',12)
hi.set('proffesion','programmer')

console.log(hi.keys([0]))

// here we check type of 


// console.log(hi.get(1))
// console.log(hi.get('age'))

// // map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.

// // map.has(key) – returns true if the key exists, false otherwise.

// console.log(hi.has('age'))
// console.log(hi)
// // map.delete(key) – removes the element (the key/value pair) by the key.

// console.log('after delete property of mao')

// hi.delete('age')
// console.log(hi)
// // map.clear() – removes everything from the map.

// hi.clear()
// console.log('clear')
// console.log(hi)
// // map.size – returns the current element count.


// for(let element of hi){
//     console.log(element)
// }

// console.log(hi.size)


// console.log(hi.entries()
// )



// here convert map to 


// console.log(keys(hi)[0])

// console.log(hi.keys([0]))


// let z=Object.fromEntries([['name','faizan'],['age','20']])
// console.log(z)
//  let obj=Object.fromEntries(hi)
//  console.log(obj)
//  A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
//  console.log(Object.keys(obj)[0])