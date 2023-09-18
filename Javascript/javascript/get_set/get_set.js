class name {

    constructor() {
        this.para = prameter
    }



     name(newName) {

        this.Para = newName

    }

     m() {
        return this.name
    }
}
// let a = new name('ali')
// console.log(a)
// a.name = 'faizan'






let getset={
    name:'faizan',
    lastname:'ali',
    
    get fullname(){//get method is used when we want to make method inside object outside the object it can be access and the values can't be change  it can only be access
    
        console.log(this.name,this.lastname)
    },
    set newNmae(value){ //the set method is used to the change of values of get method
    
        [this.name,this.lastname]=value.split(" ")
    
    
    }
    
    }
    getset.fullname
    getset.newNmae='apple pineapple'
    getset.fullname