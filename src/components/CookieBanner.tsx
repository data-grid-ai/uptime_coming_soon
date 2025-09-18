import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Switch,
  FormControlLabel,
  Paper,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

// Slide transition for the banner
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieBannerProps {
  onConsentChange?: (preferences: CookiePreferences) => void;
}

export default function CookieBanner({ onConsentChange }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  // Check if user has already made a choice
  useEffect(() => {
    const savedPreferences = localStorage.getItem('uptime-cookie-preferences');
    if (!savedPreferences) {
      // Show banner after a short delay to allow page to load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
        setShowBanner(true);
      }
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    localStorage.setItem('uptime-cookie-preferences', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowPreferencesModal(false);
    
    // Notify parent component
    if (onConsentChange) {
      onConsentChange(newPreferences);
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleEssentialOnly = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleManagePreferences = () => {
    setShowPreferencesModal(true);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handlePreferenceChange = (category: keyof CookiePreferences) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [category]: event.target.checked,
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.1)',
          p: { xs: 1, sm: 1.5, md: 2 },
        }}
        elevation={0}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleCloseBanner}
          sx={{
            position: 'absolute',
            top: { xs: 4, sm: 6, md: 8 },
            right: { xs: 4, sm: 6, md: 8 },
            color: '#666',
            width: '24px',
            height: '24px',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              color: '#333',
            },
          }}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path 
              d="M18 6L6 18M6 6l12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 600,
                color: '#0F172A',
                mb: 0.5,
                fontFamily: 'var(--font-inter)',
              }}
            >
              We use cookies to improve your experience
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '12px', md: '13px' },
                color: '#666',
                lineHeight: 1.4,
                fontFamily: 'var(--font-inter)',
              }}
            >
              We use essential cookies to make Uptime work and optional cookies to understand how you use our site and identify companies that could benefit from faster CDL hiring.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1.5, sm: 1 },
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Button
              onClick={handleAcceptAll}
              sx={{
                backgroundColor: '#91FF30',
                color: '#002233',
                fontWeight: 600,
                fontFamily: 'var(--font-inter)',
                px: { xs: 2, sm: 2 },
                py: 0.5,
                borderRadius: '6px',
                fontSize: { xs: '12px', sm: '12px' },
                minWidth: { xs: '100%', sm: 'auto' },
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#a1ff50',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              Accept All
            </Button>
            
            <Button
              onClick={handleEssentialOnly}
              variant="outlined"
              sx={{
                borderColor: '#d0d0d0',
                color: '#0F172A',
                fontWeight: 500,
                fontFamily: 'var(--font-inter)',
                px: { xs: 2, sm: 2 },
                py: 0.5,
                borderRadius: '6px',
                fontSize: { xs: '12px', sm: '12px' },
                minWidth: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#b0b0b0',
                  backgroundColor: 'rgba(15, 23, 42, 0.04)',
                },
              }}
            >
              Essential Only
            </Button>
            
            <Button
              onClick={handleManagePreferences}
              variant="text"
              sx={{
                color: '#0F172A',
                fontWeight: 500,
                fontFamily: 'var(--font-inter)',
                px: { xs: 2, sm: 2 },
                py: 0.5,
                fontSize: { xs: '12px', sm: '12px' },
                minWidth: { xs: '100%', sm: 'auto' },
                textDecoration: 'underline',
                '&:hover': {
                  backgroundColor: 'rgba(15, 23, 42, 0.04)',
                  textDecoration: 'underline',
                },
              }}
            >
              Manage Preferences
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Preferences Modal */}
      <Dialog
        open={showPreferencesModal}
        onClose={() => setShowPreferencesModal(false)}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            m: 2,
          }
        }}
      >
        <DialogTitle
          sx={{
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 600,
            color: '#0F172A',
            fontFamily: 'var(--font-inter)',
            pb: 1,
            position: 'relative',
          }}
        >
          Cookie Preferences
          <IconButton
            onClick={() => setShowPreferencesModal(false)}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#666',
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path 
                d="M18 6L6 18M6 6l12 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ pb: 4 }}>
          {/* Essential Cookies */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#0F172A',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  Essential
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#0F172A',
                    color: '#91FF30',
                    px: 2,
                    py: 0.5,
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  Always On
                </Box>
              </Box>
              <Switch
                checked={preferences.essential}
                disabled
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#91FF30',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#91FF30',
                  },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.5,
                fontFamily: 'var(--font-inter)',
                mb: 2,
              }}
            >
              Required for Uptime to function properly. These enable core features like security, network management, and accessibility.
            </Typography>
          </Box>

          {/* Analytics Cookies */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0F172A',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Analytics
              </Typography>
              <Switch
                checked={preferences.analytics}
                onChange={handlePreferenceChange('analytics')}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#91FF30',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#91FF30',
                  },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.5,
                fontFamily: 'var(--font-inter)',
                mb: 2,
              }}
            >
              Help us understand how visitors interact with Uptime so we can improve the platform and your experience.
            </Typography>
          </Box>

          {/* Marketing & Identification Cookies */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0F172A',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Marketing & Identification
              </Typography>
              <Switch
                checked={preferences.marketing}
                onChange={handlePreferenceChange('marketing')}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#91FF30',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#91FF30',
                  },
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.5,
                fontFamily: 'var(--font-inter)',
                mb: 2,
              }}
            >
              Allow us to identify companies visiting our site and measure the effectiveness of our campaigns to bring you a better CDL hiring solution.
            </Typography>
          </Box>

          {/* Cookie Policy Link */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 2 }}>
            <Link href="/cookie-policy" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#666',
                  fontFamily: 'var(--font-inter)',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#0F172A',
                    textDecoration: 'underline',
                  },
                }}
              >
                View our full Cookie Policy
              </Typography>
            </Link>
          </Box>

          {/* Save Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              onClick={handleSavePreferences}
              sx={{
                backgroundColor: '#91FF30',
                color: '#0F172A',
                fontWeight: 600,
                fontFamily: 'var(--font-inter)',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#a1ff50',
                },
              }}
            >
              Save My Preferences
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}