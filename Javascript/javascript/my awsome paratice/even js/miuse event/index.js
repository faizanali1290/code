const btn = document.getElementById('btn')


btn.onclick = function (event) {

    // console.log(event.clientY)
    // console.log(event.clientX)

    // console.log(event)

    // if(event.altKey&&shiftKey.key){

    //     alert('wfioenk ')
    // }

    // if(event.altKey){

    //     alert('alet key')
    // }
    // console.log(event)


    // MouseEvent left button


    if (event.button == 0) {

        alert('ofwienklsd ')
    }

}


window.addEventListener('pointercancel', () => {


    alert('hello world')
})
window.addEventListener('select',()=>{

    alert('dont select the text it may be virus')

})

window.addEventListener('copy',()=>{


    alert('your text have been compied')
})


document.getElementById('btn1').addEventListener('click',()=>{
alert('weofjvn')
    let z=document.getElementById('para')
    // z.select();
    document.execCommand('copy')
    // window.getSelection().removeRange
})
