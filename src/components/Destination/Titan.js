import React from 'react'

const Titan = () => {
    return (
        <div className={`w-full`}>
            <h1 className={`text-white font-barlow text-8xl py-6 text-center md:text-left`}>TITAN</h1>
            <p className={`text-white pt-2 pb-4 text-sm leading-6 text-center md:text-left`}>
                The only moon known to have a dense atmosphere other than Earth, Titan is a home away from
                home(just a few hundred degrees colder!).  As a bonus, you get striking views of the 
                Rings of Saturn.
            </p>
            <div className={` h-px w-full opacity-20 bg-white -mr-4 pl-6 z-10 my-3`}></div>
            <div className={`grid grid-cols-2 text-white`}>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow text-center md:text-left`}>Avg. Distance</h3>
                    <p className={`uppercase text-lg font-belle font-bold text-center md:text-left`}>1.6 Bil. KM</p>
                </div>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow text-center md:text-left`}>Est. Travel Time</h3>
                    <p className={`uppercase text-lg font-belle font-bold text-center md:text-left`}>7 years</p>
                </div>
            </div>
        </div>
    )
}

export default Titan
