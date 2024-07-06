import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import './NavSection.css';
const NavSection = () => {
  return (
    <AppBar  position="scroll" style={{ top: '10px', boxShadow: 'none', backgroundColor: 'white', color: 'black', zIndex: '999' }}>
      <Toolbar className="navSectionBx">
        <Box display="flex" flexGrow={1} alignItems="center">
          <Box>
            <Typography variant="h6" noWrap style={{ color: '#127ada', fontWeight: 'bold', fontSize: '20px' }}>
              Accredian
            </Typography>
            <Typography variant="body2" color="textSecondary">
              credentials that matter
            </Typography>
          </Box>
          <Button variant="contained" color="primary" style={{ marginLeft: '20px', textTransform: 'none' }}>
            Courses
          </Button>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" style={{ marginRight: '20px', whiteSpace: 'nowrap'  }}>
            Refer & Earn
          </Typography>
          <Typography variant="body1" style={{ marginRight: '20px', whiteSpace: 'nowrap'  }}>
            Resources
          </Typography>
          <Typography variant="body1" style={{ marginRight: '20px', whiteSpace: 'nowrap'  }}>
            About Us
          </Typography>
          <Button color="inherit" style={{ marginRight: '20px', backgroundColor: '#bdbdbd', textTransform: 'none', whiteSpace: 'nowrap'  }}>
            Login
          </Button>
          {/* white space- no wrap button text will come in same like not in next */}
          <Button variant="contained" color="primary" style={{ textTransform: 'none', whiteSpace: 'nowrap' }}> 
            Try For Free
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavSection;
