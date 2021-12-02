import React, { useState } from 'react';
import Planet from '../components/Destination/Planet'

const Destination = () => {
    const [planet, setPlanet] = useState('moon');

    return (
        <section className={`container min-w-full min-h-screen bg-destMob md:destTab lg:destDesk bg-no-repeat bg-cover`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 min-h-full min-w-full`}>
                <Planet/>
            </div>
        </section>
    )
};

export default Destination;
