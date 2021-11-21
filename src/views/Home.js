import React from 'react'
import TopNav from '../components/TopNav/TopNav'

const Home = () => {
    return (
        <main className={`Home container bg-primary min-h-screen min-w-full relative `}>
            <TopNav/>
            <div className={`container min-w-full min-h-screen bg-homeDesk bg-no-repeat bg-cover`} id="bitMap">

            </div>
        </main>
    )
}

export default Home
