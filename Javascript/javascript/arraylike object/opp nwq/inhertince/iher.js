function CurentAccount(userName,userId,userBlance,trasition=100){

    this.userName=userName;
    this.userId=userId;
    this.userBlance=userBlance;
 this.trasition=trasition;
    

};

CurentAccount.prototype.trasition=function (amount)
{
// this.amount=amount
        this.userBlance-=amount
    }

// let user1=new CurentAccount('faizan',384839,200)
// user1.trasition(33)
// console.log(user1)


function businessAccount(userName,userId,userBlance){

    this.userName=userName;
    this.userId=userId;
    this.userBlance=userBlance;
 
  this.trasition_limit=200000;

};

CurentAccount.prototype.trasition=function (amount)
{
// this.amount=amount
        this.userBlance-=amount
    }


    // check it upper constrctor function one word is differnt trasition limit and the same code is repeat 
    
    //using inheritence the  repetition code is used to link 


    function SavingAccount(userName,userId,userBlance,trasition){
CurentAccount.call(this,userName,userBlance,userId,trasition=900)
    }
CurentAccount.prototype.SavingAccount=Object.create(CurentAccount.prototype)
let user2=new SavingAccount('ali',333,435)//link to prototype
    console.log(user2)


    class businessAccount1{

        constructor(userName,userBlance){
            this.coustomerName=userName;
            this.personalBalacnce=userBlance;
        }
        
withdraw(){
    console.log('seilfn')
}
    }

    class CurentAccount1 extends businessAccount1{
constructor(username,userBlance){

    super(username,userBlance)
}
deposite(){
    console.log('helo')
}
    }

    let z=new businessAccount1('faizan',200)
    console.log(z)
    let a=new CurentAccount1('faizan',200)
    console.log(a)


//  class   businessAccount1 extends  CurentAccount1