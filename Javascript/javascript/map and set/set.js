// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let set=new Set()
// set.add(value) – adds a value, returns the set itself.

set.add('faizan')
set.add('hi')
set.add('by')
set.add('age')

console.log(set)
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.

set.delete('faizan')
// console.log(set)
// console.log(get('hi'))
