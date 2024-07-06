import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Container } from '@mui/material';

const FooterSection = () => {
  const cardData = [
    {
      text: 'Submit referrals easily via our website’s referral section.'
    },
    {
      text: 'Earn rewards once your referral joins an Accredian program.'
    },
    {
      text: 'Both parties receive a bonus 30 days after program enrollment.'
    }
  ];

  const cardStyle = {
    transition: 'transform 0.3s ease-in-out',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
  };

  return (
    <>
      <Box bgcolor="#f5f5f5" py={10} px={2} style={{ width: '100vw', position: 'relative', marginTop: '-2rem', left: 'calc(-50vw + 50%)'  }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom style={{ color: '#127ada', textAlign: 'center', marginBottom: '20px' }}>
            How do I refer?
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} mr={4} md={4}   key={index} className='ReferItems'>
                <Card
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <CardContent>
                    <Typography variant="body1">
                      {card.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box bgcolor="#4A90E2" py={15}  style={{ width: '100vw', position: 'absolute', left: 'calc(-50vw + 50%)', scrollX: 'disabl'}}>
        <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold' }}>
          Why You Should Refer?
        </Typography>
        <Typography variant="body1" style={{ color: 'white' }}>
          Enroll to our program to get insight about rewards of sharing our products!
        </Typography>
      </Box>
    </>
  );
};

export default FooterSection;
