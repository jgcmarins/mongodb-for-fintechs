'use client';

import Image from 'next/image';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const References = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const links = [
    "Woovi's codebase",
    'https://dev.to/woovi/using-conditional-put-to-solve-mongodb-concurrency-issues-405a',
    'https://www.mongodb.com/docs/manual/core/replica-set-hidden-member/',
    'https://dev.to/search?q=woovi%20mongodb',
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
        variant={isMobile ? 'h6' : 'h4'}
        component={isMobile ? 'h6' : 'h4'}
        textAlign='center'
        color='text.secondary'
      >
        References
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {links.map((link, index) => (
          <Typography
            key={link}
            variant={isMobile ? 'h6' : 'h4'}
            component={isMobile ? 'h6' : 'h4'}
            textAlign='left'
            color='text.primary'
            sx={{ mt: 2 }}
          >
            {`${index + 1}. ${link}`}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default References;
