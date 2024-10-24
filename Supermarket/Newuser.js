// Newuser.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Newuser.css';

function Newuser() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Active'
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch users from the server
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the users:', error);
      });
  }, []);

  // Function to delete a user
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error deleting the user:', error);
      });
  };

  // Function to handle the new user form submission
  const handleAddUser = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser({ name: '', email: '', registrationDate: new Date().toISOString().split('T')[0], status: 'Active' });
      })
      .catch(error => {
        console.error('Error adding the user:', error);
      });
  };

  // Handle input changes for new user
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Function to navigate back to the dashboard
  const handleBackClick = () => {
    navigate('/admindashboard'); // Navigate back to the Admindashboard
  };

  return (
    <div className="new-users">
      <button className="back-button" onClick={handleBackClick}>← Back</button> {/* Back button */}
      <h2>New Users</h2>

      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="registrationDate"
          value={newUser.registrationDate}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <div className="user-list">
        {users.map(user => (
          <div key={user.id}>
            {user.name} - {user.email} - {user.registrationDate}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newuser;
