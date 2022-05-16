
import { Route, Routes } from 'react-router-dom';

import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyHistory from './pages/Dashboard/MyHistory';
import MyReviews from './pages/Dashboard/MyReviews';
import Home from './pages/Home/Home/Home';
import Login from './pages/LoginSite/Login/Login';
import RequireAuth from './pages/LoginSite/RequireAuth/RequireAuth';
import SignUp from './pages/LoginSite/SignUp/SignUp';
import NavBar from './pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='home' element={<Home></Home>}>Home</Route>
        <Route path='about' element={<About></About>}>Home</Route>
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}/>
          <Route path='review' element={<MyReviews></MyReviews>}/>
          <Route path='history' element={<MyHistory/>}/>
        </Route>
        <Route path='login' element={<Login></Login>}>Login</Route>
        <Route path='signup' element={<SignUp></SignUp>}>Login</Route>
      </Routes>
      
    </div>
  );
}

export default App;
