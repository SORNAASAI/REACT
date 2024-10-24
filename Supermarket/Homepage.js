// Homepage.js
import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ProductCard from './ProductCard'; // Your ProductCard component
import Loginpge from './Loginpge'; // Your Login component
import Signup from './Signup'; // Your Signup component
import Footer from './Footer'; // Your Footer component
import Apphead from './Apphead'; // Your App head component

function Homepage() {
  const [dialogOpen, setDialogOpen] = useState(null); // Manage dialog state

  const handleOpenDialog = (type) => {
    setDialogOpen(type); // Open dialog based on type
  };

  const handleCloseDialog = () => {
    setDialogOpen(null); // Close dialog
  };

  return (
    <div>
      {/* Header Component */}
      <Apphead handleOpenDialog={handleOpenDialog} />

      {/* Dialog for Login */}
      <Dialog open={dialogOpen === 'login'} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Loginpge />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Signup */}
      <Dialog open={dialogOpen === 'signup'} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <Signup />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Banner Section */}
      <Box style={styles.bannerContainer}>
        <h1 style={styles.bannerTitle}>SMARTBASKET</h1>
      </Box>

      {/* Product Section */}
      <Box style={styles.productContainer}>
        <ProductCard />
      </Box>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

// Styles for the homepage
const styles = {
  bannerContainer: {
    backgroundColor: 'lightblue',
    color: 'black',
    borderRadius: '8px',
    height: '350px',
    width: '80%',
    maxWidth: '1300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '20px',
    margin: '40px auto',
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/56/59/73/360_F_656597332_VsZignOcfl2Xp5dwtGVUiNfT7kA7rQyw.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  bannerTitle: {
    color: 'orange',
    textShadow: '3px 3px 4px black',
    fontFamily: 'Hobo Std',
    fontSize: '3rem',
    margin: '0',
    paddingTop: '10px',
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
    width: '80%',
    maxWidth: '1300px',
    margin: '20px auto',
  },
};

export default Homepage;
