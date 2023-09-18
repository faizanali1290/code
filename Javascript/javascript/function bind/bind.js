let youtuber1={
    name:'faizan',
    content:'progrming',
    feature:function(star){


        document.write(`my name is ${this.name} and my content is ${this.content} plase give me star ${star}`)


    }
}

// youtuber1.feature(5)


// the call method is used to link  the  method for another object 

let youtuber2={
name:'baboo',
content:'general knowledge',
}
// youtuber1.feature.call(youtuber2,[5])//the frist parameter is object which can be used and scond is the method parameter
youtuber1.feature.call(youtuber2,5)//the frist parameter is object which can be used and scond is the method parameter




//here we start bind method 
//the bind is similar to call method but the difference is that the arragumet can pass in arrray

let bind1={

    fruit:'apple',
    color:'red',
    properties:function(yes){
        document.write(`<br>my name is ${this.fruit} and my color is ${this.color} do you want to like me ${yes}`)
    }
};

bind1.properties('yes')

let bind2={

    fruit:'pear',
    color:'yellow'

};
let z=bind1.properties.bind(bind2,['yes'])
z()







//apply method

 let productinfo1={

name:'laptop',
waranty:'2 years',
feature:function(agree){

    document.write(`<br>my product name is ${this.name} and the waranty is ${this.waranty } do you want to agree ${agree}`)




}


 }
productinfo1.feature('yes')

let productinfo2={

    name:'iphone',
    waranty:'5 years',

}

let x=productinfo1.feature.apply(productinfo2,['no'])
