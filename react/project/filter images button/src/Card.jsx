import React, { useState } from 'react'
import Api from './Api'
function Card() {

    const [api, update] = useState(Api)


    function dinnerItem(a) {
        let filterdata = Api.filter((element) => {

            return element.catagery === a


        })
        update(filterdata)

    }
    function allitems(a) {
        let filterdata = Api.filter((element) => {

            return element.catagery !=a


        })
        update(filterdata)

    }
    function lanuchItem(a) {
        let filterdata = Api.filter((element) => {

            return element.catagery === a


        })
        update(filterdata)

    }
    function BreakfastItem(a) {
        let filterdata = Api.filter((element) => {

            return element.catagery === a


        })
        update(filterdata)

    }


    return (
        <div>

            <div className="button">
                <button onClick={()=>allitems('all')}>All items</button>
                <button onClick={() => dinnerItem('dinner')}>dinner</button>
                <button onClick={() => lanuchItem('lancuh')}>lancuh</button>
                <button onClick={() => BreakfastItem('breakfast')}>break fast</button>
            </div>


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
        </div>
    )
}

export default Card
