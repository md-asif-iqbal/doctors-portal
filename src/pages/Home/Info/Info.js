import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoDetails from '../InfoDetails/InfoDetails';
const Info = () => {

    return (
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-5 '>
                <InfoDetails cardTitle='Opening Hours' bgClass ='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoDetails>
                <InfoDetails cardTitle='Our Locations' bgClass ='bg-accent' img={marker}></InfoDetails>
                <InfoDetails cardTitle='Contact Us'    bgClass ='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoDetails>
                
            </div>
    );
};

export default Info;