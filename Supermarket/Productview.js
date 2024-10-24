// src/components/ProductView.js

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Apphead from './Apphead';
import { useCart } from './CartContext'; // Adjust the import path if necessary
import './Productview.css'; // Add custom CSS for styling

const Productview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { addItemToCart } = useCart(); // Use the cart context

  // Define pack sizes for the selected product
  const packSizes = {
    'p201': [
      { size: '1 kg', discountPrice: 64, price: 106.85, discount: '40%' },
      { size: '500 g', discountPrice: 21, price: 28.77, discount: '27%' },
    ],
    'p202': [
      { size: '1 kg', discountPrice: 490, price: 520, discount: '6%' },
      { size: '5 kg', discountPrice: 245, price: 260, discount: '6%' },
    ],
    'p203': [
      { size: '1 kg', discountPrice: 64.55, price: 84, discount: '23%' },
      { size: '500 g', discountPrice: 32.27, price: 42, discount: '23%' },
    ],
    'p204': [
      { size: '5 kg', discountPrice: 144.4, price: 190, discount: '24%' },
      { size: '2.5 kg', discountPrice: 72.2, price: 95, discount: '24%' },
    ],
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedPack, setSelectedPack] = useState(null);

  const handleAddToCart = () => {
    if (selectedPack && quantity > 0) {
      const uniqueId = `${product.id}-${selectedPack.size}`;
      const productToAdd = {
        id: uniqueId,
        name: product.name,
        image: product.image,
        size: selectedPack.size,
        discountPrice: selectedPack.discountPrice,
        price: selectedPack.price,
        quantity: quantity,
      };
      addItemToCart(productToAdd);
      setQuantity(1);
      setSelectedPack(null);
    }
  };

  const handleRemoveFromCart = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setSelectedPack(null);
    }
  };

  const handlePackSelection = (pack) => {
    setSelectedPack(pack);
    setQuantity(1);
  };

  const totalDiscountPrice = selectedPack ? (selectedPack.discountPrice * quantity).toFixed(2) : '0.00';
  const totalPrice = selectedPack ? (selectedPack.price * quantity).toFixed(2) : '0.00';
  const totalDiscount = selectedPack ? (selectedPack.price * quantity - selectedPack.discountPrice * quantity).toFixed(2) : '0.00';

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-view-container">
      <Apphead />
      <div className="product-content">
        <div className="product-image-container">
          <IconButton onClick={handleBackClick} className="back-button">
            <ArrowBackIcon />
          </IconButton>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-details">
          <h2>{product.name}</h2>
          <p>Selected Pack: {selectedPack ? selectedPack.size : 'Please select a pack size'}</p>
          <p>MRP: ₹{totalPrice}</p>
          <p>Price: ₹{totalDiscountPrice}</p>
          <p>You Save: ₹{totalDiscount}</p>
          <p>(inclusive of all taxes)</p>

          {selectedPack && (
            <div className="quantity-control">
              <Button variant="outlined" onClick={handleRemoveFromCart}>
                <RemoveIcon />
              </Button>
              <Button variant="outlined" className="quantity">{quantity}</Button>
              <Button variant="outlined" onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </Button>
              <Button variant="contained" color="primary" onClick={handleAddToCart} className="add-to-cart-button">
                ADD
              </Button>
            </div>
          )}

          <h3>Select Pack Size:</h3>
          <div className="pack-selection">
            {packSizes[product.id]?.map((pack, index) => (
              <Button
                key={index}
                variant={selectedPack?.size === pack.size ? 'contained' : 'outlined'}
                onClick={() => handlePackSelection(pack)}
                className="pack-button"
              >
                <div className="pack-info">
                  <span>{pack.size}</span>
                  <span>Price: ₹{pack.discountPrice}</span>
                  <span>{pack.discount} OFF</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productview;
