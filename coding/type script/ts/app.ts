// import { Interface } from "readline";
export {}
// privitive data types
let boolean: boolean = true;
console.warn(boolean);
let string: string = "this is me it srring";
console.log(string);
const number: number = 10;
console.log(number);
// TYPE IN TYPESCRIPT

let x: number | string = "09as";
console.log(x, "x");






let unknown: unknown = "unknown";
let any: any = "any";

console.log(unknown, any);
console.log("'hello\nworld'");

// for object

interface userTypes {
  readonly name: string;
  age: number;
  dateOfBrith: string;
}

const object: userTypes = {
  name: "unknow",
  age: 10,
  dateOfBrith: "20/2/2004",
};
console.log(object);

const newobject: {readonly name: string; modal: number } = {
  name: "s",
  modal: 23,
};

// for function

function typeScript(a: number, b: string): any {
  //here the number mean it can return number

  return [a, b];
}

const typeScriptFunRetun = typeScript(10, "youname");
console.log(typeScriptFunRetun);

// for array

const array: [number, string] = [0, "s"];
console.log(array);


// generic
function generic<t>(a:t):t {
    return a;
  }
  console.log(generic(404));
  
// enum
enum Days{
   mon= 'mon'
}

const isWeekDay:Days=Days.mon
console.log(isWeekDay)
