import React from 'react'

function Title() {

    return (<h1 className='heading'>LIST OF TOP 5  NATURAL IN 2022</h1>)

}

export default function Card(props) {


    return (
        <>
                <div className="card">
                    <img width="200px"src={props.CardImg} alt="" />
                    <p>Netfilx Orignal Series</p>
                    <h2>Dark</h2>
                    <button>Watch Now</button>


                </div>


        </>

    )
}

export { Title }