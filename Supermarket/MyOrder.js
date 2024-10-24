// MyOrder.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, Box } from '@mui/material';

const MyOrder = () => {
  const [orders, setOrders] = useState([]); // State to store orders

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders'); // Fetch orders from JSON server
        setOrders(response.data); // Set orders to state
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders(); // Call the function to fetch orders
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        My Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography variant="body1">No orders placed yet.</Typography>
      ) : (
        orders.map((order) => (
          <Paper key={order.id} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h6">Order ID: {order.id}</Typography>
            <Typography variant="body1">Date: {order.date}</Typography>
            <Typography variant="body1">Total Amount: ₹{order.totalAmount.toFixed(2)}</Typography>
            <Typography variant="body1">Payment Method: {order.paymentMethod}</Typography>

            <Box mt={2}>
              <Typography variant="subtitle1">Items:</Typography>
              {order.items.map((item) => (
                <Typography key={item.id} variant="body2">
                  {item.name} - {item.quantity} x ₹{item.discountPrice.toFixed(2)}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))
      )}
    </Container>
  );
};

export default MyOrder;
