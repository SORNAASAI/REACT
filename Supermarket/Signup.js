/*import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));

        // Clear corresponding error for the changed field
        setErrors((prev) => ({
            ...prev,
            [id]: '', // Clear the error for the current field
        }));

        // Additional validation for phone number
        if (id === 'phoneNumber') {
            const digitsOnly = value.replace(/\D/g, ''); // Keep only digits
            setFormData((prevData) => ({ ...prevData, phoneNumber: digitsOnly }));

            // Validate phone number length
            if (digitsOnly.length > 10) {
                setErrors((prev) => ({
                    ...prev,
                    phoneNumber: 'Phone number must be exactly 10 digits long.',
                }));
            } else if (digitsOnly.length < 10 && digitsOnly.length > 0) {
                setErrors((prev) => ({
                    ...prev,
                    phoneNumber: 'Phone number must be exactly 10 digits long.',
                }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            firstName: formData.firstName ? '' : 'First Name is required',
            lastName: formData.lastName ? '' : 'Last Name is required',
            phoneNumber: formData.phoneNumber ? '' : 'Phone Number is required',
            location: formData.location ? '' : 'Location is required',
            email: formData.email ? '' : 'Email is required',
            password: formData.password ? '' : 'Password is required',
            confirmPassword: formData.confirmPassword ? '' : 'Confirm Password is required',
        };

        // Validate email
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        // Validate password
        if (formData.password && formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        // Validate confirm password
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Check if the phone number contains non-digit characters
        if (formData.phoneNumber && /[^0-9]/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number can only contain digits.';
        }

        setErrors(newErrors);

        // Check if there are any validation errors
        if (Object.values(newErrors).some(error => error)) {
            return; // If there are errors, do not proceed
        }

        // Handle successful form submission
        alert('Sign up is successful!');

        // Store user data to display after signup
        const userData = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phoneNumber,
        };

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        setSubmittedData({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            location: formData.location,
            email: formData.email,
        });

        // Reset form fields and errors
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setErrors({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div>
            <Box component="section">
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" style={styles.typo}>
                        Signup
                    </Typography>
                    <TextField
                        id="firstName"
                        label="First Name"
                        style={styles.text}
                        value={formData.firstName}
                        onChange={handleChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        autoComplete="off"
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        style={styles.text}
                        value={formData.lastName}
                        onChange={handleChange}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        autoComplete="off"
                    />
                    <br /><br />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        style={styles.textField}
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        autoComplete="off"
                    />
                    <br /><br />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        style={styles.text}
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        style={styles.text}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                    /><br/><br/>
                    <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        style={styles.textField}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                    />
                    <br /><br />
                    <TextField
                        id="location"
                        label="Location"
                        style={styles.textField}
                        value={formData.location}
                        onChange={handleChange}
                        error={!!errors.location}
                        helperText={errors.location}
                    />
                    <br /><br />
                    <Button type="submit" variant="contained" onClick={handleSubmit}>
                        Sign Up
                    </Button>
                    
                    {submittedData && (
                        <div style={styles.submittedData}>
                            <Typography variant="h6">Submitted Information:</Typography>
                            <Typography>First Name: {submittedData.firstName}</Typography>
                            <Typography>Last Name: {submittedData.lastName}</Typography>
                            <Typography>Phone Number: {submittedData.phoneNumber}</Typography>
                            <Typography>Location: {submittedData.location}</Typography>
                            <Typography>Email: {submittedData.email}</Typography>
                        </div>
                    )}
                </div>
            </Box>
        </div>
    );
}

const styles = {
    text: {
        padding: '10px',
        width: '200px'
    },
    textField: {
        width: '420px',
    },
    typo: {
        color: 'black',
        paddingBottom: '30px',
    },
    submittedData: {
        marginTop: '20px',
        textAlign: 'left',
        color: 'green',
    }
};

export default Signup;*/

import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prev) => ({
      ...prev,
      [id]: '', // Clear the error for the current field
    }));

    if (id === 'phoneNumber') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData((prevData) => ({ ...prevData, phoneNumber: digitsOnly }));

      if (digitsOnly.length !== 10 && digitsOnly.length > 0) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: 'Phone number must be exactly 10 digits long.',
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: formData.firstName ? '' : 'First Name is required',
      lastName: formData.lastName ? '' : 'Last Name is required',
      phoneNumber: formData.phoneNumber ? '' : 'Phone Number is required',
      location: formData.location ? '' : 'Location is required',
      email: formData.email ? '' : 'Email is required',
      password: formData.password ? '' : 'Password is required',
      confirmPassword: formData.confirmPassword ? '' : 'Confirm Password is required',
    };

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.phoneNumber) {
      if (/[^0-9]/.test(formData.phoneNumber)) {
          newErrors.phoneNumber = 'Phone number can only contain digits.';
      } else if (formData.phoneNumber === '0000000000') {
          newErrors.phoneNumber = 'Phone number cannot be all zeros.';
      }
  }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/person', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
        password:formData.password,
        email: formData.email,
      });

      alert('Sign up is successful!');
      setSubmittedData(response.data);

      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to sign up. Please try again later.');
    }
  };

  return (
    <div>
      <Box component="section">
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h1" style={styles.typo}>
            Signup
          </Typography>
          <TextField
            id="firstName"
            label="First Name"
            style={styles.text}
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            autoComplete="off"
          />
          <TextField
            id="lastName"
            label="Last Name"
            style={styles.text}
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            autoComplete="off"
          />
          <br /><br />
          <TextField
            id="email"
            label="Email"
            type="email"
            style={styles.textField}
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="off"
          />
          <br /><br />
          <TextField
            id="password"
            label="Password"
            type="password"
            style={styles.text}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            style={styles.text}
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <br /><br />
          <TextField
            id="phoneNumber"
            label="Phone Number"
            style={styles.textField}
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
          <br /><br />
          <TextField
            id="location"
            label="Location"
            style={styles.textField}
            value={formData.location}
            onChange={handleChange}
            error={!!errors.location}
            helperText={errors.location}
          />
          <br /><br />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>

          {submittedData && (
            <div style={styles.submittedData}>
              <Typography variant="h6">Submitted Information:</Typography>
              <Typography>First Name: {submittedData.firstName}</Typography>
              <Typography>Last Name: {submittedData.lastName}</Typography>
              <Typography>Phone Number: {submittedData.phoneNumber}</Typography>
              <Typography>Location: {submittedData.location}</Typography>
              <Typography>Email: {submittedData.email}</Typography>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
}

const styles = {
  text: {
    padding: '10px',
    width: '200px',
  },
  textField: {
    width: '420px',
  },
  typo: {
    color: 'black',
    paddingBottom: '30px',
  },
  submittedData: {
    marginTop: '20px',
    textAlign: 'left',
    color: 'green',
  },
};

export default Signup;
