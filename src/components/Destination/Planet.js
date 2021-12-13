import React from 'react'
import Moon from '../../assets/images/planets/image-moon.webp'

const Planet = ({planet}) => {
    return (
        <div className={`w-auto min-h-screen flex flex-col justify-center items-center`}>
            <div className={`flex flex-col  w-96 h-full items-center justify-center`}>
                <h3 className={`text-white text-3xl font-barlow font-thin uppercase tracking-wide mb-4`}><span className={`pr-2 font-bold`}>01</span>Pick Your Destination</h3>
                <img alt="Planet" src={Moon} className={`mt-6 py-6`}/>     
            </div>
        </div>
    )
}

export default Planet
