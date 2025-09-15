import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import NextLink from 'next/link';
import svgPaths from '../imports/svg-06sbh1iz2u';

interface UptimeLogoProps {
  color?: string;
  size?: string;
}

function UptimeLogo({ color = "dark", size = "medium" }: UptimeLogoProps) {
  const pathData = size === "large" ? svgPaths.p18fc0780 : size === "medium" ? svgPaths.p18fc0780 : svgPaths.p3dd42f80;
  const pathData2 = size === "large" ? svgPaths.p292aa700 : size === "medium" ? svgPaths.p292aa700 : svgPaths.p32478780;
  const width = size === "large" ? 254 : size === "medium" ? 254 : 132;
  const height = size === "large" ? 120 : size === "medium" ? 120 : 62;
  
  return (
    <Box sx={{ display: 'inline-block' }}>
      <svg width={width} height={height} fill="none" viewBox={`0 0 ${width} ${height}`}>
        <g>
          <path 
            d={pathData} 
            fill={color === "white" ? "white" : "#0F172A"} 
          />
          <path 
            clipRule="evenodd" 
            d={pathData2} 
            fill="#91FF30" 
            fillRule="evenodd" 
          />
        </g>
      </svg>
    </Box>
  );
}

interface SharedFooterProps {
  onBackClick: () => void;
  logoColor?: string;
}

export default function SharedFooter({ onBackClick, logoColor = "white" }: SharedFooterProps) {
  return (
    <Paper
      sx={{
        backgroundColor: '#0F172A',
        color: 'white',
        minHeight: { xs: '80px', md: '100px' },
        px: { xs: 2, sm: 4, md: 0 },
        py: { xs: 2, md: 0 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <Box sx={{ 
        position: { xs: 'static', md: 'absolute' },
        left: { md: '310px' },
        top: { md: '19px' },
        cursor: 'pointer'
      }}
      onClick={onBackClick}
      >
        <Box sx={{ transform: { xs: 'scale(0.8)', md: 'scale(1)' } }}>
          <UptimeLogo color={logoColor} size="small" />
        </Box>
      </Box>
      
      <Box sx={{ 
        position: { xs: 'static', md: 'absolute' },
        right: { md: '310px' },
        top: { md: '41px' },
        textAlign: { xs: 'right', md: 'left' }
      }}>
          <Typography 
            sx={{ 
              fontSize: { xs: '12px', md: '14px' },
              fontWeight: 300,
              opacity: 0.5,
              fontFamily: 'var(--font-inter)',
              mb: 1
            }}
          >
            Copyright 2025 © <span style={{ fontWeight: 600 }}>uptime</span>
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-end', md: 'flex-start' } }}>
            <NextLink href="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                sx={{ 
                  opacity: 0.5, 
                  fontSize: '12px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  '&:hover': {
                    opacity: 0.7
                  }
                }}
              >
                Privacy Policy
              </Typography>
            </NextLink>
            
            <Box sx={{ mx: 1 }}>
              <Typography
                sx={{
                  opacity: 0.5,
                  fontSize: '12px',
                  color: 'inherit',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  userSelect: 'none',
                }}
              >
                •
              </Typography>
            </Box>
            
            <NextLink href="/cookie-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography 
                sx={{ 
                  opacity: 0.5, 
                  fontSize: '12px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 300,
                  '&:hover': {
                    opacity: 0.7
                  }
                }}
              >
                Cookie Policy
              </Typography>
            </NextLink>
          </Box>
      </Box>
    </Paper>
  );
}