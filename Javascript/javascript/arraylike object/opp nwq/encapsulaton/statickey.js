
// static keyord is used to when we want to make method and used inside class then we used static method static method are not acces outside the class .it can access using class name;


class animal{
    constructor(name){
        this.name=animal.capitalize(name);
    }
  


    static capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)

    }

    
}


let z=new animal("monkey")
console.log(z)
