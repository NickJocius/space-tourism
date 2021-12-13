import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleExpand } from '../../features/navState/navStateSlice';
import Link from '../Nav/Link';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg'

const TopNav = () => {

    const expanded = useSelector((state) => state.navExpand.expanded);
    const dispatch = useDispatch();

    const handleButton = () => {
        dispatch(toggleExpand())
    }

    const handleClick = () => {
        dispatch(toggleExpand())
    }
    
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
            <div className={`flex items-center flex-row pl-6 w-2/5`}>
                <div className={`inline h-12 w-12`}>
                <img src={logo} alt="Logo"/>
                </div>
                <div className={` h-px w-full opacity-20 bg-white -mr-4 pl-6 z-10`}></div>
            </div>
            <div className={`flex-auto`}>
                <div className={`h-full md:flex justify-evenly items-center bg-trans backdrop-filter backdrop-blur hidden`}>
                    {links.map((l, i) => (
                        <Link key={l.title} index={i} link={l}/>
                    ))}
                </div>
                <div className={`md:hidden flex items-center h-full w-full justify-end`}>
                <div className={`inline px-2`}>
                    <button className="outline-none mobile-menu-button " onClick={handleButton}>
                        <img src={hamburger} alt="Logo"/>
                    </button>
                </div>
            </div>
            </div>
            <div className={`absolute w-full h-auto transition-transform duration-1000 ease-in-out ${expanded && 'hidden'} transform translate-y-24 `}>
                <ul className={`bg-trans backdrop-filter backdrop-blur`}>
                    {links.map((l, i) => (
                        <li className={`text-center`} onClick={handleClick}><Link key={l.title} index={i+1} link={l}/></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TopNav;
