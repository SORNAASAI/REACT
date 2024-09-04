import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Signup() {
    // State to manage form values and errors
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

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
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

        setErrors(newErrors);

        // Check if there are any validation errors
        if (Object.values(newErrors).some(error => error)) {
            return; // If there are errors, do not proceed
        }

        // Handle successful form submission
        alert('Sign up is successful!');

        // Optionally, reset form fields and errors
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
                    <form onSubmit={handleSubmit}>
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
                        <Button type="submit" variant="contained">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Box>
        </div>
    );
}

const styles = {
    text:
    {
        padding:'10px',
        width:'200px'
    },
    textField: {
        width: '420px',
    },
    typo: {
        color: 'black',
        paddingBottom: '30px',
    },
};

export default Signup;
