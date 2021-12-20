import React from 'react';
import { useDispatch } from 'react-redux';
import { switchPlanet } from '../../features/planet/planetSlice';
import Moon from './Moon';
import Mars from './Mars';
import Titan from './Titan';
import Europa from './Europa';

const PlanetDesc = ({ planet }) => {
    
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const planetChoice = e.target.value;
        dispatch(switchPlanet(planetChoice));
    }

    const values = ['moon', 'mars', 'europa', 'titan'];

    return (
        <section className={`w-auto min-h-screen flex flex-col justify-center items-center`}>
            <div className={`flex flex-col w-96  max-w-full`}>
                <nav className={`flex items-center flex-row justify-between w-full md:w-72`}>
                    {values.map((v) => (
                        <button className={`text-white font-barlow uppercase`} key={v} onClick={handleClick} value={v}>{v}</button>
                    ))}
                </nav>
                {planet === 'moon' && (
                    <Moon/>
                )}
                {planet === 'mars' && (
                    <Mars/>
                )}
                {planet === 'titan' && (
                    <Titan/>
                )}
                {planet === 'europa' && (
                    <Europa/>
                )}
            </div>   
        </section>
    )
};

export default PlanetDesc;
