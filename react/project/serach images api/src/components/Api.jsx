import React from 'react'

function Api(props) {

    console.log(props.value)
    // const img = `https://source.unsplash.com?${props.value}`
    const img = `https://source.unsplash.com/900x900?${props.value}`
    return (
        <div>


            <img style={{ width: '400px' }} src={img} alt="alt" />
        </div>
    )
}
export default Api
