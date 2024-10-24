// PrivacyPolicy.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivacyPolicy = () => {
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
        Privacy Policy
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
        Welcome to SmartBasket! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our supermarket management system. By accessing or using SmartBasket, you agree to this Privacy Policy. If you do not agree with the terms, please do not use the system.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        1. Information We Collect
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        We may collect personal information such as your name, email address, phone number, and payment details when you create an account, place an order, or contact us. We also collect non-personal information, such as IP addresses and browsing behavior, to improve our services.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        2. How We Use Your Information
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        The information we collect is used to:
        <ul>
          <li>Process and manage your orders</li>
          <li>Improve our system and customer service</li>
          <li>Send promotional materials and updates</li>
          <li>Detect and prevent fraudulent activities</li>
        </ul>
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        3. Sharing Your Information
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        We do not sell or rent your personal information. However, we may share your information with third-party service providers for processing payments, delivering orders, or performing analytics. We ensure these third parties adhere to strict privacy standards.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        4. Data Security
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        We take appropriate measures to protect your data from unauthorized access, alteration, and disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        5. Your Privacy Choices
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        You may choose to limit the information you share with us or disable certain features in your account settings. Please note that restricting certain data may affect your use of the system's features.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        6. Changes to the Privacy Policy
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        SmartBasket reserves the right to update this Privacy Policy at any time. We will notify you of any changes via email or a notification within the system. Your continued use of the system following any changes indicates your acceptance of the revised policy.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        7. Contact Us
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: '20px', color: '#555' }}>
        If you have any questions about this Privacy Policy, please contact us at support@smartbasket.com.
      </Typography>

      <Typography variant="body2" sx={{ marginTop: '40px', color: '#777' }}>
        Last updated: [Date]
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
