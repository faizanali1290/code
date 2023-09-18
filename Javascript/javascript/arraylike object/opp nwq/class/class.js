class BankAccount{


constructor(UserName,userId,UserBalance){
    this.UserName=UserName;
    this.userId=userId;
    this.UserBalance=UserBalance;

}
deposite(amount){
    this.UserBalance+=amount
}




}


let coutomer1=new BankAccount('faizan','34r7920',4000)
console.log(coutomer1)
// coutomer1.deposite(300)
