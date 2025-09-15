import React from 'react';
import { Box, Typography, Container, Paper, IconButton, Link } from '@mui/material';
import NextLink from 'next/link';
import svgPaths from '../imports/svg-06sbh1iz2u';
import SharedFooter from './SharedFooter';

function UptimeLogoPrivacy({ color = "dark", size = "medium" }: { color?: string; size?: string }) {
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

function PrivacyHeader({ onBackClick }: { onBackClick: () => void }) {
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
          <UptimeLogoPrivacy color="dark" size="medium" />
        </Box>
      </Box>
      
      {/* Tagline */}
      <Box sx={{ 
        position: { xs: 'static', md: 'absolute' },
        left: { md: '50%' },
        top: { md: '260px' },
        transform: { md: 'translateX(-50%)' },
        display: 'flex',
        justifyContent: 'center',
        mb: { xs: 1, md: 0 }
      }}>
        <Typography variant="subtitle1" sx={{ 
          textAlign: 'center', 
          color: '#000',
          fontSize: { xs: '14px', sm: '16px' }
        }}>
          The CDL Hiring Operating System
        </Typography>
      </Box>
    </Box>
  );
}

function PrivacyContent() {
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
          Privacy Policy
        </Typography>
      </Box>

      {/* Main content */}
      <Box sx={{ 
        px: { xs: 2, sm: 4, md: 8, lg: '130px' }, 
        mb: 8 
      }}>
        
        {/* Section 1 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          1. Introduction
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
          Welcome to Uptime ("we," "our," or "us"). We're the CDL Hiring OS connecting trucking fleets with drivers in 48 hours. This Privacy Policy explains how we collect, use, and protect information when you visit getuptime.ai or use our services.
        </Typography>

        {/* Section 2 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          2. Information We Collect
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
          Information You Provide
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
          • <strong>Waitlist Information:</strong> Name, email, company name, fleet size, phone number<br/>
          • <strong>Account Information:</strong> Login credentials, profile details<br/>
          • <strong>Fleet Information:</strong> DOT number, company details, hiring requirements<br/>
          • <strong>Driver Information:</strong> CDL details, employment history, compliance documents
        </Typography>

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
          Information Collected Automatically
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
          We use various technologies to collect information automatically:
        </Typography>

        <Typography 
          sx={{ 
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: 400,
            color: '#000',
            mb: 2,
            lineHeight: { xs: '26px', sm: '28px', md: '30px' },
            fontFamily: 'var(--font-inter)',
            ml: 2
          }}
        >
          <strong>Analytics Tools:</strong><br/>
          • Google Analytics: Page views, session duration, traffic sources<br/>
          • Plausible Analytics: Privacy-focused website usage statistics<br/>
          • Google Tag Manager: Managing website tags and tracking codes<br/><br/>
          
          <strong>Identification Tools:</strong><br/>
          • RB2B: Identifies companies visiting our website (B2B visitor identification)<br/>
          • Vector: Customer support interactions and chat data<br/><br/>
          
          <strong>Technical Information:</strong><br/>
          • IP address and location (city/state level)<br/>
          • Browser type and version<br/>
          • Device information<br/>
          • Pages visited and time spent
        </Typography>

        {/* Section 3 */}
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
          3. How We Use Your Information
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
          We use collected information to:<br/>
          • Process waitlist signups and notify you about launch<br/>
          • Match fleets with qualified CDL drivers<br/>
          • Verify compliance and documentation<br/>
          • Improve our platform and user experience<br/>
          • Send relevant updates about our services<br/>
          • Provide customer support<br/>
          • Analyze usage patterns to enhance our CDL Hiring OS
        </Typography>

        {/* Section 4 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          4. Cookies and Tracking Technologies
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
          Types of Cookies We Use
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
          <strong>Essential Cookies (Always Active)</strong><br/>
          • Required for website functionality<br/>
          • Session management and security<br/><br/>
          
          <strong>Analytics Cookies (Optional)</strong><br/>
          • Google Analytics: Understanding user behavior<br/>
          • Plausible: Privacy-focused analytics<br/><br/>
          
          <strong>Marketing Cookies (Optional)</strong><br/>
          • RB2B: B2B visitor identification<br/>
          • Google Tag Manager: Marketing campaign tracking<br/><br/>
          
          You can manage cookie preferences through our cookie consent banner or browser settings.
        </Typography>

        {/* Section 5 */}
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
          5. Information Sharing
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
          We do not sell your personal information. We share information only:<br/>
          • With your consent<br/>
          • With service providers who assist our operations<br/>
          • To comply with legal obligations<br/>
          • To protect rights, safety, and security<br/>
          • With fleets/drivers for matching purposes (with consent)
        </Typography>

        {/* Section 6 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          6. Data Security
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
          We implement industry-standard security measures including:<br/>
          • Encryption in transit and at rest<br/>
          • Regular security audits<br/>
          • Access controls and authentication<br/>
          • Secure data centers<br/>
          • Compliance monitoring
        </Typography>

        {/* Section 7 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          7. Your Rights
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
          You have the right to:<br/>
          • Access your personal information<br/>
          • Correct inaccurate data<br/>
          • Request deletion of your data<br/>
          • Opt-out of marketing communications<br/>
          • Withdraw consent for optional cookies<br/>
          • Request data portability
        </Typography>

        {/* Section 8 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          8. California Privacy Rights (CCPA)
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
          California residents have additional rights including:<br/>
          • Right to know what information we collect<br/>
          • Right to delete personal information<br/>
          • Right to opt-out of data sales (we don't sell data)<br/>
          • Right to non-discrimination
        </Typography>

        {/* Section 9 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          9. Data Retention
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
          We retain information for as long as necessary to:<br/>
          • Provide our services<br/>
          • Comply with legal obligations<br/>
          • Resolve disputes<br/>
          • Enforce agreements<br/><br/>
          Waitlist data is retained until you request removal or we launch and you decide not to proceed.
        </Typography>

        {/* Section 10 */}
        <Typography 
          sx={{ 
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            fontWeight: 700,
            color: '#000',
            mb: 3,
            fontFamily: 'var(--font-inter)',
          }}
        >
          10. Third-Party Services
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
          Our website may contain links to third-party services. We're not responsible for their privacy practices. Current third-party services include:<br/>
          • Google Analytics (analytics.google.com)<br/>
          • Plausible Analytics (plausible.io)<br/>
          • RB2B (rb2b.com)<br/>
          • Google Tag Manager (tagmanager.google.com)
        </Typography>

        {/* Additional sections would continue here with the same formatting pattern */}
        
        {/* Section 14 - Contact */}
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
          14. Contact Us
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
          For privacy-related questions or to exercise your rights:<br/>
          <strong>Email:</strong> contact@getuptime.ai<br/>
          <strong>Website:</strong> https://www.getuptime.ai
        </Typography>

        <Typography 
          sx={{ 
            fontSize: { xs: '18px', sm: '20px', md: '22px' },
            fontWeight: 600,
            color: '#000',
            textAlign: 'center',
            mt: 6,
            mb: 4,
            fontFamily: 'var(--font-inter)',
          }}
        >
          By using Uptime, you agree to this Privacy Policy.
        </Typography>

      </Box>
    </Container>
  );
}


export default function PrivacyPolicyPage({ onBackClick }: { onBackClick: () => void }) {
  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <PrivacyHeader onBackClick={onBackClick} />
      <PrivacyContent />
      <SharedFooter onBackClick={onBackClick} />
    </Box>
  );
}