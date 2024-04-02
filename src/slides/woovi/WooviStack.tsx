'use client';

import Image from 'next/image';

import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const WooviStack = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const stack = [
    'Node.js',
    'Typescript',
    'React',
    'GraphQL',
    'Relay',
    'MongoDB',
    'Mongoose',
    'K8s',
    'Docker',
    'Metabase',
    'Jest',
    'Redis',
    'Elastic Search',
    'Kibana',
    'Argo CD',
    'Sentry',
  ];

  const StackGrid = () => {
    const totalItems = 16;
    const filledStack = [...stack];
    while (filledStack.length < totalItems) {
      filledStack.push('');
    }

    return (
      <Grid container spacing={2}>
        {filledStack.slice(0, totalItems).map((technology, index) => (
          <Grid item xs={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
              }}
            >
              <Typography variant='body1' fontSize={20}>
                {technology}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };

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
        Woovi Stack
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', m: 2 }}>
        <StackGrid />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Image src='/assets/woovi.png' width={50} height={50} />
        </Box>
      </Box>
    </Box>
  );
};

export default WooviStack;
