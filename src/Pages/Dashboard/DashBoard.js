import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h2 className='text-3xl font-bold text-center text-purple-500'>Dashboard</h2>
         <Outlet></Outlet>
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-32 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to= "/dashboard">My Appoinments</Link></li>
            <li><Link to= "/dashboard/review">My Reviews</Link></li>
            <li><Link to= "/dashboard/history">My History</Link></li>
            {admin && <li><Link to= "/dashboard/users">All User</Link></li>}
          </ul>
        </div>
      </div>
    );
};

export default DashBoard;