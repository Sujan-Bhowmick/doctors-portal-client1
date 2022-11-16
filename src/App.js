
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Login from './Pages/Login/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/Dashboard/DashBoard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>
          }>
            <Route index element = {<MyAppointments></MyAppointments>}></Route> 
            <Route path='review' element = {<MyReview></MyReview>}></Route> 
            <Route path='history' element = {<MyHistory></MyHistory>}></Route> 
            <Route path='users' element = {<RequireAdmin><Users></Users></RequireAdmin>}></Route> 
          </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
