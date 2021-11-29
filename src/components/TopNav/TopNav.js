import React from 'react';
import Link from '../Nav/Link';
import logo from '../../assets/images/logo.svg';

const TopNav = () => {
    
    const links = [
        {
            title: 'home',
            dest: '/'
        },
        {
            title: 'destination',
            dest: '/destination'
        },
        {
            title: 'crew',
            dest: '/crew',
        },
        {
            title: 'technology',
            dest: '/tech'
        }
    ];

    return (
        
        <nav className={`container min-w-full flex absolute z-40 h-24 mt-6`}>
            <div className={`flex items-center flex-row pl-6`}>
                <div className={`inline h-12 w-12`}>
                <img src={logo} alt="Logo"/>
                </div>
                <div className={`w-96 h-px  opacity-20 bg-white -ml-2`}></div>
            </div>
            <div className={`flex-auto `}>
                <div className={`h-full flex justify-evenly items-center bg-trans backdrop-filter backdrop-blur`}>
                    {links.map((l, i) => (
                        <Link key={l} index={i} link={l}/>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
