import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Importing back arrow icon
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GiftCard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [giftCardPin, setGiftCardPin] = useState("");
  const [giftCardCode, setGiftCardCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the gift card submission logic here
    alert(`Gift Card PIN: ${giftCardPin}, Gift Card Code: ${giftCardCode}`);
    // Reset fields after submission
    setGiftCardPin("");
    setGiftCardCode("");
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom style={{ marginLeft: "10px" }}>
          Available Gift Cards
        </Typography>
      </Box>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Enter Your Gift Card Details
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Gift Card PIN"
                variant="outlined"
                fullWidth
                value={giftCardPin}
                onChange={(e) => setGiftCardPin(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Your Gift Card Code"
                variant="outlined"
                fullWidth
                value={giftCardCode}
                onChange={(e) => setGiftCardCode(e.target.value)}
                required
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default GiftCard;
