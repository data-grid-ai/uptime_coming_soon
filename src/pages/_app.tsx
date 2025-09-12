import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
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
    <>
      <Script id="vector-script" strategy="afterInteractive">
        {`
          !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
          vector.load("7d3dab29-b8eb-4639-b2e7-8cdc36700e0a");
        `}
      </Script>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Define the Inter CSS variable at :root so it applies to portals as well */}
          <GlobalStyles styles={{ ':root': { ['--font-inter' as any]: inter.style.fontFamily } }} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
