// src/components/MyAccount.js

import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button, // Import Button for logout
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import your cart context
import { useAuth } from './AuthContext'; // Import your Auth context

const MyAccount = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // Get login state and logout function from AuthContext
  const [user, setUser] = useState(null); // State to hold user data

  useEffect(() => {
    // Retrieve user data from local storage when isLoggedIn changes
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser); // Set user data to state
  }, [isLoggedIn]); // Re-run when isLoggedIn changes

  const handleGiftCardClick = () => {
    navigate('/gift-card'); // Navigate to GiftCard component
  };

  const handleLogout = () => {
    // Call the logout function from AuthContext
    logout(); 
    // Clear user data from local storage
    localStorage.removeItem('user'); 
    setUser(null); // Clear user state
    
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {/* Left section - Account Navigation */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
              MY ACCOUNT
            </Typography>
            <List component="nav">
              <ListItem button style={{ borderRadius: '5px' }}>
                <ListItemText
                  primary={
                    <Typography variant="body1" style={{ fontWeight: '500' }}>
                      Personal Details
                    </Typography>
                  }
                />
              </ListItem>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/edit-profile">
                  <ListItemText inset primary="Edit Profile" />
                </ListItem>
                <ListItem button component={Link} to="/delivery">
                  <ListItemText inset primary="Delivery Addresses" />
                </ListItem>
              </List>
              <ListItem button component={Link} to="/my-orders">
                <ListItemText inset primary="My Orders" />
              </ListItem>
              <Divider />
              <ListItem button onClick={handleGiftCardClick}>
                <ListItemText primary="My Gift Cards" />
              </ListItem>
              <ListItem button onClick={() => navigate('/my-payments')}>
                <ListItemText primary="My Payments" />
              </ListItem>
              <ListItem button onClick={() => navigate('/notifications')}>
                <ListItemText primary="Alerts & Notifications" />
              </ListItem>
            </List>
            {/* Logout Button */}
            
          </Paper>
        </Grid>

        {/* Right section - Profile Details */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Profile Details
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              {user ? (
                <>
                  <Typography variant="body1">{user.name}</Typography>
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="body1">{user.phone}</Typography>
                </>
              ) : (
                <Typography variant="body1">No user information available.</Typography>
              )}
            </Box>
            <Box mt={3}>
              {/* Additional content can go here */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyAccount;
