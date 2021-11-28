import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ link, index}) => {
    const {
        title,
        dest
    } = link;
    return (
        <NavLink to={dest} activeClassName={`active`} className={`text-white w-4 font-barlow text-sm tracking-wide`}><span className={`pr-2 font-bold`}>0{index}</span>{title.toUpperCase()}</NavLink>
    )
}

export default Link
