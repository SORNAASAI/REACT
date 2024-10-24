import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  Toolbar,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useCart} from './CartContext';
import { useNavigate } from 'react-router-dom';

// Import your AdminLogin and Loginpge components
import AdminLogin from './AdminLogin';
import Loginpge from './Loginpge'; // Make sure to have this import

const Apphead = ({ handleOpenDialog }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer
  const [categoriesOpen, setCategoriesOpen] = useState(false); // State for subcategories
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [adminLoginDialogOpen, setAdminLoginDialogOpen] = useState(false);
  const [userLoginDialogOpen, setUserLoginDialogOpen] = useState(false); // State for user login dialog
  const [categoryMenuAnchor, setCategoryMenuAnchor] = useState(null);
const {cartItems}=useCart();
  const navigate = useNavigate();

  const handleClickOpenSimpleDialog = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCategoryClick = (event) => {
    setCategoryMenuAnchor(event.currentTarget);
  }
  const handleCloseCategoryMenu = () => {
    setCategoryMenuAnchor(null);
  };

  const handleFruitsClick = () => {
    navigate('/fruits'); // Navigate to the Fruits component
    handleCloseCategoryMenu(); // Close the category menu after clicking
  };

  const handleVegetablesClick = () => {
    navigate('/vegetables'); // Navigate to the Vegetables component
    handleCloseCategoryMenu(); // Close the category menu after clicking
  };

  const handleCleaningHouseholdClick = () => {
    navigate('/cleaning'); // Navigate to the Cleaning component
    handleCloseCategoryMenu(); // Close the category menu after clicking
  };

  const handleCutsAndSproutsClick = () => {
    navigate('/sprouts'); // Navigate to the CutsAndSprouts component
    handleCloseCategoryMenu(); // Close the category menu after clicking
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  
  const handleMyAccountClick = () => {
    navigate('/myaccount');
    handleClose();
  };

  const handleLoginDialogOpen = () => {
    setLoginDialogOpen(true);
  };
  
  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false);
  };

  const handleLoginChoice = (userType) => {
    if (userType === 'Admin') {
      setAdminLoginDialogOpen(true);
    } else if (userType === 'User') {
      setUserLoginDialogOpen(true); // Open user login dialog
    }
    handleLoginDialogClose(); // Close the main login dialog
  };

  const handleAdminLoginDialogClose = () => {
    setAdminLoginDialogOpen(false);
  };

  const handleUserLoginDialogClose = () => {
    setUserLoginDialogOpen(false); // Close user login dialog
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleCategoriesClick = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Drawer for Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem onClick={handleCategoriesClick}>
            <ListItemText primary="Categories" />
            {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }} onClick={() => navigate('/fruits')}>
                <ListItemText primary="Fruits" />
              </ListItem>
              <ListItem sx={{ pl: 4 }} onClick={() => navigate('/vegetables')}>
                <ListItemText primary="Vegetables" />
              </ListItem>
              <ListItem sx={{ pl: 4 }} onClick={() => navigate('/sprouts')}>
                <ListItemText primary="Cuts and Sprouts" />
              </ListItem>
              <ListItem sx={{ pl: 4 }} onClick={() => navigate('/cleaning')}>
                <ListItemText primary="Cleaning Products" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => navigate('/aboutus')}>
            <ListItemText primary="About us" />
          </ListItem>
          <ListItem button onClick={() => navigate('/contactus')}>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </Drawer>

      {/* AppBar for Header */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', padding: 0, width: '100%' }}>
          {/* Menu IconButton on the leftmost side */}
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ marginLeft: 0 }} // Ensure no margin is applied
          >
            <MenuIcon />
          </IconButton>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Button color="inherit" onClick={() => navigate('/')}>
              Home
            </Button>
            <ListItemButton onClick={handleCategoryClick}>
              <ListItemText primary="CATEGORIES" />
            </ListItemButton>

            <Menu
              anchorEl={categoryMenuAnchor}
              open={Boolean(categoryMenuAnchor)}
              onClose={handleCloseCategoryMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleFruitsClick}>Fruits</MenuItem>
              <MenuItem onClick={handleVegetablesClick}>Vegetables</MenuItem>
              <MenuItem onClick={handleCleaningHouseholdClick}>Cleaning and Household</MenuItem>
              <MenuItem onClick={handleCutsAndSproutsClick}>Cuts and Sprouts</MenuItem> {/* New Category */}
            </Menu>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" onClick={() => navigate('/aboutus')} component="a" href="#about">
                About Us
              </Button>
              <Button color="inherit" component="a" onClick={() => navigate('/contactus')} href="#contact">
                Contact Us
              </Button>
            </Box>
          </Box>

          {/* Search and Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={handleCartClick} color="inherit">
            <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton onClick={handleClickOpenSimpleDialog} color="inherit">
              <PersonIcon />
            </IconButton>

            {/* Dropdown Menu for Account */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleMyAccountClick}>My account</MenuItem>
              
            </Menu>
          </Box>

          <Box sx={{ paddingLeft: '20px', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" onClick={handleLoginDialogOpen}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleOpenDialog('signup')}>
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onClose={handleLoginDialogClose}>
        <DialogTitle>Login as</DialogTitle>
        <DialogContent>
          <Button onClick={() => handleLoginChoice('Admin')} color="primary">
            Admin
          </Button>
          <Button onClick={() => handleLoginChoice('User')} color="primary">
            User
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginDialogClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* User Login Dialog */}
      <Dialog open={userLoginDialogOpen} onClose={handleUserLoginDialogClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Loginpge /> {/* Render the Loginpge component here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUserLoginDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* AdminLogin Dialog */}
      <Dialog open={adminLoginDialogOpen} onClose={handleAdminLoginDialogClose} maxWidth="md" fullWidth>
        <DialogContent>
          <AdminLogin /> {/* Render the AdminLogin component here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdminLoginDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Apphead;
