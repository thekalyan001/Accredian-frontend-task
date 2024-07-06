import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import ModalContext from '../context/ModalContext';
import referimg from '../assets/referimg.png';

const ReferSection = () => {
  const { openModal } = React.useContext(ModalContext);

  return (
    <Grid container spacing={2} alignItems="center">
      {/* Left Section */}
      <Grid item xs={12} sm={6}>
        <div className="referSection">
          <Typography variant="h3" gutterBottom>
            Refer & Earn
          </Typography>
          <Typography variant="h6" gutterBottom>
            Refer a friend to our course and earn rewards!
          </Typography>
          <Button variant="contained" color="primary" onClick={openModal} sx={{marginBottom: '1rem'}}>
            Refer Now
          </Button>
        </div>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} sm={6}>
        <div className="referImgContainer">
          <img src={referimg} alt="Refer Image" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Grid>
    </Grid>
  );
};

export default ReferSection;
