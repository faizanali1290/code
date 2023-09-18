// here is a function constrctor
// note:if we used constrctor function inside function call method

// here is function constrctor using prototype ; the __ptoto__ is used to in normal function


// this is constructor function


function BankAccount(userName, id = date.now(), balance) {


    this.userName = userName;
    this.id = id;
    this.balance = balance;
}



let coustomer1 = new BankAccount('faizan', "", 100)
console.log(coustomer1)




BankAccount.prototype.deposite = function (amount) {
    this.balance += amount
}

coustomer1.deposite(100)
console.log(coustomer1)


// here is used to __proto__


let student={
    name:'faizan',
    class:'12th'
}
let student1={
    age:'20'
}

student1.__proto__=student;

console.log(student1.name)