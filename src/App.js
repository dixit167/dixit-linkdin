
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import SignupAdmin from './SignupAdmin';
import LoginAdmin from './LoginAdmin';


function App() {
  return (
   <>
   <h1>helloo</h1>
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
     </Routes>
     <Routes>
        <Route path='/LoginAdmin' element={<LoginAdmin/>} />
        <Route path='/SignupAdmin' element={<SignupAdmin/>} />
        <Route path='/home' element={<Home/>} />
     </Routes>
   </>
  );
}

export default App;
