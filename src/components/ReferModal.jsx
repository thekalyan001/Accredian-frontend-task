import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import ModalContext from '../context/ModalContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ReferModal = () => {
  const { isOpen, closeModal } = useContext(ModalContext);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    referralMsg: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
 
    if (!isValidEmail(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Invalid referrer email';
    }
 
    if (!isValidEmail(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Invalid referee email';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // https://accredian-backend-task-0ubo.onrender.com
    try {
      // const response = await axios.post('http://localhost:5000/api/referme', formData);
      const response = await axios.post('https://accredian-backend-task-0ubo.onrender.com/api/referme', formData);

      if (response.status === 201) {
        alert("Referral Sent successfully!");
        setFormData({
          referrerName: '',
          referrerEmail: '',
          refereeName: '',
          refereeEmail: '',
          referralMsg: ''
        });
        closeModal();
      }
    } catch (error) {
      alert(`Error: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="referrer-name"
                label="Your Name"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="referrer-email"
                label="Your Email"
                name="referrerEmail"
                value={formData.referrerEmail}
                onChange={handleChange}
                autoComplete="email"
                error={!!errors.referrerEmail}
                helperText={errors.referrerEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="referee-name"
                label="Friend's Name"
                name="refereeName"
                value={formData.refereeName}
                onChange={handleChange}
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="referee-email"
                label="Friend's Email"
                name="refereeEmail"
                value={formData.refereeEmail}
                onChange={handleChange}
                autoComplete="email"
                error={!!errors.refereeEmail}
                helperText={errors.refereeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="referral-msg"
                label="Referral Message"
                name="referralMsg"
                value={formData.referralMsg}
                onChange={handleChange}
                autoComplete="text"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;
