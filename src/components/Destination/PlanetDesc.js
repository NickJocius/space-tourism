import React from 'react';
import Moon from './Moon';

const PlanetDesc = ({planet}) => {
    return (
        <section className={`w-auto min-h-screen flex flex-col justify-center items-center`}>
            <div className={`flex flex-col w-96`}>
                <nav className={`flex items-center flex-row justify-between w-72`}>
                    <button className={`text-white font-barlow`}>Moon</button>
                    <button className={`text-white font-barlow`}>Mars</button>
                    <button className={`text-white font-barlow`}>Europa</button>
                    <button className={`text-white font-barlow`}>Titan</button>
                </nav>
                {planet === 'moon' && (
                    <Moon/>
                )}
            </div>   
        </section>
    )
};

export default PlanetDesc;
