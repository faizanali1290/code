let a = () => {
    return new Promise((resolve, reject) => {

        setInterval(() => {
            resolve(56)
        }, 3000)
    })
};


// let f = async () => {

//     let b = await a();

//     console.log(b)

//     let c = await a();

//     console.log(c)

//     let d = await a()

//     console.log(d)

// };
// f();


// to solve upper problem the upper problem is that we can  make function then we used async ,IIFE is used to async without given function




(async()=>{

    let f=await a();

    console.log(f)

    let b= await a()

    console.log(b)

    let c=await a();

    console.log(c)
})
()

