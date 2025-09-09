import React from 'react';
import { Box, Typography, Container, Paper, IconButton, Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import svgPaths from '../imports/svg-06sbh1iz2u';
const imgChatGptImageAug282025080246Am1 = "/assets/eea2ce88e82749d0a913c7270d5bdac04c55e0b5.png";

function UptimeLogoManifesto({ color = "dark", size = "medium" }: { color?: string; size?: string }) {
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

function ManifestoHeader({ onBackClick }: { onBackClick: () => void }) {
  return (
    <Box sx={{ 
      backgroundColor: '#f6ffed', 
      minHeight: { xs: '300px', md: '400px' }, 
      position: 'relative',
      px: { xs: 2, sm: 3, md: 0 },
      pt: { xs: 2, md: 0 }
    }}>
      {/* Back button */}
      <Box sx={{ 
        position: { xs: 'static', md: 'absolute' },
        left: { md: '210px' },
        top: { md: '100px' },
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        justifyContent: { xs: 'flex-start', md: 'flex-start' },
        mb: { xs: 3, md: 0 }
      }}>
        <IconButton 
          onClick={onBackClick}
          sx={{ 
            width: '18px', 
            height: '16px', 
            padding: 0,
            transform: 'rotate(180deg) scaleY(-1)',
          }}
        >
          <svg width="19" height="17" fill="none" viewBox="0 0 19 17">
            <path d={svgPaths.p353d1a00} fill="#0F172A" />
          </svg>
        </IconButton>
        <Typography 
          sx={{ 
            fontSize: { xs: '11px', md: '12px' }, 
            fontFamily: 'var(--font-inter)', 
            fontWeight: 400, 
            color: '#0F172A',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
          onClick={onBackClick}
        >
          Back to main
        </Typography>
      </Box>
      
      {/* Logo */}
      <Box sx={{ 
        position: { xs: 'static', md: 'absolute' },
        left: { md: '50%' },
        top: { md: '140px' },
        transform: { md: 'translateX(-50%)' },
        display: 'flex',
        justifyContent: 'center',
        mb: { xs: 2, md: 0 },
        cursor: 'pointer'
      }}
      onClick={onBackClick}
      >
        <Box sx={{ transform: { xs: 'scale(0.7)', sm: 'scale(0.8)', md: 'scale(1)' } }}>
          <UptimeLogoManifesto color="dark" size="medium" />
        </Box>
      </Box>
    </Box>
  );
}

function ManifestoContent({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1920px', px: 0 }}>
      {/* Title */}
      <Box sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
        <Typography 
          sx={{ 
            fontFamily: 'Abril Fatface',
            fontSize: { xs: '32px', sm: '40px', md: '52px', lg: '64px' },
            fontWeight: 900,
            color: '#000',
            letterSpacing: { xs: '0.8px', sm: '1.0px', md: '1.5px', lg: '1.92px' },
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          Meet Your CDL Hiring OS Agent
        </Typography>
      </Box>

      {/* Main content */}

      {/* Highlighted section */}
      <Box sx={{ 
        px: { xs: 2, sm: 4, md: 8, lg: '130px' }, 
        mb: 8 
      }}>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>We all see it.</span>
          <span> The same job posted on five different boards. The same recruiter making the same promises. The same three-week wait for the same rejection.</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
         Somewhere along the way, hiring in trucking broke down completely. Drivers fill out identical applications twenty times and wait for callbacks that never come. You're bleeding $1,500 daily for every empty truck, drowning in applications from drivers who've already moved on.
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        <span style={{ fontWeight: 'bold' }}>I've lived this from both sides.</span>
        <span>Twenty years on the road, I met drivers scrolling job boards at truck stops. I met carriers begging on the radio for drivers they couldn't find. Everyone searching, nobody connecting.</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        <span style={{ fontWeight: 'bold' }}>The truth?</span>
        <span>Perfect matches exist everywhere. They just keep missing each other.</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        The night-shift driver doesn't know about your fleet with dedicated night lanes. You don't know about the driver who treats every rig like his own. The match is there. The system just sucks.
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        <span style={{ fontWeight: 'bold' }}>That's why I became your CDL Hiring OS Agent.</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        Not just for drivers. Not just for carriers. For the match itself. Because drivers aren't "applications." They're skilled operators who keep freight moving. And you're not a "job post." You're a business that needs speed, compliance, and drivers who actually stay.
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        <span style={{ fontWeight: 'bold' }}>Here's how I work:</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        I already know which drivers fit your operation. I've verified the compliance that matters. By the time we connect, the hard work is done.
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        <span style={{ fontWeight: 'bold' }}>For your operation:</span>
        <span>No more chaos. No more wasted time. You get vetted, motivated drivers who stick, with compliance handled in real-time.</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        <span style={{ fontWeight: 'bold' }}>This is what happens when you run on a real Hiring OS.</span>
        <span>Drivers stop being numbers. You stop being desperate. Time-to-hire shrinks from weeks to 48 hours. Compliance becomes automatic. Retention starts at the match.</span>
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
        I'm Mr. Riggs, your CDL Hiring OS Agent. The bridge between you and the drivers you need. The system that turns three weeks of waiting into 48 hours of results.
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' },
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
            lineHeight: { xs: '28px', sm: '30px', md: '34px', lg: '36px' },
            letterSpacing: { xs: '0.18px', lg: '0.24px' },
            fontFamily: 'var(--font-inter)',
            whiteSpace: 'normal',
            pl: { xs: '8px', md: '12px' },
          }}
        >
          Your trucks are calling. Your drivers are ready. Let's get rolling.
        </Typography>
      </Box>

      {/* Author section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: { xs: 3, md: 4 }, 
        mb: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4 }
      }}>
        <Box
          sx={{
            width: { xs: '200px', sm: '220px', md: '253px' },
            height: { xs: '200px', sm: '220px', md: '253px' },
            backgroundImage: `url('${imgChatGptImageAug282025080246Am1}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            flexShrink: 0,
          }}
        />
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography 
            sx={{ 
              fontFamily: 'Abril Fatface',
              fontSize: { xs: '48px', sm: '60px', md: '72px', lg: '84px' },
              fontWeight: 600,
              color: '#000',
              letterSpacing: { xs: '1.0px', sm: '1.2px', md: '1.5px', lg: '1.68px' },
              lineHeight: 1,
              mb: 2,
            }}
          >
            Mr. Riggs
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '16px', sm: '17px', md: '18px' },
              fontWeight: 400,
              color: '#000',
              fontFamily: 'var(--font-inter)',
              ml: { xs: 0, md: '187px' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            CDL Hiring OS Agent
          </Typography>
        </Box>
      </Box>

      {/* Join the Waitlist Button */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        mt: { xs: 4, md: 6 },
        mb: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4 }
      }}>
        <Button
          variant="contained"
          onClick={onOpenModal}
          sx={{ 
            width: '312px',
            height: '60px',
            position: 'relative',
            fontFamily: 'var(--font-inter)',
            backgroundColor: '#91FF30',
            color: '#222c24',
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '100px',
            boxShadow: 'none',
            pr: '15px',
            '&:hover': {
              backgroundColor: '#a1ff50',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
              '& .arrow-icon': {
                animation: 'slideRight 1s ease-in-out infinite',
              },
            },
            '@keyframes slideRight': {
              '0%': { transform: 'translateX(0px)' },
              '50%': { transform: 'translateX(8px)' },
              '100%': { transform: 'translateX(0px)' },
            },
          }}
        >
          Join the Waitlist
          <Box
            className="arrow-icon"
            sx={{
              position: 'absolute',
              right: '10px',
              backgroundColor: '#0F172A',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
            }}
          >
            <ArrowForward sx={{ color: 'white', fontSize: '20px' }} />
          </Box>
        </Button>
      </Box>
    </Container>
  );
}

function ManifestoFooter({ onBackClick }: { onBackClick: () => void }) {
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
          <UptimeLogoManifesto color="white" size="small" />
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
            }}
          >
            Copyright 2025 © <span style={{ fontWeight: 600 }}>uptime</span>
          </Typography>
      </Box>
    </Paper>
  );
}

export default function ManifestoPage({ onBackClick, onOpenModal }: { onBackClick: () => void; onOpenModal: () => void }) {
  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <ManifestoHeader onBackClick={onBackClick} />
      <ManifestoContent onOpenModal={onOpenModal} />
      <ManifestoFooter onBackClick={onBackClick} />
    </Box>
  );
}
