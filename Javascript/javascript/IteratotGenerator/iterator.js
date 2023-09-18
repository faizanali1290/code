

    // syntax of of itertor
    // let iterator=[Symbol.iterator]()
    
    // iterator is used to when we wnat to if some an array element can be print and some other array place can be anything
    
    // iterate is used in array



    let fruit =['apple','banana','orange','pear']
    
    let iterate=fruit[Symbol.iterator]()
    
    console.log(iterate.next().value)
    
    iterate.next()
    console.log('faizan')

    for(let i=2;i<fruit.length;i++){

        console.log(fruit[i])
    }
    


// here we used iterator in string


let string='hello world'

var iterate=string[Symbol.iterator]()

let initalization=iterate.next()
while(!initalization.done){
console.log(initalization.value)
initalization=iterate.next()

}


// here we used own iterator in object







let number=[1,2,3,4,5,33,0]

let num=numberIterator(number)







    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
