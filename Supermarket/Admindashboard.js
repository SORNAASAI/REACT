// Admindashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Admindashboard.css';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import OrderReport from './OrderReport';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Admindashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [30000, 20000, 25000, 40000, 35000, 30000, 45000],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.3)',
        fill: true,
      },
    ],
  };

  const ordersData = {
    labels: ['2011', '2012', '2013', '2014'],
    datasets: [
      {
        label: 'Orders',
        data: [10, 20, 30, 40],
        borderColor: 'gray',
        backgroundColor: 'rgba(128, 128, 128, 0.3)',
        fill: true,
      },
    ],
  };

  // Fetch users from the server
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
        setTotalUsers(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      });
  }, []);

  // Function to handle data button click
  const handleDataButtonClick = () => {
    navigate('/newuser'); // Navigate to Newuser component
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Admindashboard</h1>
        <input type="text" placeholder="Search html, users & orders" />
      </header>
      <button className="data-button" onClick={handleDataButtonClick}>
        Data
      </button>
      <div className="summary-cards">
        <div className="card">Total Orders: 117</div>
        <div className="card">Total Users: {totalUsers}</div>
        <div className="card">Total Tasks: 117</div>
        <div className="card">Total Drivers: 9</div>
      </div>
      <div className="main-content">
        <div className="left-panel">
          <OrderReport />
        </div>
        <div className="right-panel">
          <div className="revenue-chart">
            <h2>Revenue</h2>
            <Line data={revenueData} />
          </div>
          <div className="orders-chart">
            <h2>Orders</h2>
            <Line data={ordersData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
