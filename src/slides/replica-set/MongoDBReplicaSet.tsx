'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveImage from '@/components/ResponsiveImage';

const MongoDBReplicaSet = () => {
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
        MongoDB Replica Set
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant={'h6'}
          component={'h6'}
          textAlign='center'
          color='text.primary'
          sx={{ mt: 2, mb: 2 }}
        >
          There are 3 nodes in the cluster: 1 primary and 2 secondaries. The primary node is the
          only one
          <br />
          that can accept write operations. The secondaries replicate data and answer for read
          operations.
        </Typography>
        <ResponsiveImage
          src={'/assets/replica-set/mongo-replica-set.png'}
          aspectRatio={'807/724'}
          width={'60%'}
        />
      </Box>
    </Box>
  );
};

export default MongoDBReplicaSet;
