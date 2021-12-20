import React from 'react'

const Europa = () => {
    return (
        <div className={`w-full`}>
            <h1 className={`text-white font-barlow text-8xl py-6 text-center md:text-left`}>EUROPA</h1>
            <p className={`text-white pt-2 pb-4 text-sm leading-6 text-center md:text-left`}>
                The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream.
                With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation  
                in your snug wintery cabin.
            </p>
            <div className={` h-px w-full opacity-20 bg-white -mr-4 pl-6 z-10 my-3`}></div>
            <div className={`grid grid-cols-2 text-white`}>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow text-center md:text-left`}>Avg. Distance</h3>
                    <p className={`uppercase text-lg font-belle font-bold text-center md:text-left`}>628 mil. KM</p>
                </div>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow text-center md:text-left`}>Est. Travel Time</h3>
                    <p className={`uppercase text-lg font-belle font-bold text-center md:text-left`}>3 years</p>
                </div>
            </div>
        </div>
    )
}

export default Europa
