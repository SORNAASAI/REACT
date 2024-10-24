/*import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; // For navigation
import { useCart } from './CartContext'; // Import your cart context

const PaymentPage = () => {
  const { cartItems } = useCart(); // Get cart items from context
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // Individual error states
  const [errors, setErrors] = useState({
    paymentMethod: '',
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    phoneNumber: '',
    email: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Clear previous errors
    setErrors({
      paymentMethod: '',
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      billingAddress: '',
      phoneNumber: '',
      email: '',
    });

    let hasError = false;

    // Validate required fields
    if (!paymentMethod) {
      setErrors((prev) => ({ ...prev, paymentMethod: 'Please select a payment method.' }));
      hasError = true;
    }
    if (!name) {
      setErrors((prev) => ({ ...prev, name: 'Please enter the name on the card.' }));
      hasError = true;
    }

    // Card Number validation
    if (!cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: 'Please enter your card number.' }));
      hasError = true;
    } else if (!/^\d+$/.test(cardNumber) || cardNumber.length < 16 || cardNumber.length > 19) {
      setErrors((prev) => ({ ...prev, cardNumber: 'Card number must be 16 to 19 digits long and contain only numbers.' }));
      hasError = true;
    }

    if (!expiryDate) {
      setErrors((prev) => ({ ...prev, expiryDate: 'Please enter the expiry date.' }));
      hasError = true;
    }

    // CVV validation
    if (!cvv) {
      setErrors((prev) => ({ ...prev, cvv: 'Please enter the CVV.' }));
      hasError = true;
    } else if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
      setErrors((prev) => ({ ...prev, cvv: 'CVV must be exactly 3 digits.' }));
      hasError = true;
    }

    if (!billingAddress) {
      setErrors((prev) => ({ ...prev, billingAddress: 'Please enter the billing address.' }));
      hasError = true;
    }

    // Phone Number validation
    if (!phoneNumber) {
      setErrors((prev) => ({ ...prev, phoneNumber: 'Please enter your phone number.' }));
      hasError = true;
    } else if (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== 10) {
      setErrors((prev) => ({ ...prev, phoneNumber: 'Phone number must be exactly 10 digits long and contain only numbers.' }));
      hasError = true;
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Please enter your email address.' }));
      hasError = true;
    }

    // If there are validation errors, return
    if (hasError) return;

    // Handle payment submission logic here
    alert('Payment submitted!');
  };

  // Calculate totals dynamically from cartItems
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );
  const originalAmount = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const savings = originalAmount - totalAmount;

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Box display="flex" alignItems="center" mb={2}>
        
        <IconButton onClick={handleBack} edge="start">
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" align="left" gutterBottom style={{ marginLeft: '10px' }}>
          Payment Page
        </Typography>
      </Box>

      <Grid container spacing={3}>
       
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Enter Payment Details
            </Typography>
            <form onSubmit={handlePaymentSubmit} noValidate>
              <FormControl fullWidth margin="normal">
                <InputLabel id="payment-method-label">Payment Method</InputLabel>
                <Select
                  labelId="payment-method-label"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <MenuItem value="credit-card">Credit Card</MenuItem>
                  <MenuItem value="debit-card">Debit Card</MenuItem>
                  <MenuItem value="net-banking">Net Banking</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                </Select>
                {errors.paymentMethod && (
                  <Typography variant="body2" color="error">{errors.paymentMethod}</Typography>
                )}
              </FormControl>

              <TextField
                label="Name on Card"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && (
                <Typography variant="body2" color="error">{errors.name}</Typography>
              )}

              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))} // Allow only digits
                required
                inputProps={{ maxLength: 19 }} // Max length is 19
              />
              {errors.cardNumber && (
                <Typography variant="body2" color="error">{errors.cardNumber}</Typography>
              )}

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Date (MM/YY)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                  {errors.expiryDate && (
                    <Typography variant="body2" color="error">{errors.expiryDate}</Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))} // Allow only digits
                    required
                    inputProps={{ maxLength: 3 }} // Max length is 3
                  />
                  {errors.cvv && (
                    <Typography variant="body2" color="error">{errors.cvv}</Typography>
                  )}
                </Grid>
              </Grid>

              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Allow only digits
                  setPhoneNumber(value);
                  if (value.length !== 10) {
                    setErrors((prev) => ({ ...prev, phoneNumber: 'Phone number must be exactly 10 digits long.' }));
                  } else {
                    setErrors((prev) => ({ ...prev, phoneNumber: '' })); // Clear error if valid
                  }
                }}
                required
                inputProps={{ maxLength: 10 }}
              />
              {errors.phoneNumber && (
                <Typography variant="body2" color="error">{errors.phoneNumber}</Typography>
              )}

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Billing Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    required
                  />
                  {errors.billingAddress && (
                    <Typography variant="body2" color="error">{errors.billingAddress}</Typography>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Shipping Address (if different)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                  />
                </Grid>
              </Grid>

              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
              {errors.email && (
                <Typography variant="body2" color="error">{errors.email}</Typography>
              )}

              <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                Submit Payment
              </Button>
            </form>
          </Paper>
        </Grid>

        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            {cartItems.map((item) => (
              <Box key={item.id} mb={2}>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body2">{item.quantity} x ${item.discountPrice.toFixed(2)}</Typography>
              </Box>
            ))}
            <Typography variant="h6" gutterBottom>
              Total Amount: ${totalAmount.toFixed(2)}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              You save: ${savings.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;
*/
// PaymentPage.js
// PaymentPage.js
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  Paper,
  IconButton,
  Divider
} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; // For navigation
import { useCart } from './CartContext'; // Import your cart context
import axios from 'axios';
const PaymentPage = () => {
  const { cartItems, addOrder } = useCart(); // Get cart items and addOrder function from context
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // Individual error states
  const [errors, setErrors] = useState({
    paymentMethod: '',
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    phoneNumber: '',
    email: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Clear previous errors
    setErrors({
      paymentMethod: '',
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      billingAddress: '',
      phoneNumber: '',
      email: '',
    });

    let hasError = false;

    // Validate required fields
    if (!paymentMethod) {
      setErrors((prev) => ({ ...prev, paymentMethod: 'Please select a payment method.' }));
      hasError = true;
    }
    if (!name) {
      setErrors((prev) => ({ ...prev, name: 'Please enter the name on the card.' }));
      hasError = true;
    }

    // Card Number validation
    if (!cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: 'Please enter your card number.' }));
      hasError = true;
    } else if (!/^\d+$/.test(cardNumber) || cardNumber.length < 16 || cardNumber.length > 19) {
      setErrors((prev) => ({
        ...prev,
        cardNumber: 'Card number must be 16 to 19 digits long and contain only numbers.',
      }));
      hasError = true;
    }

    if (!expiryDate) {
      setErrors((prev) => ({ ...prev, expiryDate: 'Please enter the expiry date.' }));
      hasError = true;
    } else {
      const [month, year] = expiryDate.split('/'); // Split the input into month and year
      const isValidFormat = /^\d{2}\/\d{2}$/.test(expiryDate);
      
      // Validate the format and month range
      if (!isValidFormat || month < 1 || month > 12) {
        setErrors((prev) => ({ ...prev, expiryDate: 'Expiry date must be in MM/YY format.' }));
        hasError = true;
      } else {
        const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
        const currentMonth = new Date().getMonth() + 1; // Get current month (0-based)
    
        // Check if the card is expired
        if (parseInt(year) < currentYear || 
            (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
          setErrors((prev) => ({ ...prev, expiryDate: 'The card is expired.' }));
          hasError = true;
        }
      }
    }
    
    
    // CVV validation
    if (!cvv) {
      setErrors((prev) => ({ ...prev, cvv: 'Please enter the CVV.' }));
      hasError = true;
    } else if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
      setErrors((prev) => ({ ...prev, cvv: 'CVV must be exactly 3 digits.' }));
      hasError = true;
    }

    if (!billingAddress) {
      setErrors((prev) => ({ ...prev, billingAddress: 'Please enter the billing address.' }));
      hasError = true;
    }

    // Phone Number validation
    if (!phoneNumber) {
      setErrors((prev) => ({ ...prev, phoneNumber: 'Please enter your phone number.' }));
      hasError = true;
  } else if (!/^\d+$/.test(phoneNumber) || phoneNumber.length !== 10) {
      setErrors((prev) => ({
          ...prev,
          phoneNumber: 'Phone number must be exactly 10 digits long and contain only numbers.',
      }));
      hasError = true;
  } else if (phoneNumber === '0000000000') {
      setErrors((prev) => ({
          ...prev,
          phoneNumber: 'Phone number cannot be all zeros.',
      }));
      hasError = true;
  }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prev) => ({ ...prev, email: 'Please enter your email address.' }));
      hasError = true;
    } else if (!emailPattern.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      hasError = true;
    }

    // If there are validation errors, return
    if (hasError) return;

    // Handle adding the order to the orders list
    const newOrder = {
      id: new Date().getTime(), // Unique order ID
      items: cartItems,
      totalAmount: cartItems.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0),
      paymentMethod,
      name,
      cardNumber: `**** **** **** ${cardNumber.slice(-4)}`, // Mask the card number
      billingAddress,
      shippingAddress,
      phoneNumber,
      email,
      date: new Date().toLocaleDateString(),
    };

    try {
      // POST request to your JSON server
       axios.post('http://localhost:3000/orders', newOrder); // Adjust the URL if needed
  
      // Handle adding the order to the orders list
      addOrder(newOrder);
  
      // Optional: Redirect to the MyOrder page
      alert('Payment submitted successfully! Your order has been placed.');
      navigate('/');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error processing your order. Please try again.');
    }
  };

  // Calculate totals dynamically from cartItems
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );
  const originalAmount = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const savings = originalAmount - totalAmount;

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={handleBack} edge="start">
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" align="left" gutterBottom style={{ marginLeft: '10px' }}>
          Payment Page
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Left section - Payment Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Enter Payment Details
            </Typography>
            <form onSubmit={handlePaymentSubmit} noValidate>
              <FormControl fullWidth margin="normal">
                <InputLabel id="payment-method-label">Payment Method</InputLabel>
                <Select
                  labelId="payment-method-label"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <MenuItem value="credit-card">Credit Card</MenuItem>
                  <MenuItem value="debit-card">Debit Card</MenuItem>
                  <MenuItem value="net-banking">Net Banking</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                </Select>
                {errors.paymentMethod && (
                  <Typography variant="body2" color="error">{errors.paymentMethod}</Typography>
                )}
              </FormControl>

              <TextField
                label="Name on Card"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && (
                <Typography variant="body2" color="error">{errors.name}</Typography>
              )}

              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))} // Allow only digits
                required
                inputProps={{ maxLength: 19 }} // Max length is 19
              />
              {errors.cardNumber && (
                <Typography variant="body2" color="error">{errors.cardNumber}</Typography>
              )}

              <Grid container spacing={2}>
              <Grid item xs={6}>
  <TextField
    label="Expiry Date (MM/YY)"
    variant="outlined"
    fullWidth
    margin="normal"
    value={expiryDate}
    onChange={(e) => {
      // Get the input value and format it to MM/YY
      const inputValue = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
      const formattedValue = inputValue.length > 2
        ? `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}`
        : inputValue.length > 1
        ? `${inputValue.slice(0, 2)}/`
        : inputValue;

      setExpiryDate(formattedValue);
    }}
    required
  />
  {errors.expiryDate && (
    <Typography variant="body2" color="error">{errors.expiryDate}</Typography>
  )}
