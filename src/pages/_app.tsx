import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Inter } from 'next/font/google';
import createEmotionCache from '../utils/createEmotionCache';

// Load Inter globally via next/font to guarantee availability
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#91FF30', // Lime green
      contrastText: '#222c24',
    },
    secondary: {
      main: '#0F172A', // Dark slate
    },
    background: {
      default: '#f6ffed', // Light green background
    },
  },
  typography: {
    // Use the globally injected CSS variable for Inter
    fontFamily: 'var(--font-inter)',
    h1: {
      fontSize: '120px',
      fontWeight: 100,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          height: '60px',
          fontWeight: 'bold',
          fontSize: '18px',
          textTransform: 'none',
        },
      },
    },
  },
});

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Define the Inter CSS variable at :root so it applies to portals as well */}
        <GlobalStyles styles={{ ':root': { ['--font-inter' as any]: inter.style.fontFamily } }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
