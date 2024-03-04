import React, { useState } from 'react';
import '../App.css';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlerts

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        if (data.error) {
          // Replace basic alert with SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: data.error,
          });
        } else {
          // Replace basic alert with SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back!',
          }).then(() => {
            navigate('/dashboard');
          });
        }
      })
      .catch(error => {
        // Replace basic alert with SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'There was an error logging in. Please try again.',
        });
        console.error('There was a problem with the fetch operation:', error);
        // Handle error appropriately, e.g., show an error message to the user
      });
  };

  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>Username:</label>
          <input
            type="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
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
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="signup-link-container">
        <p className="signup-link">Don't have an account? <a href="/signup">Sign up here</a>.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
