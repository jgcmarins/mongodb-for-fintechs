'use client';

import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const BackupService = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const items = [
    "It's a K8s CronJob",
    'Docker image that backups MongoDB to AWS S3',
    'https://github.com/woovibr/mongodb-backup-docker',
    'https://hub.docker.com/r/entria/mongodb-backup-docker',
  ];

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
        variant={isMobile ? 'h4' : 'h2'}
        component={isMobile ? 'h4' : 'h2'}
        textAlign='center'
        color='text.secondary'
      >
        Backup Service
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {items.map((item, index) => (
          <Typography
            key={item}
            variant={isMobile ? 'h5' : 'h4'}
            component={isMobile ? 'h5' : 'h4'}
            textAlign='left'
            color='text.primary'
            sx={{ mt: 2 }}
          >
            {`${index + 1}. ${item}`}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default BackupService;
