import React, { useState, useEffect } from 'react';
import { Button, IconButton, Box, Snackbar, SnackbarContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from './CartContext';
import Apphead from './Apphead';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const slideshowImages = [
  'https://oimat.no/media/ysif2amz/matfestivalen_bilder_marked-trd_jpg.jpg?cc=0,0.07727797001153403,0,0&format=webp&width=1300&height=650&rnd=133226735280170000',
  'https://media.istockphoto.com/id/1247073860/photo/healthy-fresh-organic-vegetables-in-a-crate-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_28r5elxratu0UWnold2uA2RF0f3Atvkv_kQoDfqG5Y=',
  'https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0=',
];

const vegetablesData = [
  { id:'v301',name: 'Broccoli', price: 80, discountPrice: 60, image: 'https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596527_vo9I8cKl20phDuIauIEfeQ2mWGw60Wjm.jpg', discount: '25% OFF' },
  {  id:'v302',name: 'Carrot', price: 40, discountPrice: 30, image: 'https://www.1zoom.me/big2/34/117357-yana.jpg', discount: '25% OFF' },
  {  id:'v303',name: 'Spinach', price: 30, discountPrice: 20, image: 'https://i.pinimg.com/736x/31/08/9b/31089b675c44846cc2db41db85155e41.jpg', discount: '33% OFF' },
  {  id:'v304',name: 'Bell Pepper', price: 60, discountPrice: 45, image: 'https://img.freepik.com/premium-photo/bell-peppers-isolated-white-background_198067-11.jpg', discount: '25% OFF' },
  {  id:'v305',name: 'Mushroom', price: 100, discountPrice: 75, image: 'https://media.istockphoto.com/id/183359979/photo/two-white-mushrooms-on-white-background.jpg?s=612x612&w=0&k=20&c=UVeuqO2B8KZ8uWO-1wP69xc0yFwB6HmOvcsqVbV88jo=', discount: '25% OFF' },
  {  id:'v306',name: 'Tomato', price: 20, discountPrice: 15, image: 'https://st2.depositphotos.com/1642482/46187/i/450/depositphotos_461876200-stock-photo-tomato-isolated-white-background-tomato.jpg', discount: '25% OFF' },
  {  id:'v307',name: 'Onion', price: 40, discountPrice: 35, image: 'https://img.freepik.com/premium-photo/red-whole-onion-isolated-white-background-fresh-whole-sliced-red-purple-onions_667286-3491.jpg', discount: '12% OFF' },
  {  id:'v308',name: 'Cabbage', price: 35, discountPrice: 25, image: 'https://img.freepik.com/premium-photo/cabbage-isolated-white-background_881868-1084.jpg', discount: '29% OFF' },
  {  id:'v309',name: 'Cauliflower', price: 50, discountPrice: 40, image: 'https://static.vecteezy.com/system/resources/previews/026/512/568/large_2x/cauliflower-isolated-on-white-background-ai-generated-photo.jpg', discount: '20% OFF' },
  {  id:'v300',name: 'Potato', price: 25, discountPrice: 20, image: 'https://t3.ftcdn.net/jpg/01/51/21/90/360_F_151219098_uZdemuk8HnmkEcCpueNxHexY71p34bSp.jpg', discount: '20% OFF' },
];


function Vegetables() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [showButtons, setShowButtons] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { addItemToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleShow = (product) => {
    setShowButtons((prev) => ({
      ...prev,
      [product.id]: true,
    }));
  };

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
      <div>
        <Box
          style={{
            ...styles.con,
            backgroundImage: `url(${slideshowImages[currentImageIndex]})`,
          }}
        >
          <h1 style={styles.heading}>Green goodness, every day!</h1>
          <div style={styles.circlesContainer}>
            {slideshowImages.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.circle,
                  backgroundColor: currentImageIndex === index ? 'blue' : 'gray',
                }}
              />
            ))}
          </div>
        </Box>
      </div>
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
        }}>My Vegetables</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {vegetablesData.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <div style={{ paddingLeft: '20px' }}>
              <h3>{product.name}</h3>
              <p >MRP:<del>{`₹ ${product.price}`}</del></p>
              <p style={{ color: 'green' }}>Price:{`₹ ${product.discountPrice} (${product.discount})`}</p>
              <p style={{ color: 'red' }}>{`You save: ₹ ${calculateSavedAmount(product)}`}</p>
            </div>
            {showButtons[product.id] ? (
              <div style={styles.quantityControls}>
                <IconButton onClick={() => handleDecreaseQuantity(product.id)}>
                  <RemoveIcon />
                </IconButton>
                <span style={{ margin: '0 10px' }}>{quantities[product.id] || 0}</span>
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
                style={styles.addButton}
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
  circlesContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '20px',
    width: '100%',
  },
  circle: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
  },
  productCard: {
    border: '1px solid #ccc',
    padding: '10px',
    width: '280px',
    position: 'relative',
    margin: '10px',
  },
  productImage: {
    width: '200px',
    height: '180px',
    paddingLeft: '30px',
    objectFit: 'cover',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  addButton: {
    marginTop: '10px',
    width: '100%',
  },
};

export default Vegetables;
