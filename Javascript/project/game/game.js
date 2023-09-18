const youinput=document.getElementById('youinput')
const machineinput=document.getElementById('machineinput')
const userinput=document.getElementById('input')
let btn=document.getElementById('btn')
console.log(btn)

document.getElementById('btn').addEventListener('click',()=>{


    let uservalue=document.getElementById('input').value;
   youinput.innerHTML="you Enter a number : "+uservalue;
   
   
   
   let machine=Math.ceil(Math.random()*10);
   machineinput.innerHTML="Machine enter a number  : "+machine;


   if(uservalue==machine){
    alert("congraulation you win")
    
   }
   else{
    alert('you loose the game')
   }

   document.getElementById('input').value=""
})
