import React from 'react'


const Liftingchild = ({ p }) => {
    const handleClick = () => {
        alert('button')
    }


    const button = document.getElementById('parentside');
    console.log(button)



    return (
        <div>
            <button onClick={() => p('faizan ali ')}>onClick</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quo dolore debitis ullam, nam fugiat nisi fugit placeat et, ad nostrum id earum harum suscipit quisquam. Illum quia commodi nesciunt?</p>
            <script>
            document.getElementById('myButton').addEventListener('click', handleClick);

            </script>

        </div>
    )
}

export default Liftingchild
