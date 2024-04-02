import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';
import './global.css';
import theme from '@/components/theme';

export const metadata: Metadata = {
  title: 'João Marins',
  description: 'Beyond the Basics: Leveraging MongoDB for Fintech Disruption',
  openGraph: {
    images: ['/assets/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId='G-B5QXMQQQT7' />
    </html>
  );
}
