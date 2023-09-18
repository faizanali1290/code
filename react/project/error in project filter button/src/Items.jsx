import React from 'react'

function Items({ api }) {
    return (
        <>



            <div className="cards">
                {

                    api.map((ele, i) => {



                        return (




                            <div className='card' key={i}>
                                <h1>{ele.title}</h1>
                                <p>{ele.description}</p>
                                <img src={ele.img} alt="" />
                            </div>

                        )

                    })


                }
            </div>

        </>
    )
}

export default Items
