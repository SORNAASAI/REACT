import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton, // Import IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import Back Arrow Icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EditProfile = () => {
  // State to handle user details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Create navigate function
  const navigate = useNavigate();

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault();

    // Validate email format using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone number length
    const phonePattern = /^\d{10}$/; // Matches exactly 10 digits
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number with exactly 10 digits.');
      return;
    }

    // Here, you'd typically update the user's profile on your backend
    alert('Profile updated successfully!');

    // Reset fields
    setFullName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid 
        container 
        spacing={3} 
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        style={{ height: '100vh' }} // Full viewport height to center vertically
      >
        {/* Right section - Edit Profile Form */}
        <Grid item xs={12} md={9} lg={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <IconButton onClick={() => navigate(-1)}> {/* Go back to previous page */}
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h5" gutterBottom style={{ marginLeft: '10px' }}>
                Edit Profile
              </Typography>
            </Box>
            <Box component="form" onSubmit={handleSave} sx={{ mt: 3 }}>
              {/* Full Name */}
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              {/* Email */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Phone Number */}
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                inputProps={{ maxLength: 10 }} // Limit input length to 10 characters
              />

              {/* Save Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProfile;
