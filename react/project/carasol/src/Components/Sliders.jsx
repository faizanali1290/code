import React, { useEffect, useState } from 'react'
import Slidercards from './Slideracard'

const Sliders = () => {
    const [next, setslide] = useState(5)
    const find = (i) => {

        setslide(i)

    }


    const nextbtn = () => {

        if (next == Slidercards.length - 1) {

            setslide(0)

        }
        else {

            setslide(next + 1)
        }

    }
    const prevbtn = () => {
        if (next == 0) {

            setslide(5)

        }
        else {

            setslide(next - 1)
        }

    }

    const chnage=()=>{


        alert('oech')
    }


    // useEffect(() => {
    //     const intervals = setInterval(fun, 2000)

    //     function fun() {

    //         if (next == Slidercards.length - 1) {
    //             setslide(0)

    //         }


    //         else {

    //             setslide(next + 1)
    //         }




    //     }
    //     return (() => {
    //         clearInterval(intervals)

    //     })

    // }, [next])


    return (
        <>
            <div className="cards">

                <div className="card">


                    <div className="one">
                        <h2>{Slidercards[next].title}</h2>
                        <p>{Slidercards[next].description}</p>
                        <img src={Slidercards[next].src} alt="" />
                    </div>
                  



                </div>

                <button onClick={prevbtn}>prev</button>
                <button onClick={nextbtn}>next</button>
            </div>

            <div className="circle">

                {
                    Slidercards.map((e, i) => {
                        return <div style={{ backgroundColor: next === i ? 'yellow' : 'red' }} onClick={() => find(i)}></div>
                    })
                }

            </div>



        </>

    )
}

export default Sliders
