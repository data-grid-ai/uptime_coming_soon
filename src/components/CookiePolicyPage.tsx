import React from 'react';
import { Box, Typography, Container, Paper, IconButton } from '@mui/material';
import svgPaths from '../imports/svg-06sbh1iz2u';

function UptimeLogoCookie({ color = "dark", size = "medium" }: { color?: string; size?: string }) {
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

function CookieHeader({ onBackClick }: { onBackClick: () => void }) {
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
          <UptimeLogoCookie color="dark" size="medium" />
        </Box>
      </Box>
    </Box>
  );
}

function CookieContent() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1920px', px: 0 }}>
      {/* Title */}
      <Box sx={{ textAlign: 'center', mt: 8, mb: 6 }}>
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
          Cookie Policy
        </Typography>
      </Box>

      {/* Main content */}
      <Box sx={{ 
        px: { xs: 2, sm: 4, md: 8, lg: '130px' }, 
        mb: 8 
      }}>
        

        {/* What Are Cookies */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          What Are Cookies?
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 4,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            letterSpacing: '0.18px',
            fontFamily: 'var(--font-inter)',
          }}
        >
          Cookies are small text files that websites place on your device to remember information about you. They help us provide you with a better experience when you visit getuptime.ai.
        </Typography>

        {/* How Uptime Uses Cookies */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          How Uptime Uses Cookies
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          We use cookies to:<br/>
          • Keep you signed in to your account<br/>
          • Remember your preferences<br/>
          • Understand how you use our platform<br/>
          • Identify companies that could benefit from our CDL hiring solution<br/>
          • Improve our services and website performance
        </Typography>

        {/* Types of Cookies We Use */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            mt: 5,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Types of Cookies We Use
        </Typography>

        {/* Essential Cookies */}
        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '19px', md: '20px' },
            fontWeight: 600,
            color: '#000',
            mb: 2,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Essential Cookies
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
            fontWeight: 600,
            color: '#91FF30',
            backgroundColor: '#0F172A',
            display: 'inline-block',
            px: 2,
            py: 1,
            borderRadius: 1,
            mb: 2,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Always Active
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          These cookies are necessary for Uptime to function. They enable basic features like page navigation, secure areas access, and system security. You cannot opt out of these cookies if you want to use our platform.
        </Typography>
        
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          What they do:<br/>
          • Maintain your session when logged in<br/>
          • Ensure website security<br/>
          • Enable core platform functionality
        </Typography>

        {/* Analytics Cookies */}
        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '19px', md: '20px' },
            fontWeight: 600,
            color: '#000',
            mb: 2,
            mt: 4,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Analytics Cookies
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
            fontWeight: 600,
            color: '#0F172A',
            backgroundColor: '#91FF30',
            display: 'inline-block',
            px: 2,
            py: 1,
            borderRadius: 1,
            mb: 2,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Optional - You Control These
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          We use analytics tools to understand how visitors interact with Uptime, helping us improve the platform for fleets and CDL drivers.
        </Typography>

        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          <strong>Our Analytics Partners:</strong><br/>
          • <strong>Google Analytics</strong> - Tracks page views, session duration, and how you found us<br/>
          • <strong>Plausible Analytics</strong> - Privacy-focused analytics that doesn't use cookies but provides usage insights<br/><br/>
          
          <strong>What they help us understand:</strong><br/>
          • Which features are most useful for fleets and drivers<br/>
          • How quickly users can navigate our hiring process<br/>
          • Where we need to improve the user experience
        </Typography>

        {/* Marketing & Identification Cookies */}
        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '19px', md: '20px' },
            fontWeight: 600,
            color: '#000',
            mb: 2,
            mt: 4,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Marketing & Identification Cookies
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
            fontWeight: 600,
            color: '#0F172A',
            backgroundColor: '#91FF30',
            display: 'inline-block',
            px: 2,
            py: 1,
            borderRadius: 1,
            mb: 2,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Optional - You Control These
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          These help us identify companies visiting our site and measure our marketing effectiveness.
        </Typography>

        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 500,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          <strong>Our Marketing Partners:</strong><br/>
          • <strong>RB2B</strong> - Identifies companies visiting our website to help us understand which fleets are interested in Uptime<br/>
          • <strong>Google Tag Manager</strong> - Manages our website tags and tracking codes efficiently<br/>
          • <strong>Vector</strong> - Powers our customer support chat and helps us provide better assistance<br/><br/>
          
          <strong>What they do:</strong><br/>
          • Identify companies that might benefit from 48-hour CDL hiring<br/>
          • Measure which campaigns bring fleets and drivers to Uptime<br/>
          • Enable personalized support experiences
        </Typography>

        {/* Your Cookie Choices */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            mt: 5,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Your Cookie Choices
        </Typography>

        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '19px', md: '20px' },
            fontWeight: 600,
            color: '#000',
            mb: 2,
            fontFamily: 'var(--font-inter)',
          }}
        >
          How to Manage Cookies
        </Typography>
        
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          <strong>Through Our Cookie Banner</strong> Click "Manage Preferences" on our cookie banner to control which optional cookies you accept.<br/><br/>
          
          <strong>Through Your Browser</strong> Most browsers let you:<br/>
          • View what cookies are stored<br/>
          • Delete specific or all cookies<br/>
          • Block cookies from specific or all websites<br/>
          • Get warnings before cookies are stored<br/><br/>
          
          Note: Blocking essential cookies may prevent Uptime from working properly.
        </Typography>

        {/* Opt-Out Links */}
        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '19px', md: '20px' },
            fontWeight: 600,
            color: '#000',
            mb: 2,
            mt: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Opt-Out Links
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 4,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          You can also opt out directly through these services:<br/>
          • <strong>Google Analytics:</strong> tools.google.com/dlpage/gaoptout<br/>
          • <strong>RB2B:</strong> Contact privacy@rb2b.com<br/>
          • <strong>Google Services:</strong> myaccount.google.com/data-and-privacy
        </Typography>

        {/* Cookie Duration */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Cookie Duration
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 4,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          Different cookies stay on your device for different periods:<br/>
          • <strong>Session Cookies:</strong> Deleted when you close your browser<br/>
          • <strong>Persistent Cookies:</strong> Remain until their expiration date or until you delete them<br/>
          • <strong>Analytics cookies:</strong> Up to 2 years<br/>
          • <strong>Marketing cookies:</strong> Up to 1 year<br/>
          • <strong>Essential cookies:</strong> Vary based on function
        </Typography>

        {/* Updates */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Updates to This Policy
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 4,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          We may update this Cookie Policy as we add new features to Uptime or when regulations change. Check back periodically for updates.
        </Typography>

        {/* Questions */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Questions About Cookies?
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 4,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          If you have questions about how we use cookies or want to exercise your privacy rights:<br/>
          <strong>Email:</strong> contact@getuptime.ai<br/>
          <strong>Learn More:</strong> View our full Privacy Policy
        </Typography>

        {/* Why This Matters */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          Why This Matters for CDL Hiring
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 6,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
          }}
        >
          We use cookies to make Uptime better for both fleets and drivers. By understanding how carriers search for drivers and how drivers look for opportunities, we can continue delivering matches in 48 hours instead of weeks. Your privacy matters to us - you're in control of optional cookies while we focus on revolutionizing CDL hiring.
        </Typography>
      </Box>
    </Container>
  );
}

function CookieFooter({ onBackClick }: { onBackClick: () => void }) {
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
          <UptimeLogoCookie color="white" size="small" />
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

export default function CookiePolicyPage({ onBackClick }: { onBackClick: () => void }) {
  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <CookieHeader onBackClick={onBackClick} />
      <CookieContent />
      <CookieFooter onBackClick={onBackClick} />
    </Box>
  );
}