import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  Radio,
  FormControlLabel,
} from "@mui/material";

const MyPayment = () => {
  const [mobikwik, setMobikwik] = useState("");
  const [freecharge, setFreecharge] = useState("");
  const [amazonPay, setAmazonPay] = useState("");
  const [showAmazonDetails, setShowAmazonDetails] = useState(false); // State to show/hide Amazon Pay options
  const [defaultPayment, setDefaultPayment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    alert(`Mobikwik: ${mobikwik}, Freecharge: ${freecharge}, Amazon Pay: ${amazonPay}`);

    // Reset the fields after submission
    setMobikwik("");
    setFreecharge("");
    setAmazonPay("");
    setShowAmazonDetails(false); // Hide Amazon Pay details after submission
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Payment Methods
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Mobikwik TextField */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Mobikwik"
                variant="outlined"
                fullWidth
                value={mobikwik}
                onChange={(e) => setMobikwik(e.target.value)}
                required
              />
            </Grid>

            {/* Freecharge TextField */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Freecharge"
                variant="outlined"
                fullWidth
                value={freecharge}
                onChange={(e) => setFreecharge(e.target.value)}
                required
              />
            </Grid>

            {/* Amazon Pay TextField */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Amazon Pay"
                variant="outlined"
                fullWidth
                value={amazonPay}
                onChange={(e) => setAmazonPay(e.target.value)}
                onFocus={() => setShowAmazonDetails(true)} // Show additional options when focused
                onBlur={() => setShowAmazonDetails(false)} // Hide additional options when focus is lost
              />

              {/* Conditionally render the additional options when Amazon Pay is focused */}
              {showAmazonDetails && (
                <>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={defaultPayment}
                        onChange={(e) => setDefaultPayment(e.target.checked)}
                      />
                    }
                    label="Make this as my default payment option"
                  />

                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "20px" }}
                  >
                    Place Order & Pay
                  </Button>
                </>
              )}
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Save Payment Details
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default MyPayment;
