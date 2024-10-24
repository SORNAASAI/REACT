import React, { useState } from 'react';
import { Container, Typography, Paper, List, ListItem,Box, ListItemText, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Notification = () => {
  const [notifications, setNotifications] = useState([]); // State to store notifications
  const navigate = useNavigate(); // Initialize the navigate function

  // Example function to add a notification (for testing purposes)
  const addNotification = () => {
    const newNotification = `New notification at ${new Date().toLocaleTimeString()}`;
    setNotifications([...notifications, newNotification]);
  };

  // Example function to clear notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        {/* Back Arrow and Notifications Title */}
        <Box display="flex" alignItems="center" marginBottom={2}>
          {/* Back Arrow Icon Button */}
          <IconButton onClick={() => navigate(-1)}> {/* Navigate to previous page */}
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h5" gutterBottom style={{ marginLeft: '10px' }}>
            Notifications
          </Typography>
        </Box>

        {/* Display notification list or message for no notifications */}
        {notifications.length > 0 ? (
          <List>
            {notifications.map((notification, index) => (
              <ListItem key={index}>
                <ListItemText primary={notification} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1">No Notifications</Typography>
        )}

        {/* Buttons for testing purposes */}
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={addNotification} style={{ marginRight: '10px' }}>
            Add Notification
          </Button>
          <Button variant="outlined" color="secondary" onClick={clearNotifications}>
            Clear Notifications
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Notification;
