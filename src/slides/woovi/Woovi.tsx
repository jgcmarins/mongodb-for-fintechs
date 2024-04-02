'use client';

import Image from 'next/image';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Woovi = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        variant={isMobile ? 'h5' : 'h3'}
        component={isMobile ? 'h5' : 'h3'}
        textAlign='center'
      >
        Disclaimer: this presentation aims to showcase our journey at{' '}
        <a
          href='https://woovi.com'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          Woovi
        </a>
        , highlighting how we leverage MongoDB to rapidly ship software at scale.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Image src='/assets/woovi.png' width={200} height={200} />
        </Box>
      </Box>
    </Box>
  );
};

export default Woovi;
