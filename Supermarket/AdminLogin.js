import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    setErrorMessages({ email: '', password: '' });

    let valid = true;
    if (!email) {
      setErrorMessages((prev) => ({ ...prev, email: 'Email field is required.' }));
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessages((prev) => ({ ...prev, email: 'Email format is invalid.' }));
      valid = false;
    }

    if (!password) {
      setErrorMessages((prev) => ({ ...prev, password: 'Password field is required.' }));
      valid = false;
    } else if (password.length < 8) {
      setErrorMessages((prev) => ({ ...prev, password: 'Password must be at least 8 characters long.' }));
      valid = false;
    }

    if (valid) {
      if (email === 'sornaa@gmail.com' && password === 'sornaa@123') {
        console.log('Login Successful:', { email, password });
        navigate('/admindashboard');
      } else {
        setErrorMessages((prev) => ({ ...prev, email: 'Invalid email or password.' }));
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        padding: 2,
      }}
    >
      {/* Left side image */}
      <Box
        component="img"
        src="https://www.shutterstock.com/image-photo/access-system-login-by-username-600nw-2230192833.jpg" // Replace with your image URL
        alt="Login Illustration"
        sx={{
          width: '50%',
          height: 'auto',
          maxWidth: 300,
          marginRight: 4,
        }}
      />

      {/* Right side form */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 2,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errorMessages.email}
          helperText={errorMessages.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errorMessages.password}
          helperText={errorMessages.password}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
