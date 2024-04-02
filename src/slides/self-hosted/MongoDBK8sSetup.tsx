'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CodeSurfer } from '@/components/code';

const MongoDBK8sSetup = () => {
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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 1 }}
        >
          To host MongoDB in a Kubernetes cluster, we need to create a PersistentVolumeClaim, a
          Service, and a Deployment.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box>
            <Typography>mongodb1-storage.yaml</Typography>
            <CodeSurfer
              range={[1, 12]}
              fileName={'self-hosted/mongodb1-storage.yaml'}
              language={'yaml'}
            />
          </Box>
          <Box>
            <Typography>mongodb1-service.yaml</Typography>
            <CodeSurfer
              range={[1, 13]}
              fileName={'self-hosted/mongodb1-service.yaml'}
              language={'yaml'}
            />
          </Box>
          <Box>
            <Typography>mongodb1-deployment.yaml</Typography>
            <CodeSurfer
              range={[1, 7]}
              fileName={'self-hosted/mongodb1-deployment.yaml'}
              language={'yaml'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MongoDBK8sSetup;
