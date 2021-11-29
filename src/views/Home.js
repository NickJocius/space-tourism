import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import Intro from '../components/Home/Intro'
import Explore from '../components/Home/Explore'
const Home = () => {
    return (
        <main className={`Home container bg-primary min-h-screen max-w-full relative `}>
            <TopNav/>
            <div className={`container min-w-full min-h-screen bg-homeDesk bg-no-repeat bg-cover`} id="bitMap">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 min-h-full min-w-full`}>
                    <Intro />
                    <Explore/>
                </div>
            </div>
        </main>
    )
}

export default Home
