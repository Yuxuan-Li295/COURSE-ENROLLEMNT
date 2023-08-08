import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import lostTouristsImg from '../Resources/Image/LostTourists.png';

function NoMatch() {
  const [hover, setHover] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff'
      }}
    >
      <img
        src={lostTouristsImg}
        alt="Error illustration"
        width={250}
        height={250}
        style={{ animation: 'float 30s infinite' }}
      />
      <Typography variant="h1" color="textPrimary" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Oh snap! Looks like you've taken a detour! We can't find the page you're searching for.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        style={{
          backgroundColor: '#1876D2',
          color: 'white',
          transform: hover ? 'scale(1.05)' : 'scale(1)'
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Back Home
      </Button>
    </Box>
  );
}

export default NoMatch;
