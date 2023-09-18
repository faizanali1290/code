function PasswordGenerator(length) {


    if(length<4||length>11){

        alert('your password must  be 4 between 10 chracter ')
    }
    else{
   

    let char = "abcdefghijklmnopqrstuvwxyz"
    let specialCharacter = '!@#$%^&*()'
    let number = '1234567890'
    let i = 0
    let n = ''


    while (i < 4) {

        var a = char[Math.floor(Math.random() * char.length)]
        var b = specialCharacter[Math.floor(Math.random() * specialCharacter.length)]
        var c = number[Math.floor(Math.random() * number.length)]
       
        n += a + b + c;
        i++
    }

    
    document.write(` your password is :<h1>${n.substr(0, length)}<h1`)
    }
}
let length=+prompt('enter the length of the password')
PasswordGenerator(length,)

// console.log(a)

