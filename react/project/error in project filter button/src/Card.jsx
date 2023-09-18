import React, { useState } from 'react'
import Api from './Api'
import Items from './Items'
import Menus from './Menus'
function Card() {

    const allCateValues = new Set([...Api.map((e) => e.catagery), 'all'])


    const [catItems, setCatItems] = useState(allCateValues)
    const [api, update] = useState(Api)

    const order = (va) => {

        update((ele) => {

            return api.filter((e) => {


                return e.catagery === va
            })


        })


    }
    return (
        <div>

            <Menus catItems={catItems} order={order} />


            <Items api={api} />
        </div>
    )
}

export default Card
