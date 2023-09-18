// privitive data types
let boolean = true;
console.warn(boolean);
let string = "this is me it srring";
console.log(string);
const number = 10;
console.log(number);
// TYPE IN TYPESCRIPT
let x = "09as";
console.log(x, "x");
let unknown = "unknown";
let any = "any";
console.log(unknown, any);
console.log("'hello\nworld'");
const object = {
    name: "unknow",
    age: 10,
    dateOfBrith: "20/2/2004",
};
console.log(object);
const newobject = {
    name: "s",
    modal: 23,
};
// for function
function typeScript(a, b) {
    //here the number mean it can return number
    return [a, b];
}
const typeScriptFunRetun = typeScript(10, "youname");
console.log(typeScriptFunRetun);
// for array
const array = [0, "s"];
console.log(array);
// generic
function generic(a) {
    return a;
}
console.log(generic(404));
// enum
var Days;
(function (Days) {
    Days["mon"] = "mon";
})(Days || (Days = {}));
const isWeekDay = Days.mon;
console.log(isWeekDay);
export {};
