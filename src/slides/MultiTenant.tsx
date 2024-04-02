'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CodeSurfer } from '@/components/code';

const MultiTenant = () => {
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
        Multi Tenant
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          In Woovi every data belongs to a company, making it a required field in most of
          <br />
          the queries. That means we need to add the company field to almost all documents.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box>
              <Typography>UserModel.ts</Typography>
              <CodeSurfer range={[8, 24]} fileName={'multi-tenant/UserModel.ts'} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MultiTenant;
