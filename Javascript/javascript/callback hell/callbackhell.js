
//call back hell mean a one callback another call back another call back then another callback

function callbackme(h) {



    const c = h;
    setTimeout(() => {

        let rollnumber = 1;
        console.log('my name is faizan')


        setTimeout((z) => {

            console.log('my roll number is ' + z)
            let obj={

                gender:'male'
            }


            setTimeout((l)=>{ //here l mean it is a parameter which can acces the value of obj.gender


        console.log(l)


            },2000,obj.gender) //here we can get the object it may be varaible or arrgument
        }, 2000, c)

        



    }, 2000)



}

callbackme(20)