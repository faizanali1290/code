let body = document.getElementsByTagName("body");
let input = document.getElementById("input")
let buttton = document.getElementById('btn')



document.getElementById("btn").addEventListener('click', function add() {
    let element = document.createElement("p")
    let inputV = input.value
   
    let text = document.createTextNode(inputV)
    if (inputV == "") {
        alert("plase enter a value")
    }
    else {
        
        element.appendChild(text)
        var chl = document.getElementById('ul').appendChild(element)

        // here work done button

        let done = document.createElement("button")
        let info1 = document.createTextNode("done")
        done.appendChild(info1)
        let done1 = document.getElementById('ul').appendChild(done)
        // element.setAttribute("class","textthrough")
        // HTMLTableRowElement;afhc



        done1.onclick = (a) => {
            // chl.style.textDecoration = "line-through"
            element.classList.toggle('textthrough');
            
            
        }
        // here work button



        let closebtn = document.createElement("button")
        let info = document.createTextNode("close")
        closebtn.appendChild(info)


        let buttonin = document.getElementById('ul').appendChild(closebtn)
        // buttonin.onclick=element.remove

        buttonin.onclick = () => {
            // a.stopPropagation
            element.remove()
            buttonin.remove()
            done1.remove()

        }
    }
    input.value=""



}






)

// here work close button
