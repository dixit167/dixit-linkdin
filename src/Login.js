

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
