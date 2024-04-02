'use client';

import Image from 'next/image';
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button, Avatar, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

// @TODO: make social links, profile image and QRCode link dynamic
const Whoami = ({
  title = 'João Marins',
  description = 'Full-Stack Engineer, Entrepreneur, Angel Investor and Open Source Maintainer',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/jgcmarins', username: '/jgcmarins' },
    { icon: <TwitterIcon />, href: 'https://twitter.com/jgcmarins', username: '@jgcmarins' },
    {
      icon: <LinkedInIcon />,
      href: 'https://linkedin.com/in/joao-marins',
      username: '/joao-marins',
    },
    {
      icon: <InstagramIcon />,
      href: 'https://instagram.com/joaogracinha',
      username: '@joaogracinha',
    },
    { icon: <LanguageIcon />, href: 'https://joaomarins.com', username: 'joaomarins.com' },
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
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4} alignItems='center' justifyContent='center'>
        <Grid item xs={12} sm={4} display='flex' justifyContent='center'>
          <Avatar
            src='/assets/profile.jpg'
            alt={title}
            sx={{
              width: {
                xs: 200,
                sm: 200,
                md: 350,
                lg: 350,
              },
              height: {
                xs: 200,
                sm: 200,
                md: 350,
                lg: 350,
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='h3' gutterBottom textAlign='center'>
            {title}
          </Typography>
          <Card>
            <CardContent>
              <Typography variant='body1' paragraph textAlign='center' fontSize={20}>
                {description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    startIcon={link.icon}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Typography fontSize={14} sx={{ textTransform: 'lowercase' }}>
                      {link.username}
                    </Typography>
                  </Button>
                ))}
              </Box>
              {!isMobile && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Image src='/assets/joaomarins.png' width={200} height={200} />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Whoami;
