import React from 'react'
import Intro from '../components/Home/Intro'
import Explore from '../components/Home/Explore'

const Home = () => {
    return (
            <div className={`container min-w-full min-h-screen bg-homeMob md:bg-homeTab lg:bg-homeDesk bg-no-repeat bg-cover`} id="bitMap">
                <div className={`grid grid-cols-1 md:grid-cols-2 min-h-full min-w-full`}>
                    <Intro />
                    <Explore/>
                </div>
            </div>
    )
}

export default Home
