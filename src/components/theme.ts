'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2979ff',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#fff',
      secondary: '#9e9e9e',
      tertiary: '#2979ff',
      quaternary: '#f50057',
    },
  },
});

export default theme;
