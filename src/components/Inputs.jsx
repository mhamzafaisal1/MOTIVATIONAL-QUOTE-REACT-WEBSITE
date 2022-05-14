import React, { useState } from 'react'

import useResources from './useResources';
const Inputs = () => {
    const [clicked, setClicked] = useState(false)
    const resources = useResources({clicked});

    const buttonChangeHandler = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <div className='py-20'>
                <h2 className='font-bold font-mono px-5'>"{resources}"</h2>
            </div>
            <button onClick={buttonChangeHandler} className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-10 mx-23  rounded-full'>New Quote</button>
        </>
    )
}

export default Inputs