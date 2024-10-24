import React, { useState, useEffect } from 'react';
import { Button, IconButton, Box, Snackbar, SnackbarContent } from '@mui/material';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust the path as necessary
import Apphead from './Apphead';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Cleaning() {
  const [selectedCategory, setSelectedCategory] = useState('cleaning-supplies');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { cartItems, addItemToCart, updateItemQuantity, removeItemFromCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  // Image slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://www.customhomegroup.com/wp-content/uploads/2017/08/deep-clean-your-home-cleaning-supplies.jpg',
    'https://maidsalamode.com/wp-content/uploads/2019/12/Let-the-best-cleaning-pros-in-Daphne-AL-handle-the-cleaning.jpg',
    'https://www.keckmedicine.org/wp-content/uploads/2021/11/Household-cleaning-products.jpg',
  ];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cleaning');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('API response is not an array:', response.data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleIncrement = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    updateItemQuantity(product.id, (cartItem ? cartItem.quantity : 0) + 1);
  };

  const handleDecrement = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      updateItemQuantity(product.id, cartItem.quantity - 1);
    } else {
      removeItemFromCart(product.id);
    }
  };

  const handleAddToCart = (product) => {
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      discountPrice: product.discountPrice,
      image: product.image,
      quantity: 1,
    });
    setSnackbarMessage(`${product.name} added to cart!`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Apphead />
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <IconButton onClick={() => navigate('/')} color="inherit">
          <ArrowBackIcon />
        </IconButton>
        <Box
          style={{
            ...styles.con,
            backgroundImage: `url(${images[currentImageIndex]})`,
            position: 'relative',
          }}
        >
          <h1
            style={{
              color: 'white',
              paddingLeft: '30px',
              textShadow: '3px 3px 4px black',
              fontFamily: 'Hobo Std',
              alignSelf: 'flex-start',
              marginTop: '5px',
            }}
          >
            "Sparkling Clean Solutions"
          </h1>
          <div style={styles.indicatorContainer}>
            {images.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.indicatorCircle,
                  backgroundColor: currentImageIndex === index ? 'white' : 'gray',
                }}
              />
            ))}
          </div>
        </Box>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <div style={{ width: '80%', paddingLeft: '20px' }}>
          <h3 style={{
            textAlign: 'center',
            color: 'green',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontFamily: 'Arial, sans-serif',
            fontSize: '2.5em',
            fontWeight: 'bold',
            padding: '10px 0',
            letterSpacing: '0px',
          }}>
            Cleaning Supplies
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {products.map((product) => {
              const cartItem = cartItems.find((item) => item.id === product.id);
              const inCart = cartItem ? cartItem.quantity > 0 : false;

              return (
                <div
                  key={product.id}
                  style={{
                    border: '1px solid lightgray',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '230px',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                  <h4>{product.name}</h4>
                  <p>Price:₹{product.discountPrice}</p>
                  <p>MRP:
                    <del>₹{product.price}</del>{' '}
                    <span style={{ color: 'green' }}>({product.discount})</span>
                  </p>
                  {!inCart ? (
                    <Button variant="contained" onClick={() => handleAddToCart(product)}>
                      ADD TO CART
                    </Button>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', gap: '5px' }}>
                      <Button variant="outlined" onClick={() => handleDecrement(product)}>
                        <RemoveIcon />
                      </Button>
                      <Button variant="outlined">
                        {cartItem.quantity}
                      </Button>
                      <Button variant="outlined" onClick={() => handleIncrement(product)}>
                        <AddIcon />
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <SnackbarContent
            style={{ backgroundColor: 'green' }}
            message={
              <span style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                <CheckCircleIcon style={{ marginRight: '8px', color: 'white' }} />
                {snackbarMessage}
              </span>
            }
            action={
              <Button color="inherit" onClick={handleCloseSnackbar}>
                Close
              </Button>
            }
          />
        </Snackbar>
      </div>
    </div>
  );
}

const styles = {
  con: {
    backgroundColor: 'lightblue',
    color: 'black',
    borderRadius: '8px',
    height: '400px',
    width: '1300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginLeft: '110px',
    margin: '59px',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
  },
  indicatorCircle: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'gray',
  },
};

export default Cleaning;
