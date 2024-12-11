import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function SignupAdmin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    alert('Account Created Successfully!');
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <h2>Join LinkedIn</h2>
      <p>Make the most of your professional life.</p>
      <p>get your team mate for your professional life.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Join</button>
      </form>
      <p>
        Already on LinkedIn? <Link to="/">Sign in</Link>
      </p>
    </div>
  );
}

export default SignupAdmin;
