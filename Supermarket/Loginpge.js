// src/components/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { Button, TextField, Box, Typography } from '@mui/material';

function Loginpge() {
  const { login, logout, isLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    setLoginError(''); // Clear previous login error message

    // Validate email
    if (!email) {
      setEmailError('Email Address is required');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      try {
        const response = await axios.get('http://localhost:3000/person');
        const users = response.data;

        const matchingUser = users.find(
          (user) => user.email === email && user.password === password
        );

        if (matchingUser) {
          const userData = {
            name: matchingUser.firstName + ' ' + matchingUser.lastName,
            email: matchingUser.email,
            phone: matchingUser.phoneNumber,
            location: matchingUser.location,
          };
          localStorage.setItem('user', JSON.stringify(userData));

          login(); // Set login state using AuthContext

          alert('Login successful!');
          setEmail('');
          setPassword('');
        } else {
          setLoginError('Invalid email or password. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoginError('Failed to connect to the server. Please try again later.');
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        padding: 2,
      }}
    >
      <Box
        component="img"
        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729382400&semt=ais_hybrid"
        alt="Login Illustration"
        sx={{
          width: '45%',
          height: 'auto',
          maxWidth: 350,
          marginRight: 4,
        }}
      />

      <Box component="section" sx={{ textAlign: 'center', width: '50%' }}>
        <Typography variant="h4" component="h1" style={styles.typo}>
          {isLoggedIn ? 'Welcome Back!' : 'Login'}
        </Typography>

        {isLoggedIn ? (
          <>
            <p>You are already logged in!</p>
            <Button variant="contained" color="secondary" onClick={logout}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            <TextField
              id="email"
              label="Email"
              style={styles.textField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
              autoComplete="off"
            />
            <br /><br />
            <TextField
              id="password"
              label="Password"
              type="password"
              style={styles.textField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
            />
            <br /><br />
            {loginError && (
              <Typography color="error" style={{ marginBottom: '20px' }}>
                {loginError}
              </Typography>
            )}
            <Button type="submit" variant="contained" onClick={handleSubmit} style={styles.button}>
              Login
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

const styles = {
  textField: {
    width: '100%',
    maxWidth: 420,
  },
  typo: {
    color: 'black',
    paddingBottom: '30px',
  },
  button: {
    width: '100%',
    maxWidth: 420,
  },
};

export default Loginpge;
