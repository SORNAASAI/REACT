// OrderReport.js
import React from 'react';
import './OrderReport.css';

const products = [
  { id: 8, name: 'Strawberry', price: 200, discountPrice: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfTC-TfIpQfOydWMXeU2CHsJC_ULzcjQL2A&s', discount: '25% OFF' },
  { id: 5, name: 'Grapes', price: 150, discountPrice: 100, image: 'https://media.istockphoto.com/id/489520104/tr/foto%C4%9Fraf/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=665OsfnZNdOjuldPeG8jAt6Gt-2tWKBBfbQXoP6oR-E=', discount: '33% OFF' },
  { id: 'c301', name: 'Sugar Palm Fruit', price: 43, discountPrice: 27, image: 'https://media.istockphoto.com/id/1145647664/photo/palmyra-palm-toddy-palm-or-sugar-palm-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=0k_VGqmRrt7u_sW-U3a9ZQbaWmoJBFtwwT32PTeZXk4=', discount: '25% OFF' },
  { id: 108, name: 'Cabbage', price: 35, discountPrice: 25, image: 'https://img.freepik.com/premium-photo/cabbage-isolated-white-background_881868-1084.jpg', discount: '29% OFF' },
  { id: 109, name: 'Cauliflower', price: 50, discountPrice: 40, image: 'https://static.vecteezy.com/system/resources/previews/026/512/568/large_2x/cauliflower-isolated-on-white-background-ai-generated-photo.jpg', discount: '20% OFF' },
  { id: '05a4', name: 'Glass Cleaner', price: 100, discountPrice: 75, image: 'https://m.media-amazon.com/images/I/51hH19pF8BL.jpg', discount: '25% OFF' },
  { id: '59f6', name: 'Bathroom Cleaner', price: 120, discountPrice: 90, image: 'https://www.bigbasket.com/media/uploads/p/l/1208844-2_6-harpic-bathroom-cleaner-liquid-lemon-1-l-toilet-cleaner-bleach-white-shine-500-ml.jpg', discount: '25% OFF' }
];

const OrderReport = () => {
  return (
    <div className="order-report">
      <h2>Order Report for the Last Few Months</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">Original Price:<del> ₹{product.price}</del></p>
              <p className="discount-price">Discount Price: ₹{product.discountPrice}</p>
              <p className="discount">{product.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderReport;
