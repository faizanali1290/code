
            // here string pratice 01 5 octuber 2022


let string="hello world";
// here work length mehods
let string_2=string.length;
console.log(string)
console.log('the lengh of',string,"is",string_2)
// here work slice
let slice=string.slice(3,6)
console.log(slice)
// here work substring 
let substring=string.substring(3,6)
console.log(substring)

// here work sratrt substr
let substr=string.substr(2,7)
console.log(substr)

// here work strat replace
let repl="pakistan";
let replace=repl.replace("pakistan","gilgit")
console.log(replace)

// here work uppercase

let uppercase="king".toUpperCase()
console.log(uppercase)

// here work lower case

let lowercase="king".toLowerCase();
console.log(lowercase)

// here work string concat

let concat1="hellow ",concat2="pakistan"
let concat=concat1.concat(concat2)
console.log(concat)

// here work string trim

let  trim1="hello moon    p   ";
let trim=trim1.trimStart()
console.log(trim)


// here work pdstring

let padstr1="5"

let padstr=padstr1.padStart(4,"-")
console.log(padstr)

// here work charAt
let charAt1="led light"
let charAt=charAt1.charAt(0)
console.log(charAt)

// here work split

let split1="iam array"
let split=split1.split()
console.log(split)
// here work charCodeAt
let f='f';
let charcode=f.charCodeAt(0)
console.log(charcode)


// here above work serach method

// here work indexof
let index="sound faizan".indexOf("n");
console.log(index,"big")

// here work last indexOf
let lindex="the fox kill dog".lastIndexOf("k")
console.log(lindex)

// here work serach

let serach="apple banana mango pear"
console.log(serach.search("apple"))

// here work match
// let match="apple light screen";
// let matches=match.match("een");
// console.log(match)

// let include="apple cat dog"
// let includes1=include.includes("cat")
// console.log(includes1)
let text = "Hello world, welcome to the universe.";
text.includes("world");
console.log(text)


let strat="pakistan is a big country"
// alert(strat.startsWith("pakistan"))


let a="10",b="10",c;
c=a+b;
console.log(c)