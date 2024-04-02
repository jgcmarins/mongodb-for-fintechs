'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CodeSurfer } from '@/components/code';

const LedgerEntry = () => {
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
        Ledger Entry
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            mx: 2,
          }}
        >
          <Box>
            <Typography>entryCreate</Typography>
            <CodeSurfer range={[11, 25]} fileName={'ledger/entry.ts'} />
          </Box>
          <Box>
            <Typography>entryIdempotencyIdGet</Typography>
            <CodeSurfer range={[1, 9]} fileName={'ledger/entry.ts'} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LedgerEntry;
