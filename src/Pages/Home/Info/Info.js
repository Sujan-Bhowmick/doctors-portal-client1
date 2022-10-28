import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            <InfoCard cardTitle = "Opening Hours" bgClass= "bg-gradient-to-r from-secondary to-primary" img = {clock}></InfoCard>
            <InfoCard cardTitle = "Our Locations" bgClass= "bg-[#566573]" img = {marker}></InfoCard>
            <InfoCard cardTitle = "Contact Us" bgClass= "bg-gradient-to-r from-secondary to-primary" img = {phone}></InfoCard>
        </div>
    );
};

export default Info;