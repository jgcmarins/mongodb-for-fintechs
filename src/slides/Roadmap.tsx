'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Roadmap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const roadmap = ['Setup & Infrastructure', 'High Availability MongoDB', "Show Don't Tell"];

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
        Roadmap
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {roadmap.map((topic, index) => (
          <Typography
            key={topic}
            variant={isMobile ? 'h5' : 'h4'}
            component={isMobile ? 'h5' : 'h4'}
            textAlign='center'
            color='text.primary'
            sx={{ mt: 2 }}
          >
            {`${index + 1}. ${topic}`}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Roadmap;
