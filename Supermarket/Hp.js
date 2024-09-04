import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Loginpge from './Loginpge';
import Signup from './Signup';
import SimpleDialog from './SimpleDialog'; // Import SimpleDialog


function Homepage() {
  const [dialogOpen, setDialogOpen] = useState(null); // null, 'login', or 'signup'
  const [simpleDialogOpen, setSimpleDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleOpenDialog = (type) => {
    setDialogOpen(type);
  };

  const handleCloseDialog = () => {
    setDialogOpen(null);
  };

  const handleClickOpenSimpleDialog = () => {
    setSimpleDialogOpen(true);
  };

  const handleCloseSimpleDialog = (value) => {
    setSimpleDialogOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', gap: 4, paddingRight: '200px', paddingTop:'5px'}}>
              <ListItemButton component="a" href="#home">
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton component="a" href="#categories">
                <ListItemText primary="Categories" />
              </ListItemButton>
              <ListItemButton component="a" href="#product">
                <ListItemText primary="Product" />
              </ListItemButton>
              <ListItemButton component="a" href="#about">
                <ListItemText primary="About Us" />
              </ListItemButton>
              <ListItemButton component="a" href="#contact">
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </Box>
            <Box style={{ gap: 2, display: 'flex' }}>
              <ListItemButton>
                <SearchIcon />
              </ListItemButton>
              <ListItemButton>
                <ShoppingCartIcon />
              </ListItemButton>
              <ListItemButton>
                <FavoriteIcon />
              </ListItemButton>
              <ListItemButton onClick={handleClickOpenSimpleDialog}>
                <PersonIcon />
              </ListItemButton>
            </Box>
            <Box style={{ paddingLeft: '150px' }}>
              <Button color="inherit" onClick={() => handleOpenDialog('login')}>Login</Button>
              <Button color="inherit" onClick={() => handleOpenDialog('signup')}>Sign up</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      
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
      
      {/* Simple Dialog */}
      <SimpleDialog
        selectedValue={selectedValue}
        open={simpleDialogOpen}
        onClose={handleCloseSimpleDialog}
      />
      <Box style={styles.con}>
       <h1 style={{color:'Green',paddingLeft:'30px',textShadow: "3px 3px 4px black",fontFamily:'Hobo Std'}}>SMARTBASKET </h1>
      </Box>
      
      `<Box style={{ display: 'flex', paddingLeft: 120 }}>
        <Card sx={{ maxWidth: 400, marginRight: 2, marginTop: 5, marginBottom: 10 ,bgcolor:'#f0f8ff'}}>
          <CardActionArea>
            <CardMedia
              style={styles.cart1}
              component="img"
              height="200px"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv16mQSx3cF7qBs4FbJKowZc0BnvzdtAtFfQ&s"
              alt="CABBAGE"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               CABBAGE
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              fresho! Cabbage, 1 pc (approx. 450 to 700 g)
                  MRP:
                  ₹41.1
                  Price: ₹26.5
                  (₹26.5 / pc)
                  You Save:
                  36% OFF
                  (inclusive of all taxes)
              </Typography>
              <div style={styles.son}>
                <Button variant="contained">ADD TO CART</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        
        <Card sx={{ maxWidth: 400, marginRight: 2, marginTop: 5, marginBottom: 10 ,bgcolor:'#f0f8ff'}}>
          <CardActionArea>
            <CardMedia
              style={styles.cart2}
              component="img"
              height="200px"
              image="https://cdn.img.gen.in/assets/business/5587/portfolio/24114/5587_637265845637473796.jpg?rendered=true"
              alt="CARROT"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARROT
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              fresho! Carrot - Orange (Loose), 1 kg
                  MRP:
                  ₹131.51
                  Price: ₹82
                  (₹82 / kg)
                  You Save:
                  38% OFF
              </Typography>
              <div style={styles.son}>
                <Button variant="contained">ADD TO CART</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        
        <Card sx={{ maxWidth: 400, marginRight: 2, marginTop: 5, marginBottom: 10,bgcolor:'#f0f8ff' }}>
          <CardActionArea>
            <CardMedia
              style={styles.cart3}
              component="img"
              height="200px"
              image="https://www.shutterstock.com/image-photo/red-lentils-wood-bowl-isolated-260nw-1913919076.jpg"
              alt="DHAL"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DAL
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Tata Sampann Unpolished Toor Dal/Arhar Dal, 5 kg
                  4
                  31471 Ratings & 496 Reviews

                  MRP:
                  ₹1245
                  Price: ₹933.75
                  (₹186.75 / kg)
                  You Save:
                  25% OFF
                  (inclusive of all taxes)
              </Typography>
              <div style={styles.son}>
                <Button variant="contained">ADD TO CART</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
     

     
    </div>
  );
}

const styles = {
  con: {
    backgroundColor: 'lightblue',
    color: 'black',
    borderRadius: '8px',
    height: '350px',
    marginTop: '20px',
    width: '1300px',
    display: 'flex',
    marginLeft: '80px',
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/56/59/73/360_F_656597332_VsZignOcfl2Xp5dwtGVUiNfT7kA7rQyw.jpg")', // Replace with your image URL
    backgroundSize: 'cover', // Optional: Cover the entire box
    backgroundPosition: 'center', // Optional: Center the image
    backgroundRepeat: 'no-repeat'
  },
  son: {
    marginTop: '10px'
  },
  cart1: {
    width: '200px',
  marginLeft:'100px',marginTop:'10px'
  },
  cart2: {
    width: '200px',
    marginLeft: '100px',marginTop:'10px'
  },
  cart3: {
    width: '200px',
    marginLeft: '100px',marginTop:'10px'
  }
}

export default Homepage;
