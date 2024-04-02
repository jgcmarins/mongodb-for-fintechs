'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveImage from '@/components/ResponsiveImage';

const LedgerSQL = () => {
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
        Ledger SQL: Withdraw with Transaction
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          A very common problem in financial systems is the need to withdraw money from an account.
          <br />
          This operation is usually done in a transactional way, to ensure that the account balance
          is
          <br />
          updated correctly.
          <br />
        </Typography>
        <ResponsiveImage
          src={'/assets/ledger/transaction.png'}
          aspectRatio={'1124/726'}
          width={'75%'}
        />
        <Typography
          variant={'h4'}
          component={'h4'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          How can we solve this in MongoDB?
        </Typography>
      </Box>
    </Box>
  );
};

export default LedgerSQL;
