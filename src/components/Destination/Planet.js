import React from 'react'
import Moon from '../../assets/images/planets/image-moon.webp'
import Europa from '../../assets/images/planets/image-europa.webp'
import Mars from '../../assets/images/planets/image-mars.webp'
import Titan from '../../assets/images/planets/image-titan.webp'

const Planet = ({planet}) => {
    return (
        <div className={`w-auto min-h-screen flex flex-col justify-center items-center`}>
            <div className={`flex flex-col  w-96 h-full items-center justify-center`}>
                <h3 className={`text-white text-3xl font-barlow font-thin uppercase tracking-wide mb-4`}><span className={`pr-2 font-bold`}>01</span>Pick Your Destination</h3>
                {planet === 'moon' && (
                    <img alt="Planet" src={Moon} className={`mt-6 py-6 max-w-sm md:max-w-full`}/>     
                )}
                {planet === 'europa' && (
                    <img alt="Planet" src={Europa} className={`mt-6 py-6 max-w-sm md:max-w-full`}/> 
                )}
                {planet === 'mars' && (
                    <img alt="Planet" src={Mars} className={`mt-6 py-6 max-w-sm md:max-w-full`}/> 
                )}
                {planet === 'titan' && (
                    <img alt="Planet" src={Titan} className={`mt-6 py-6 max-w-sm md:max-w-full`}/> 
                )}
            </div>
        </div>
    )
}

export default Planet
