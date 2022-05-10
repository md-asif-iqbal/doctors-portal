
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Login from './pages/LoginSite/Login/Login';
import NavBar from './pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='home' element={<Home></Home>}>Home</Route>
        <Route path='about' element={<About></About>}>Home</Route>
        <Route path='login' element={<Login></Login>}>Login</Route>
      </Routes>
    </div>
  );
}

export default App;
