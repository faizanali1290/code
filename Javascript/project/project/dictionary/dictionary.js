


let serach=document.querySelector('#serach')
let render=document.querySelector('#r')
let btn=document.getElementById('btn')


btn.addEventListener('click', serachME)

function serachME(){

let key=document.querySelector('#serach').value

switch (key) {
   
    case 'easy': document.getElementById('r').innerHTML=`${key}  آسان`
         break;
    case 'hard':document.getElementById('r').innerHTML=`${key}  مشکل`
         break;
    case 'bad': document.getElementById('r').innerHTML=`${key}  برا`
         break;
    case 'good':document.getElementById('r').innerHTML=`${key}  اچھا`
         break;
    case 'near': document.getElementById('r').innerHTML=`${key}  نزدیک`
         break;
    case 'yes':document.getElementById('r').innerHTML=`${key}  ہاں`
         break;
    case 'no': document.getElementById('r').innerHTML=`${key} نہیں `
         break;
  

    default:{
        document.getElementById('r').innerHTML=`result not found`
    }
        break;

}
document.querySelector('#serach').value=""}


