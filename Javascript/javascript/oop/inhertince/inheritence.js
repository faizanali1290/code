//  here work inheritence


class monkey {
    // constructor(name, color) {
    //     this.name = name;
    //     this.color = color;
    //     alert(`my name is ${this.name} and my color is ${this.color}`)

    // }
    eat(eat) {
        this.eat = eat
        alert(`my name is ${this.name} and my color is ${this.color} iam eat ${this.eat} `)
    }
    sleep(sleep) {
        this.sleep = sleep;
        alert(`my name is ${this.name} and my color is ${this.color} iam eat ${this.sleep} `)


    }
}
// same functionality as monkey

class donkey extends monkey{


    pick(){
    alert("iam pick material")
    }
}

// it has same functionality as monkey and donkey 

class chicken extends monkey{
    bird(){
        alert("my name is chicken")
    }
}
let monkey1=new donkey()
// let monkey2= new donkey("donkey",'red')
monkey1.eat("banan")
// monkey2.sleep('night')
// let monkey3=new monkey("chicken",'yellow')
// let chicken1 =new chicken("chicken",'yellow')

// chicken1.bird()