
let z=[];

function fizzbuzz (n) {
    
    



  for(var a=1;a<=n;a++){
  
     if(a%3===0&&a%5===0){

       z.push( 'fizz buzz')
  
  }
  
    else if(a%3===0){
      z.push('fizz')
     
  }
  
  else if(a%5===0){
  
z.push("buzz")
  }
  
 
  else{
z.push(a)  }
  
  }
  
  
  }

  fizzbuzz(20)
  // ff.push.z
  console.log(z)



  let num1=[1,2,3,4]
   let num2=[5,6,7,8]
   let marage=[...num1,num2]
   console.log(marage)