</Grid>

                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))} // Allow only digits
                    required
                    inputProps={{ maxLength: 3 }} // Max length is 3
                  />
                  {errors.cvv && (
                    <Typography variant="body2" color="error">{errors.cvv}</Typography>
                  )}
                </Grid>
              </Grid>

              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Allow only digits
                  setPhoneNumber(value);
                }}
                required
                inputProps={{ maxLength: 10 }} // Max length is 10
              />
              {errors.phoneNumber && (
                <Typography variant="body2" color="error">{errors.phoneNumber}</Typography>
              )}

              <TextField
                label="Billing Address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                required
              />
              {errors.billingAddress && (
                <Typography variant="body2" color="error">{errors.billingAddress}</Typography>
              )}

              <TextField
                label="Shipping Address (if different)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />

              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <Typography variant="body2" color="error">{errors.email}</Typography>
              )}

              <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '20px' }}>
                Submit Payment
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Right section - Order Summary */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            {cartItems.map((item) => (
              <Box key={item.id} display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body1">{item.name} (x{item.quantity})</Typography>
                <Typography variant="body1">₹{(item.discountPrice * item.quantity).toFixed(2)}</Typography>
              </Box>
            ))}
            <Divider />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">₹{totalAmount.toFixed(2)}</Typography>
            </Box>
            
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;
