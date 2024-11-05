import React, { useState } from 'react';
import { TextField, Button, Autocomplete } from '@mui/material';

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');
  const [message, setMessage] = useState('');

  const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello, ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          data-testid="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />

        <Autocomplete
          options={fruits}
          data-testid="autocomplete"
          renderInput={(params) => (
            <TextField {...params} label="Choose a fruit" margin="normal" />
          )}
          value={fruit}
          onChange={(event, newValue) => setFruit(newValue)}
          fullWidth
        />

        <Button
          type="submit"
          data-testid="button"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default FruitSurvey;
