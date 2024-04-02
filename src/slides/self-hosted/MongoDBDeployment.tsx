'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CodeSurfer } from '@/components/code';

const MongoDBDeployment = () => {
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
        Self Hosted MongoDB with Kubernetes
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 1 }}
        >
          mongodb1-deployment.yaml
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            mx: 1,
          }}
        >
          <CodeSurfer
            range={[1, 14]}
            fileName={'self-hosted/mongodb1-deployment.yaml'}
            language={'yaml'}
          />
          <CodeSurfer
            range={[15, 29]}
            fileName={'self-hosted/mongodb1-deployment.yaml'}
            language={'yaml'}
          />
          <CodeSurfer
            range={[30, 44]}
            fileName={'self-hosted/mongodb1-deployment.yaml'}
            language={'yaml'}
          />
          <CodeSurfer
            range={[45, 57]}
            fileName={'self-hosted/mongodb1-deployment.yaml'}
            language={'yaml'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MongoDBDeployment;
