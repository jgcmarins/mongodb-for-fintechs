'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const HiddenMongo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const items = [
    "Maintains a copy of the primary's data set",
    'Is invisible to client applications',
    'Dedicated to tasks such as reports and backups',
  ];

  return (
    <Box
      sx={{
        height: {
          xs: '75vh',
          sm: '75vh',
          md: '100vh',
          lg: '100vh',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h2'}
        component={isMobile ? 'h4' : 'h2'}
        textAlign='center'
        color='text.secondary'
      >
        Hidden Mongo
      </Typography>
      <Typography
        variant={isMobile ? 'h6' : 'h4'}
        component={isMobile ? 'h6' : 'h4'}
        textAlign='center'
        sx={{ m: 1 }}
      >
        The hidden mongo is just another node in the the replica set
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {items.map((item, index) => (
          <Typography
            key={item}
            variant={isMobile ? 'h5' : 'h4'}
            component={isMobile ? 'h5' : 'h4'}
            textAlign='center'
            color='text.primary'
            sx={{ mt: 2 }}
          >
            {`${index + 1}. ${item}`}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default HiddenMongo;
