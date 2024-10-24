// src/components/LoginDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const LoginDialog = ({ open, onClose, onAdminClick, onUserClick }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Login Type</DialogTitle>
      <DialogContent>
        <p>Please choose your login type:</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAdminClick} color="primary">
          Admin
        </Button>
        <Button onClick={onUserClick} color="primary">
          User
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
