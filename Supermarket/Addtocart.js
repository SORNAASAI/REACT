import React from 'react';
import { Typography, IconButton, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Import the cart context
import { useAuth } from './AuthContext'; // Import the AuthContext

function Addtocart() {
  const { cartItems, addItemToCart, removeItemFromCart, updateItemQuantity } = useCart(); // Get cart items and functions
  const { isLoggedIn } = useAuth(); // Get login status
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle adding quantity for a specific product
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Increment quantity for the existing item
      updateItemQuantity(item.id, existingItem.quantity + 1);
    } else {
      // Add a new item with quantity 1
      addItemToCart({ ...item, quantity: 1 });
    }
  };

  // Function to handle removing quantity for a specific product
  const handleRemoveFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      updateItemQuantity(item.id, existingItem.quantity - 1); // Decrease quantity by 1
    } else {
      removeItemFromCart(item.id); // Remove entire item if quantity is 1
    }
  };

  // Function to handle navigating back
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  // Function to handle navigating to the PaymentPage
  const handleCheckout = () => {
    navigate('/payment'); // Change '/payment' to the actual route for PaymentPage
  };

  // Calculate subtotal and total savings
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.discountPrice || 0) * (item.quantity || 1),
    0
  );
  const totalSavings = cartItems.reduce(
    (acc, item) => acc + ((item.price || 0) - (item.discountPrice || 0)) * (item.quantity || 1),
    0
  );

  // Conditional rendering based on login status
  if (!isLoggedIn) {
    return (
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Please log in to view your cart.
        </Typography><br />
        <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '100px', padding: '0 200px' }}>
      {/* Back Button */}
      <IconButton onClick={handleBackClick}>
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h5" style={{ margin: '20px 0' }}>
        Your Basket
      </Typography>

      {/* Cart Summary */}
      <div
        style={{
          backgroundColor: 'grey',
          width: '100%',
          height: '150px',
          borderRadius: '15px',
          color: 'white',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p>
            Subtotal ({cartItems.length} item{cartItems.length > 1 ? 's' : ''}): ₹{totalPrice.toFixed(2)}
          </p>
          <p>
            Savings: ₹{totalSavings.toFixed(2)}
          </p>
        </div>
        <Button variant="contained" color="error" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
      <br />

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id} // Use item.id instead of index for better performance and uniqueness
            style={{
              backgroundColor: 'white',
              border: '2px solid black',
              width: '100%',
              height: '250px',
              borderRadius: '15px',
              color: 'black',
              position: 'relative',
              marginBottom: '20px',
              display: 'flex',
              padding: '20px',
              alignItems: 'center',
            }}
          >
            {/* Product Image */}
            <img
              src={item.image} // Ensure that image property exists in cartItems
              alt={item.name}
              style={{ width: '100px', height: '100px', marginRight: '20px' }}
            />

            {/* Product Details */}
            <div style={{ flexGrow: 1 }}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Price:</strong> ₹{(item.discountPrice || 0).toFixed(2)}</p>
              <p><strong>Original Price:</strong> ₹{(item.price || 0).toFixed(2)}</p>
            </div>

            {/* Add/Remove Buttons with Quantity Heading */}
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ marginBottom: '30px', paddingRight: '200px', textAlign: 'center' }}><strong>Quantity</strong></span><br/>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '130px', marginRight: '200px' }}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button variant="outlined" color="error" style={{ margin: '0 5px' }} >
                    {item.quantity || 1} {/* Ensure quantity is valid */}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleAddToCart(item)}
                  >
                    <AddIcon />
                  </Button>
                </div>
              </div>
            </div>

            {/* Display Savings for this item */}
            <div style={{ position: 'absolute', right: '20px', top: '20px', textAlign: 'right' }}>
              <p><strong>Subtotal</strong></p><br/>
              <p style={{ marginLeft: '20px' }}>
                ₹{((item.discountPrice || 0) * (item.quantity || 1)).toFixed(2)}
              </p>
              <p>
                Saved: ₹{(((item.price || 0) - (item.discountPrice || 0)) * (item.quantity || 1)).toFixed(2)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Addtocart;
