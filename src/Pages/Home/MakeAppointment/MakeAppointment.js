import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background : `url(${appoinment})`
        }} className='flex justify-center items-center my-16'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-100px]' src= {doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2>Make Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi aliquid cumque? Officiis reprehenderit aut ut ab illo, temporibus accusantium veniam hic, saepe voluptas placeat laudantium officia amet explicabo exercitationem!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;