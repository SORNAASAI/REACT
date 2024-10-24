import React, { useState, useEffect } from 'react';
import { Button, IconButton, Box, Snackbar, SnackbarContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import { useCart } from './CartContext'; 
import Apphead from './Apphead';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import { useNavigate } from 'react-router-dom';

const sproutsdata = [
  {
    id:'s401',
    name: 'Sugar Palm Fruit',
    price: 43,
    discountPrice: 27,
    image: 'https://media.istockphoto.com/id/1145647664/photo/palmyra-palm-toddy-palm-or-sugar-palm-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=0k_VGqmRrt7u_sW-U3a9ZQbaWmoJBFtwwT32PTeZXk4=',
    discount: '25% OFF'
  },
  {
    id:'s402',
    name: 'Tender Coconut',
    price: 70,
    discountPrice: 50,
    image: 'https://t4.ftcdn.net/jpg/02/26/28/13/360_F_226281364_GhAtxY8Q3ibW9vnKjdtarBEY2fDxXB6e.jpg',
    discount: '25% OFF'
  },
  {
    id:'s403',
    name: 'Jackfruit - Peeled,250g',
    price: 60,
    discountPrice: 50,
    image: 'https://img.freepik.com/premium-photo/peeled-jackfruit-white-plate-isolated-white-background_127755-1683.jpg',
    discount: '15% OFF'
  },
  {
    id:'s404',
    name: 'Pomegranate - Peeled, 200 g',
    price: 60,
    discountPrice: 50,
    image: 'https://m.media-amazon.com/images/I/517oHZ30qrL.jpg',
    discount: '30% OFF'
  },
  {
    id:'s405',
    name: 'Sugarcane - Diced, 200 g',
    price: 60,
    discountPrice: 50,
    image: 'https://www.bigbasket.com/media/uploads/p/xxl/40018977-2_1-fresho-sugarcane-diced.jpg',
    discount: '30% OFF'
  }
];

function Sprouts() {
  const [quantities, setQuantities] = useState({});
  const [showButtons, setShowButtons] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { addItemToCart } = useCart();
  const navigate = useNavigate();

  // Background image slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    'https://fnsharp.com/cdn/shop/articles/fnsharp-fruit-cutting-guide_5000x.jpg?v=1623264689',
    'https://t4.ftcdn.net/jpg/07/08/68/31/360_F_708683198_K08AiNpIoqShD4munMhkRnL25q7g0lpg.jpg',
    'https://www.en.krishakjagat.org/wp-content/uploads/2023/10/sugarcane-1.jpg',
  ];


  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addItemToCart({ ...product, quantity });
    setSnackbarMessage(`${product.name} has been added to the cart!`);
    setSnackbarOpen(true);
    setShowButtons((prev) => ({
      ...prev,
      [product.id]: false,
    }));
    setQuantities((prev) => ({
      ...prev,
      [product.id]: 0,
    }));
  };
  const handleShow = (product) => {
    setShowButtons((prev) => ({
      ...prev,
      [product.id]: true, // Use product.id instead of product.name
    }));
  };

  
  const handleIncreaseQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantities((prev) => {
      const currentQuantity = prev[productId] || 0;
      if (currentQuantity > 1) {
        return { ...prev, [productId]: currentQuantity - 1 };
      } else {
        const newQuantities = { ...prev };
        delete newQuantities[productId];
        return newQuantities;
      }
    });
  };

  const calculateSavedAmount = (product) => {
    return product.price - product.discountPrice;
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
      </div>

      <Box style={{ ...styles.con, backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
        <h1 style={styles.heading}>Nature's hydrating treasure!</h1>
        <div style={styles.indicatorContainer}>
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                backgroundColor: index === currentImageIndex ? 'black' : 'lightgray',
              }}
            />
          ))}
        </div>
      </Box>

      
      {/* Align the "My Fruits" heading to the right */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '50px' }}>
        <h1
        style={{
          textAlign: 'left',
          marginLeft: '20px',
          color: 'green',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds a shadow effect
          fontFamily: 'Arial, sans-serif', // Choose a clean font
          fontSize: '2.5em', // Adjust the font size
          fontWeight: 'bold', // Make the text bold
          padding: '10px 0', // Add padding for spacing
          letterSpacing: '0px', // Add some letter spacing
        }}>Hydration</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {sproutsdata.map((product) => (
          <div
            key={product.id} // Use product.id as the key
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '280px',
              position: 'relative',
              margin: '10px', // Added margin to create space between cards and edges
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '200px',
                height: '180px',
                paddingLeft: '30px',
                objectFit: 'cover',
              }}
            />
            <div style={{ paddingLeft: '20px' }}>
              <h3>{product.name}</h3>
              <p >MRP:<del>{`₹ ${product.price}`}</del></p>
              <p style={{ color: 'green' }}>Price:{`₹ ${product.discountPrice} (${product.discount})`}</p>
              <p style={{ color: 'red' }}>{`You save: ₹ ${calculateSavedAmount(product)}`}</p>
            </div>
            {showButtons[product.id] ? (
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <IconButton onClick={() => handleDecreaseQuantity(product.id)}>
                  <RemoveIcon />
                </IconButton>
                <span style={{ margin: '0 10px' }}>
                  {quantities[product.id] || 0}
                </span>
                <IconButton onClick={() => handleIncreaseQuantity(product.id)}>
                  <AddIcon />
                </IconButton>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product)}
                  style={{ marginLeft: '10px' }}
                >
                  Confirm
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleShow(product)}
                style={{ marginTop: '10px', width: '100%' }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        ))}
      </div>




      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
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
  );
}

const styles = {
  con: {
    backgroundColor: 'lightblue',
    color: 'black',
    borderRadius: '8px',
    height: '350px',
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
    position: 'relative',
  },
  heading: {
    color: 'white',
    paddingLeft: '30px',
    textShadow: '3px 3px 4px black',
    fontFamily: 'Hobo Std',
    alignSelf: 'flex-start',
    marginTop: '5px',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  indicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
  },
};

export default Sprouts;
