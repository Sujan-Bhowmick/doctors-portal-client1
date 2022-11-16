import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading/Loading'

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, "PP");
    const {data: services, isLoading, refetch} = useQuery(['available', formatedDate] , () =>  fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
        )

        if(isLoading){
            return <Loading></Loading>
        }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }, [formatedDate])
    return (
        <div>
            <h4 className='tex-xl text-secondary text-center'>Available Appoinment on {format(date, 'PP')}</h4>
            <div className='grid gird-cols-1 md:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                     key={service._id}
                     service = {service}
                     setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date = {date}
             setTreatment = {setTreatment} 
             treatment= {treatment}
             refetch = {refetch}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;