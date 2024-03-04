import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Swal from 'sweetalert2'; // Import SweetAlerts

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        // Replace basic alert with SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed',
          text: data.error,
        });
      } else {
        // Replace basic alert with SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Account Created',
          text: 'Your account has been created successfully!',
        }).then(() => {
          navigate('/dashboard');
        });
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }

    console.log('Signup form submitted:', username, email, password);
  };

  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={handleNameChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
