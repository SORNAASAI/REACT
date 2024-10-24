// TermsAndConditions.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Box
      sx={{
        padding: '40px 20px',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        textAlign: 'left',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}
      >
        Terms and Conditions
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
        Welcome to SmartBasket! These terms and conditions outline the rules and regulations for the use of the SmartBasket Supermarket Management System. By accessing this system, we assume you accept these terms and conditions. Do not continue to use SmartBasket if you do not agree to all the terms and conditions stated on this page.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        1. User Accounts
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        To access certain features of SmartBasket, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities that occur under your account. Please notify us immediately of any unauthorized use of your account.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        2. Use of the System
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        The SmartBasket system is intended for personal and non-commercial use. You agree not to use the system in any way that may damage, disable, or overburden the system, or interfere with any other user's use of the system. You may not attempt to gain unauthorized access to any part of the system or to any other user accounts.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        3. Product Information and Pricing
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        While we strive to ensure that all product information and pricing displayed on SmartBasket is accurate, errors may occur. In the event of any inaccuracies, we reserve the right to correct them and update the information. Prices are subject to change without prior notice.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        4. Order Acceptance and Cancellation
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        SmartBasket reserves the right to refuse or cancel any orders for any reason, including the availability of products, errors in the description or price of the product, or any other issue. If your order is canceled after your payment has been processed, we will refund the amount paid.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        5. Limitation of Liability
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        SmartBasket shall not be liable for any damages resulting from the use of or inability to use the system, including any errors or omissions in the content. In no event shall SmartBasket's liability exceed the amount paid by you for the products in question.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        6. Changes to Terms and Conditions
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        SmartBasket reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the system following any changes indicates your acceptance of the new terms and conditions.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        7. Governing Law
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction. Any disputes related to these terms shall be resolved in the appropriate courts.
      </Typography>

      <Typography variant="body2" sx={{ marginTop: '40px', color: '#777' }}>
        Last updated: [Date]
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
