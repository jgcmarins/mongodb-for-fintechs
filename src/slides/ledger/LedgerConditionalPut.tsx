'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveImage from '@/components/ResponsiveImage';

const LedgerConditionalPut = () => {
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
        color='text.secondary'
      >
        Conditional Put
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          It&apos;s a data persistence mechanism that requires a condition to be met before the data
          is inserted.
          <br />
          MongoDB has $cond operator, but only for aggregation pipelines. However, we managed to
          <br />
          implement a solution in the application layer by adding a new <u>unique</u> field to the
          entry document.
        </Typography>
        <ResponsiveImage src={'/assets/ledger/idempotency.png'} aspectRatio={'1197/685'} />
      </Box>
    </Box>
  );
};

export default LedgerConditionalPut;
