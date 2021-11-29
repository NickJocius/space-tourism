import React from 'react'

const Intro = () => {
    return (
        <div className={`w-auto min-h-screen flex flex-col justify-center items-center`}>

        
            <div className={`flex flex-col justify-between w-96 h-18 `}>
                <h3 className={`text-white text-2xl font-barlow font-thin uppercase tracking-wide`}>So, you want to travel to </h3>
                <h1 className={`text-white text-9xl mt-6 tracking-wide font-belle font-thin`}>SPACE</h1>
                <p className={`text-white text-sm mt-6 font-barlow leading-6 tracking-wide`}>Let's face it, if you want to go to space, you might as
                    well genuinely go to outer space and not hover kind of on the edge of it.  Well sit
                    back, and relax because we'll give you a truly out of this world experience!
                </p>
            </div>
        </div>
    )
}

export default Intro
