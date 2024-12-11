// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// // import { useNavigate } from 'react-router-dom'

// function Login() {
//     const [email, setemail] = useState("")
//     const [password, setpassword] = useState("")
 
    
//     const navigate = useNavigate()

//     function handlesubmit() {
//         console.log(email,password);
//         axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEp1Gdqz-SkhZe8ePh0U73N9aQIgNnp88`,{email,password})
//         .then((res) => {sessionStorage.setItem("token", res.data.idToken)
//         navigate("/")
//     })
//         .catch((err) => console.log(err))
//     }
    
//   return (
//     <div className='container p-5 col-md-4'>
//         <h2 className='text-center my-4'>Login</h2>
//         <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" 
//             className="form-label">Email address</label>
//             <input type="email" 
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             className="form-control" 
//             id="exampleFormControlInput1"  />
//         </div>

//         <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" 
//             className="form-label">Password</label>
//             <input type="password" 
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//             className="form-control" 
//             id="exampleFormControlInput1"  />
//         </div>
//     <button className='btn btn-primary' onClick={(handlesubmit)}>Login</button>
//     </div>
//   )
// }

// export default Login;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    alert('Logged In Successfully!');
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <p>Login to access your professional network.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>
        New to LinkedIn? <Link to="/signup">Join now</Link>
      </p>
      <p>
        Login as admin in  LinkedIn? <Link to="/SignupAdmin">Join now</Link>
      </p>
    </div>
  );
}

export default Login;
