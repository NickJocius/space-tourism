import React from 'react';

const Moon = () => {
    return (
        <div className={`w-full`}>
            <h1 className={`text-white font-barlow text-8xl py-6`}>MOON</h1>
            <p className={`text-white pt-2 pb-4 text-sm leading-6`}>See our planet as you've never seen it before.  A perfect relaxing 
                trip away to help regain perspective and come back refreshed.  
                While you're there, take in some history by visiting the Luna 2 and 
                Apollo 11 landing sites.
            </p>
            <div className={` h-px w-full opacity-20 bg-white -mr-4 pl-6 z-10 my-3`}></div>
            <div className={`grid grid-cols-2 text-white`}>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow`}>Avg. Distance</h3>
                    <p className={`uppercase text-lg font-belle font-bold`}>384,400 KM</p>
                </div>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow`}>Est. Travel Time</h3>
                    <p className={`uppercase text-lg font-belle font-bold`}>3 Days</p>
                </div>
            </div>
        </div>
    )
}

export default Moon
