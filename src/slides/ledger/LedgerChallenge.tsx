'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const LedgerChallenge = () => {
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
        Ledger Challenge: Withdraw
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h4'}
          component={'h4'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          How a ledger system can guarantee that a withdraw operation executed in parallel will not
          result in a negative balance?
        </Typography>
        <Typography
          variant={'h4'}
          component={'h4'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          How a ledger system can guarantee that a withdraw operation will not exceed the account
          balance?
        </Typography>
      </Box>
    </Box>
  );
};

export default LedgerChallenge;
