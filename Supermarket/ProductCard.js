import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductCard = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle adding to cart and navigating to product view
  const handleAddToCartAndNavigate = (product) => {
    navigate('/productview', { state: { product } }); // Pass product details as state
  };

  // Example products (for dynamic rendering)
  const products = [
    {
      id: 'p201',
      name: 'Capsicum - Green, 1 kg',
      image: 'https://www.urbangroc.com/wp-content/uploads/2021/04/capsicum-01-03.jpg',
      rating: 4,
      ratingCount: 145,
      discount: '25% OFF',
      price: 549,
      discountPrice: 423.72,
    },
    {
      id: 'p202',
      name: 'Cucumber, 10 kg',
      image: 'https://img.freepik.com/premium-photo/cucumber-isolated-white-background_319514-5406.jpg',
      rating: 3.9,
      ratingCount: 13,
      discount: '30% OFF',
      price: 520,
      discountPrice: 490,
    },
    {
      id: 'p203',
      name: 'Coriander Leaves, 1 kg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/KE/FP/EX/29946815/lg9wabjwy9h0trtegmjaiezk5zw8ervkkwceanna-500x500.jpeg',
      rating: 4.5,
      ratingCount: 123,
      discount: '10% OFF',
      price: 84,
      discountPrice: 64.55,
    },
    {
      id: 'p204',
      name: 'Potato, 5 kg',
      image: 'https://t3.ftcdn.net/jpg/01/51/21/90/360_F_151219098_uZdemuk8HnmkEcCpueNxHexY71p34bSp.jpg',
      rating: 3.4,
      ratingCount: 100,
      discount: '24% OFF',
      price: 190,
      discountPrice: 144.4,
    },
  ];

  return (
    <>
      <div>
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
    
  }}
>
  My Smart Basket
</h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#D3D3D3', borderRadius: '20px', padding: '20px' }}>
          {products.map((product) => (
            <Card key={product.id} sx={{ maxWidth: 300, marginRight: 2, marginTop: 5, marginBottom: 10, bgcolor: '#f0f8ff' }}>
              <div style={{ position: 'relative' }}>
                {/* Discount Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '2px 8px',
                    fontSize: '12px',
                    borderRadius: '5px',
                  }}
                >
                  {product.discount}
                </div>
                
                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
              </div>
              
              {/* Product Info */}
              <CardContent>
                <Typography gutterBottom variant="h6">{product.name}</Typography>
                
                {/* Ratings */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary" style={{ marginRight: '4px' }}>{product.rating}</Typography>
                  <div style={{ color: '#FFD700', fontSize: '14px' }}>{'★'.repeat(Math.round(product.rating))}</div>
                  <Typography variant="body2" color="text.secondary" style={{ marginLeft: '6px' }}>
                    ({product.ratingCount} Ratings)
                  </Typography>
                </div>
                
                {/* Price Information */}
                <Typography variant="body2" style={{ marginTop: '10px' }}>MRP: <s>₹{product.price}</s></Typography>
                <Typography variant="body2" style={{ fontWeight: 'bold' }}>Price: ₹{product.discountPrice}</Typography>
                <Typography variant="body2">(inclusive of all taxes)</Typography>

                {/* Add to Cart Button */}
                <div style={{ marginTop: '10px' }}>
                  <Button variant="contained" onClick={() => handleAddToCartAndNavigate(product)}>ADD TO CART</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
