import React from 'react'
import TopNav from '../TopNav/TopNav'

const MainLayout = ({children, ...rest}) => {
    return (
        <main className={`Home container bg-primary min-h-screen max-w-full relative `}>
            <TopNav />
            {children}
        </main>
    )
}

export default MainLayout
