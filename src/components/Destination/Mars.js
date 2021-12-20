import React from 'react'

const Mars = () => {
    return (
        <div className={`w-full`}>
            <h1 className={`text-white font-barlow text-8xl py-6 text-center md:text-left`}>MARS</h1>
            <p className={`text-white pt-2 pb-4 text-sm leading-6 text-center md:text-left`}>
                Don't forget to pack your hiking boots.  You'll need them to tackle Olympus Mons, the
                tallest planetary mountain in our solar system.  It's two and a half times the size of Everest!
            </p>
            <div className={` h-px w-full opacity-20 bg-white -mr-4 pl-6 z-10 my-3`}></div>
            <div className={`grid grid-cols-2 text-white`}>
                <div className={`flex flex-col`}>
                    <h3 className={`uppercase text-xs font-barlow text-center md:text-left`}>Avg. Distance</h3>
                    <p className={`uppercase text-lg font-belle font-bold  text-center md:text-left`}>225 mil. KM</p>
                </div>
                <div className={`flex flex-col `}>
                    <h3 className={`uppercase text-xs font-barlow  text-center md:text-left`}>Est. Travel Time</h3>
                    <p className={`uppercase text-lg font-belle font-bold  text-center md:text-left`}>9 Months</p>
                </div>
            </div>
        </div>
    )
    
}

export default Mars
