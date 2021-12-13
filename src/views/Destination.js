import React from 'react';
import { useSelector } from 'react-redux';
import Planet from '../components/Destination/Planet';
import PlanetDesc from '../components/Destination/PlanetDesc';

const Destination = () => {
    const planet = useSelector((state) => state.planet.planet)
    

    return (
        <section className={`container min-w-full min-h-screen bg-destMob md:destTab lg:destDesk bg-no-repeat bg-cover`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 min-h-full min-w-full`}>
                <Planet planet={planet} />
                <PlanetDesc planet={planet}/>
            </div>
        </section>
    )
};

export default Destination;
