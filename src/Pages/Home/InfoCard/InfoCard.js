import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div className={`card md:card-side bg-base-100 shadow-xl  ${bgClass}`}>
        <figure className='pl-5'>
            <img className='' src={img} alt="Album"/>
            </figure>
        <div className="card-body text-white">
          <h2 className="card-title ">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;