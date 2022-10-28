import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment , setTreatment}) => {
  const {_id, name, slots } = treatment;
  
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg text-secondary font-bold">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-2'>
             <input  type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
            <select name = 'slot' className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;