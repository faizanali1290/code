"use strict"



function CreateAccount(coustomerName = "NotEnter", balance) {
    this.coustomerName = coustomerName;
    this.coustomerId = Date.now()
    this.balance = balance;

}
// deposite section


this.deposite = function (newblance) {

    this.balance += +newblance



}

// withdraw section

this.withdraw = (withdraw) => {

    this.balance -= withdraw


}


let coustomerName = document.getElementById('coustomerName')
let coustomerblance = document.getElementById('coustomerblance')
let createAccountBtn = document.getElementById('createAccountBtn')

// create bank account form
var array = new Array();


createAccountBtn.addEventListener('click', () => {

    let coustomer = new CreateAccount(coustomerName.value, +coustomerblance.value)

    array.push(coustomer)

    for (const i  of array) {
        console.log(i)
    }
});






