class fruit{
    apple(){
alert("iam apple")
    }
    pear(){
        // here is a mehod over ride
alert(`iam pear zero `)
    }
}
class vegetable extends fruit{
    constructor(a){ //if we make another class contructor the we used super keyard if we write this key we must write after super keyward
        super(a)
        alert('hello')

    }

    pear(){
super.pear()
    }
    veg(){
alert('iam big')
    }
}
// let fruitN=new fruit()
// fruitN.pear(33)

let veg=new vegetable()
veg.pear()