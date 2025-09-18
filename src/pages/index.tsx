import React, { useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Link,
  Dialog,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { Phone, Email, LocationOn, ArrowForward, ExpandMore } from '@mui/icons-material';
import svgPaths from '../imports/svg-11ii49tsrw';
import modalSvgPaths from '../imports/svg-hjy3y4q6kq';
import CookieBanner from '../components/CookieBanner';

function UptimeLogo({ color = "white", size = "large" }: { color?: string; size?: string }) {
  const scale = size === "large" ? 1.0 : size === "medium" ? 0.8 : 0.6;
  const width = size === "large" ? 280 : size === "medium" ? 220 : 197;
  const height = size === "large" ? 130 : size === "medium" ? 104 : 93;
  
  return (
    <Box sx={{ display: 'inline-block', transform: `scale(${scale})` }}>
      <svg width={width} height={height} fill="none" viewBox={`0 0 ${width} ${height}`}>
        <g>
          <path 
            d={size === "large" ? svgPaths.p3f2a3d80 : svgPaths.p38848b00} 
            fill={color === "white" ? "white" : "#002233"} 
          />
          <path 
            clipRule="evenodd" 
            d={size === "large" ? svgPaths.p4d27480 : svgPaths.p1d6bfd80} 
            fill="#91FF30" 
            fillRule="evenodd" 
          />
        </g>
      </svg>
    </Box>
  );
}

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];


function EmailSignupModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'driver' | 'fleet'>('driver');
  const [formData, setFormData] = useState({
    name: '',
    state: 'Alabama',
    email: '',
    phone: '',
    // Fleet Manager specific fields
    companyName: '',
    fleetSize: '',
    // Driver specific fields
    cdlType: 'A'
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    fleetSize: '',
    cdlType: ''
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    
    // For phone number fields, only allow numbers and common phone formatting characters
    if (field === 'phone') {
      // Allow numbers, spaces, parentheses, hyphens, and plus sign
      value = value.replace(/[^0-9\s\(\)\-\+]/g, '');
    }
    
    setFormData({ ...formData, [field]: value });
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSelectChange = (field: string) => (event: any) => {
    setFormData({ ...formData, [field]: event.target.value });
    
    // Clear error when user makes a selection
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleTabChange = (tab: 'driver' | 'fleet') => {
    setActiveTab(tab);
    // Clear all errors when switching tabs
    setErrors({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      fleetSize: '',
      cdlType: ''
    });
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', companyName: '', fleetSize: '', cdlType: '' };
    let isValid = true;

    if (activeTab === 'driver') {
      // CDL Driver validations
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        isValid = false;
      }

      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
        isValid = false;
      }

      // Email is optional for drivers, but validate format if provided
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }

      if (!formData.cdlType.trim()) {
        newErrors.cdlType = 'CDL type is required';
        isValid = false;
      }
    } else if (activeTab === 'fleet') {
      // Fleet Manager validations
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Company name is required';
        isValid = false;
      }

      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        isValid = false;
      }

      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }

      // Fleet size is optional - no validation needed
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userType: activeTab
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        onClose();
        // Reset form
        setFormData({
          name: '',
          state: 'Alabama',
          email: '',
          phone: '',
          companyName: '',
          fleetSize: '',
          cdlType: 'A'
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullScreen
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          margin: 0,
        }
      }}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent',
        }
      }}
    >
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/assets/b64996b8c4a4606bde0414c4ab9ae892784fff0b.png")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }
        }}
      >

        {/* Form Container */}
        <Paper
          sx={{
            position: 'absolute',
            top: { xs: '0', sm: '50%' },
            left: { xs: '0', sm: '50%' },
            transform: { 
              xs: 'none', 
              sm: 'translate(-50%, -50%)' 
            },
            width: { 
              xs: '100vw', 
              sm: '90vw', 
              md: '80vw',
              lg: '900px',
              xl: '1000px'
            },
            height: { 
              xs: '100vh', 
              sm: 'auto' 
            },
            maxWidth: { xs: 'none', sm: '1000px' },
            maxHeight: { xs: 'none', sm: '95vh', md: '90vh' },
            minHeight: { xs: '100vh', sm: 'auto' },
            borderRadius: { xs: '0', sm: '16px', md: '24px' },
            backgroundColor: 'white',
            boxShadow: { 
              xs: 'none', 
              sm: '0px 5px 15px 0px rgba(34,44,36,0.1)' 
            },
            zIndex: 2,
            padding: { 
              xs: '16px', 
              sm: '24px', 
              md: '32px', 
              lg: '40px',
              xl: '50px'
            },
            overflow: { xs: 'auto', sm: 'auto' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: { xs: '12px', sm: '16px', md: '20px', lg: '24px' },
              right: { xs: '12px', sm: '16px', md: '20px', lg: '24px' },
              zIndex: 10,
              width: { xs: '36px', sm: '40px', md: '44px', lg: '48px' },
              height: { xs: '36px', sm: '40px', md: '44px', lg: '48px' },
              padding: 0,
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: { 
                xs: '0px 1px 6px rgba(0, 0, 0, 0.1)', 
                sm: '0px 2px 10px rgba(0, 0, 0, 0.1)' 
              },
              '&:hover': {
                backgroundColor: '#f5f5f5',
                boxShadow: { 
                  xs: '0px 2px 10px rgba(0, 0, 0, 0.15)', 
                  sm: '0px 4px 15px rgba(0, 0, 0, 0.15)' 
                },
              }
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path 
                d="M18 6L6 18M6 6l12 12" 
                stroke="#002233" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
          
          <Box sx={{ 
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0, // Important for flex scrolling
          }}>
            {/* Scrollable Content Area */}
            <Box sx={{
              flex: 1,
              overflow: 'auto',
              paddingBottom: { xs: '16px', sm: '24px' },
            }}>
              {/* Tab Navigation */}
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                mb: { xs: '24px', sm: '32px', md: '40px', lg: '50px' },
                px: { xs: '8px', sm: '16px' },
              }}>
              <Box sx={{
                display: 'flex',
                backgroundColor: '#f5f5f5',
                borderRadius: '100px',
                padding: { xs: '3px', sm: '4px' },
                border: '2px solid #e0e0e0',
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '100%', sm: '600px' },
              }}>
                <Box
                  onClick={() => handleTabChange('driver')}
                  sx={{
                    px: { xs: '12px', sm: '20px', md: '30px', lg: '40px' },
                    py: { xs: '8px', sm: '10px', md: '12px', lg: '15px' },
                    borderRadius: '100px',
                    backgroundColor: activeTab === 'driver' ? '#e0e0e0' : 'transparent',
                    color: '#002233',
                    fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
                    fontWeight: 600,
                    fontFamily: 'var(--font-inter)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    flex: { xs: 1, sm: 'none' },
                    minWidth: { xs: 'auto', sm: '140px' },
                    '&:hover': {
                      backgroundColor: activeTab === 'driver' ? '#e0e0e0' : '#f0f0f0'
                    }
                  }}
                >
                  CDL Driver
                </Box>
                <Box
                  onClick={() => handleTabChange('fleet')}
                  sx={{
                    px: { xs: '12px', sm: '20px', md: '30px', lg: '40px' },
                    py: { xs: '8px', sm: '10px', md: '12px', lg: '15px' },
                    borderRadius: '100px',
                    backgroundColor: activeTab === 'fleet' ? '#e0e0e0' : 'transparent',
                    color: '#002233',
                    fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
                    fontWeight: 600,
                    fontFamily: 'var(--font-inter)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    flex: { xs: 1, sm: 'none' },
                    minWidth: { xs: 'auto', sm: '140px' },
                    '&:hover': {
                      backgroundColor: activeTab === 'fleet' ? '#e0e0e0' : '#f0f0f0'
                    }
                  }}
                >
                  Fleet Manager
                </Box>
              </Box>
            </Box>
            {/* Driver Form */}
            {activeTab === 'driver' && (
              <>
                {/* First Row */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  gap: { xs: '24px', sm: '28px', md: '40px', lg: '60px', xl: '80px' }, 
                  mb: { xs: '24px', sm: '28px', md: '35px', lg: '45px', xl: '50px' } 
                }}>
                  {/* Name */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.name ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Full Name *
                    </Typography>
                    <TextField
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      variant="standard"
                      fullWidth
                      error={!!errors.name}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.name ? '#d32f2f' : '#002233',
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.name ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '1px' }} />
                    {errors.name && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.name}
                      </Typography>
                    )}
                  </Box>

                  {/* Mobile Number */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.phone ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Mobile Number *
                    </Typography>
                    <TextField
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      placeholder="+1 (555) 123-4567"
                      variant="standard"
                      fullWidth
                      error={!!errors.phone}
                      inputMode="tel"
                      type="tel"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.phone ? '#d32f2f' : '#002233',
                          '&::placeholder': {
                            color: 'rgba(0,34,51,0.5)',
                            opacity: 1,
                          }
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.phone ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '4px' }} />
                    {errors.phone && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.phone}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* Second Row */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  gap: { xs: '24px', sm: '28px', md: '40px', lg: '60px', xl: '80px' }, 
                  mb: { xs: '24px', sm: '28px', md: '35px', lg: '45px', xl: '50px' } 
                }}>
                  {/* Email */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.email ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Email Address 
                    </Typography>
                    <TextField
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      variant="standard"
                      fullWidth
                      error={!!errors.email}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.email ? '#d32f2f' : '#002233',
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.email ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '1px' }} />
                    {errors.email && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.email}
                      </Typography>
                    )}
                  </Box>

                  {/* Home State */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'rgba(0,34,51,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Home State
                    </Typography>
                    <FormControl fullWidth variant="standard">
                      <Select
                        value={formData.state}
                        onChange={handleSelectChange('state')}
                        disableUnderline
                        sx={{
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: '#002233',
                          '&:before': {
                            display: 'none',
                          },
                          '&:after': {
                            display: 'none',
                          },
                          '& .MuiSelect-icon': {
                            right: '17px',
                            width: '12px',
                            height: '7px',
                          },
                        }}
                        IconComponent={() => (
                          <Box
                            sx={{
                              position: 'absolute',
                              right: '17px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '12px',
                              height: '7px',
                              pointerEvents: 'none',
                            }}
                          >
                            <svg width="13" height="8" fill="none" viewBox="0 0 13 8">
                              <path d={modalSvgPaths.p281e4100} fill="#002233" />
                            </svg>
                          </Box>
                        )}
                      >
                        {usStates.map((state) => (
                          <MenuItem
                            key={state}
                            value={state}
                            sx={{
                              fontSize: '16px',
                              fontFamily: 'var(--font-inter)',
                              fontWeight: 400,
                            }}
                          >
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Box sx={{ height: '1px', backgroundColor: '#c9c9c9', borderRadius: '40px', mt: '4px' }} />
                  </Box>
                </Box>

                {/* Third Row - CDL Type */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  gap: { xs: '24px', sm: '28px', md: '40px', lg: '60px', xl: '80px' }, 
                  mb: { xs: '24px', sm: '28px', md: '35px', lg: '45px', xl: '50px' } 
                }}>
                  {/* CDL Type */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.cdlType ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Your CDL Type
                    </Typography>
                    <FormControl fullWidth variant="standard">
                      <Select
                        value={formData.cdlType}
                        onChange={handleSelectChange('cdlType')}
                        disableUnderline
                        error={!!errors.cdlType}
                        sx={{
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.cdlType ? '#d32f2f' : '#002233',
                          '&:before': {
                            display: 'none',
                          },
                          '&:after': {
                            display: 'none',
                          },
                          '& .MuiSelect-icon': {
                            right: '17px',
                            width: '12px',
                            height: '7px',
                          },
                        }}
                        IconComponent={() => (
                          <Box
                            sx={{
                              position: 'absolute',
                              right: '17px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '12px',
                              height: '7px',
                              pointerEvents: 'none',
                            }}
                          >
                            <svg width="13" height="8" fill="none" viewBox="0 0 13 8">
                              <path d={modalSvgPaths.p281e4100} fill="#002233" />
                            </svg>
                          </Box>
                        )}
                      >
                        <MenuItem value="A" sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                          Class A - OTR (Over-The-Road)
                        </MenuItem>
                        <MenuItem value="B" sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                          Class B - Local/Regional
                        </MenuItem>
                        <MenuItem value="C" sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                          Class C - Shuttle/Hazmat
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ height: '1px', backgroundColor: errors.cdlType ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '4px' }} />
                    {errors.cdlType && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.cdlType}
                      </Typography>
                    )}
                  </Box>

                  {/* Empty space for alignment */}
                  <Box sx={{ flex: 1 }} />
                </Box>
              </>
            )}

            {/* Fleet Manager Form */}
            {activeTab === 'fleet' && (
              <>
                {/* First Row */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  gap: { xs: '24px', sm: '28px', md: '40px', lg: '60px', xl: '80px' }, 
                  mb: { xs: '24px', sm: '28px', md: '35px', lg: '45px', xl: '50px' } 
                }}>
                  {/* Your Company / Fleet Name */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.companyName ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Your Company / Fleet Name *
                    </Typography>
                    <TextField
                      value={formData.companyName}
                      onChange={handleInputChange('companyName')}
                      variant="standard"
                      fullWidth
                      error={!!errors.companyName}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.companyName ? '#d32f2f' : '#002233',
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.companyName ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '1px' }} />
                    {errors.companyName && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.companyName}
                      </Typography>
                    )}
                  </Box>

                  {/* Your Name */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.name ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Your Name *
                    </Typography>
                    <TextField
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      variant="standard"
                      fullWidth
                      error={!!errors.name}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.name ? '#d32f2f' : '#002233',
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.name ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '1px' }} />
                    {errors.name && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.name}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* Second Row */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  gap: { xs: '24px', sm: '28px', md: '40px', lg: '60px', xl: '80px' }, 
                  mb: { xs: '24px', sm: '28px', md: '35px', lg: '45px', xl: '50px' } 
                }}>
                  {/* Best Contact Number */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.phone ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Best Contact Number *
                    </Typography>
                    <TextField
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      placeholder="+1 (555) 123-4567"
                      variant="standard"
                      fullWidth
                      error={!!errors.phone}
                      inputMode="tel"
                      type="tel"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.phone ? '#d32f2f' : '#002233',
                          '&::placeholder': {
                            color: 'rgba(0,34,51,0.5)',
                            opacity: 1,
                          }
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.phone ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '4px' }} />
                    {errors.phone && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.phone}
                      </Typography>
                    )}
                  </Box>

                  {/* Work Email */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.email ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Work Email *
                    </Typography>
                    <TextField
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      variant="standard"
                      fullWidth
                      error={!!errors.email}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.email ? '#d32f2f' : '#002233',
                        }
                      }}
                    />
                    <Box sx={{ height: '1px', backgroundColor: errors.email ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '1px' }} />
                    {errors.email && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.email}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* Third Row */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                  gap: { xs: '24px', sm: '28px', md: '40px', lg: '60px', xl: '80px' }, 
                  mb: { xs: '24px', sm: '28px', md: '35px', lg: '45px', xl: '50px' } 
                }}>
                  
                  {/* Number of Trucks in Your Fleet */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: errors.fleetSize ? '#d32f2f' : 'rgba(34,44,36,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Number of Trucks in Your Fleet
                    </Typography>
                    <FormControl fullWidth variant="standard">
                      <Select
                        value={formData.fleetSize}
                        onChange={handleSelectChange('fleetSize')}
                        displayEmpty
                        disableUnderline
                        error={!!errors.fleetSize}
                        sx={{
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: errors.fleetSize ? '#d32f2f' : (formData.fleetSize ? '#002233' : 'rgba(0,34,51,0.5)'),
                          '&:before': {
                            display: 'none',
                          },
                          '&:after': {
                            display: 'none',
                          },
                          '& .MuiSelect-icon': {
                            right: '17px',
                            width: '12px',
                            height: '7px',
                          },
                        }}
                        IconComponent={() => (
                          <Box
                            sx={{
                              position: 'absolute',
                              right: '17px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '12px',
                              height: '7px',
                              pointerEvents: 'none',
                            }}
                          >
                            <svg width="13" height="8" fill="none" viewBox="0 0 13 8">
                              <path d={modalSvgPaths.p281e4100} fill="#002233" />
                            </svg>
                          </Box>
                        )}
                      >
                        <MenuItem value="" disabled sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400, color: 'rgba(34,44,36,0.5)' }}>
                          Select fleet size
                        </MenuItem>
                        <MenuItem value="25-99" sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                          25-99
                        </MenuItem>
                        <MenuItem value="100-249" sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                          100-249
                        </MenuItem>
                        <MenuItem value="250-499" sx={{ fontSize: '16px', fontFamily: 'var(--font-inter)', fontWeight: 400 }}>
                          250-499
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ height: '1px', backgroundColor: errors.fleetSize ? '#d32f2f' : '#c9c9c9', borderRadius: '40px', mt: '4px' }} />
                    {errors.fleetSize && (
                      <Typography sx={{ fontSize: '12px', color: '#d32f2f', mt: 1, fontFamily: 'var(--font-inter)' }}>
                        {errors.fleetSize}
                      </Typography>
                    )}
                  </Box>

                  {/* Operating State */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'rgba(0,34,51,0.5)',
                        textTransform: 'uppercase',
                        mb: { xs: '6px', sm: '8px' },
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Operating State
                    </Typography>
                    <FormControl fullWidth variant="standard">
                      <Select
                        value={formData.state}
                        onChange={handleSelectChange('state')}
                        disableUnderline
                        sx={{
                          fontSize: '16px',
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 400,
                          color: '#002233',
                          '&:before': {
                            display: 'none',
                          },
                          '&:after': {
                            display: 'none',
                          },
                          '& .MuiSelect-icon': {
                            right: '17px',
                            width: '12px',
                            height: '7px',
                          },
                        }}
                        IconComponent={() => (
                          <Box
                            sx={{
                              position: 'absolute',
                              right: '17px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '12px',
                              height: '7px',
                              pointerEvents: 'none',
                            }}
                          >
                            <svg width="13" height="8" fill="none" viewBox="0 0 13 8">
                              <path d={modalSvgPaths.p281e4100} fill="#002233" />
                            </svg>
                          </Box>
                        )}
                      >
                        {usStates.map((state) => (
                          <MenuItem
                            key={state}
                            value={state}
                            sx={{
                              fontSize: '16px',
                              fontFamily: 'var(--font-inter)',
                              fontWeight: 400,
                            }}
                          >
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Box sx={{ height: '1px', backgroundColor: '#c9c9c9', borderRadius: '40px', mt: '4px' }} />
                  </Box>
                </Box>
              </>
            )}
            </Box>

            {/* Submit Button - Fixed at bottom */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: '16px', sm: '16px', md: '20px', lg: '24px' },
              pt: { xs: '0', sm: '0', md: '0' },
              px: { xs: '0', sm: '0' },
              borderTop: 'none',
              backgroundColor: 'transparent',
              backdropFilter: 'none',
              flexShrink: 0,
            }}>
              <Button
                onClick={handleSubmit}
                sx={{
                  width: { 
                    xs: 'calc(100% - 32px)', 
                    sm: '180px', 
                    md: '200px', 
                    lg: '220px',
                    xl: '240px' 
                  },
                  maxWidth: { xs: 'calc(100% - 32px)', sm: '240px' },
                  height: { xs: '48px', sm: '52px', md: '56px', lg: '60px' },
                  backgroundColor: '#91FF30',
                  borderRadius: '100px',
                  color: '#002233',
                  fontSize: { xs: '16px', sm: '17px', md: '18px' },
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-inter)',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: '#91FF30',
                  },
                }}
              >
Submit
                <Box
                  sx={{
                    position: 'absolute',
                    right: { xs: '4px', sm: '10px' },
                    width: { xs: '36px', sm: '40px' },
                    height: { xs: '36px', sm: '40px' },
                    backgroundColor: '#002233',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg 
                    width="40" 
                    height="40" 
                    fill="none" 
                    viewBox="0 0 40 40"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <circle cx="20" cy="20" fill="#002233" r="20" />
                    <path d={modalSvgPaths.p354521a0} fill="white" />
                  </svg>
                </Box>
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Dialog>
  );
}

function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 8,
        mb: 15,
      }}
    >
      <Box>
        <UptimeLogo color="dark" size="large" />
      </Box>
      
      <Typography variant="subtitle1" sx={{ mb: 9, mr: 4, color: '#002233' }}>
        The CDL Hiring Operating System
      </Typography>
      
      <Box sx={{ 
        position: 'relative', 
        mb: 6,
        px: { xs: '10px', md: 0 }
      }}>
        <Typography 
          variant="h1" 
          sx={{ 
            color: '#002233',
            textAlign: 'center',
            mb: 0,
            position: 'relative',
            zIndex: 1,
            fontSize: { xs: '78px', md: '120px' },
          }}
        >
          Coming Soon
        </Typography>
        <Box
          sx={{
            height: '10px',
            width: '100%',
            backgroundColor: '#91FF30',
            position: 'absolute',
            left: '50%',
            top: '100%',
            transform: { 
              xs: 'translate(-50%, -22px)', 
              md: 'translate(-50%, -34px)' 
            },
            zIndex: 0,
          }}
        />
      </Box>
      
      <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          variant="contained"
          onClick={onOpenModal}
          sx={{ 
            width: '312px',
            position: 'relative',
            fontFamily: 'var(--font-inter)',
            backgroundColor: '#91FF30',
            color: '#002233',
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
              backgroundColor: '#002233',
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
        
        <NextLink href="/manifesto" passHref>
          <Button
            variant="outlined"
            sx={{
              width: '312px',
              backgroundColor: 'white',
              color: '#002233',
              borderColor: '#002233',
              borderWidth: '2px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                borderWidth: '2px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            Mr. Rigg's Manifesto
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
}

function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "What is Uptime?",
      answer: "Uptime is the CDL Hiring OS that connects trucking fleets with qualified drivers in 48 hours, replacing job boards and agencies with one platform that handles matching, compliance, and retention."
    },
    {
      question: "How fast can Uptime really fill empty trucks?",
      answer: "We deliver matched, audit-ready CDL drivers in under 48 hours compared to the 3-4 weeks it takes with traditional methods - some fleets get interviews scheduled within 24 hours."
    },
    {
      question: "Is Uptime free for CDL drivers?",
      answer: "Yes, Uptime is completely free for drivers - create one profile, get matched with the right fleet, and receive job offers in 48 hours without paying anything."
    },
    {
      question: "When is Uptime launching?",
      answer: "We're currently in closed beta with select fleets and drivers, onboarding new users weekly - join the waitlist for early access when we expand."
    },
    {
      question: "What size fleets does Uptime work with?",
      answer: "We're built for fleets with 25-500 trucks, but if you have fewer trucks or more, join the waitlist and we'll notify you when we expand to your fleet size."
    },
    {
      question: "How much does Uptime cost for fleets?",
      answer: "Uptime reduces cost-per-hire by 70% compared to recruitment agencies that charge $6,000-$12,000 per driver - think hundreds per hire, not thousands."
    },
    {
      question: "Do drivers have to fill out multiple applications?",
      answer: "No, drivers create one profile in under 3 minutes and they're done - when matched with a fleet, everything is already shared, no more uploading the same CDL photo 20 times."
    },
    {
      question: "What about compliance and DOT requirements?",
      answer: "Every driver comes pre-verified with CDL, MVR, PSP, and Clearinghouse checks complete - your driver files are audit-ready from day one."
    },
    {
      question: "Is Uptime available in my area?",
      answer: "Yes, Uptime covers all states - whether you're running regional routes or long-haul, we have drivers and fleets in your area."
    },
    {
      question: "How does Uptime predict driver retention?",
      answer: "Our AI analyzes 50+ factors including work history, route preferences, and behavioral patterns to show you retention risk scores before you hire - so you know which drivers are likely to stay beyond 90 days."
    },
    {
      question: "When will I see ROI from using Uptime?",
      answer: "Fleets making 3-5 hires per month become ROI-positive immediately - you'll save more in reduced recruitment costs and empty truck downtime than you spend on Uptime from day one."
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        pt: { xs: 6, md: 8 },
        pb: { xs: 10, md: 12 }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{
          px: { xs: 2, md: 4 }
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#002233',
              mb: 0,
              fontWeight: 800,
              position: 'relative',
              zIndex: 10,
              fontSize: { xs: '20px', md: '36px' },
              display: 'inline-block'
            }}
          >
            Everything You Need to Know About Uptime
            <Box
              sx={{
                height: '10px',
                width: '100%',
                backgroundColor: '#91FF30',
                position: 'absolute',
                left: '50%',
                top: '100%',
                transform: { 
                  xs: 'translate(-50%, -8px)', 
                  md: 'translate(-50%, -12px)' 
                },
                zIndex: -1,
              }}
            />
          </Typography>
        </Box>

      <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={`panel${index + 1}`}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{
              mb: 0,
              boxShadow: 'none',
              border: 'none',
              borderBottom: '1px solid #0022330D',
              borderRadius: '0 !important',
              '&:before': {
                display: 'none',
              },
              '&:last-child': {
                borderBottom: 'none'
              },
              '&.Mui-expanded': {
                margin: 0,
                borderBottom: '2px solid #002233',
              }
            }}
          >
            <AccordionSummary
              expandIcon={
                <Image
                  src={expanded === `panel${index + 1}` ? "/icons/open.svg" : "/icons/close.svg"}
                  alt={expanded === `panel${index + 1}` ? "Collapse" : "Expand"}
                  width={12}
                  height={12}
                  style={{
                    transform: expanded === `panel${index + 1}` ? 'rotate(180deg)' : 'none'
                  }}
                />
              }
              sx={{
                backgroundColor: 'white',
                borderRadius: 0,
                minHeight: '80px',
                px: 0,
                py: 2,
                '& .MuiAccordionSummary-content': {
                  margin: '16px 0',
                  '&.Mui-expanded': {
                    margin: '16px 0',
                  }
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                  color: '#002233'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '16px', md: '18px' },
                  fontWeight: 600,
                  color: '#002233',
                  fontFamily: 'var(--font-inter)',
                  lineHeight: 1.5
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: 'white',
                borderRadius: 0,
                pt: 0,
                pb: 4,
                px: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '15px', md: '16px' },
                  lineHeight: 1.6,
                  color: '#002233',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Paper
      sx={{
        backgroundColor: '#002233',
        color: 'white',
        py: 6,
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <UptimeLogo color="white" size="small" />
            </Box>
            <Typography sx={{ opacity: 0.5, fontSize: '12px' }}>
              Drive Your Career Forward With Us
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline', mb: 1 }}>
                Home
              </Typography>
              <Typography sx={{ opacity: 0.7, mb: 1 }}>Services</Typography>
              <Typography sx={{ opacity: 0.7, mb: 1 }}>About Us</Typography>
              <Typography sx={{ opacity: 0.7 }}>Contact Us</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ opacity: 0.5 }} />
                <Typography>+12147781233</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ opacity: 0.5 }} />
                <Link href="mailto:uptime@uptime.com" sx={{ color: 'white', textDecoration: 'none' }}>
                  uptime@uptime.com
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ opacity: 0.5 }} />
                <Typography sx={{ fontSize: '16px', lineHeight: '26px' }}>
                  3046 S Macon Cir, Aurora, CO, 80046
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            mt: 4,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography sx={{ opacity: 0.5, fontSize: '14px', mb: 1 }}>
            Copyright 2025 © <span style={{ fontWeight: 600 }}>uptime</span>
          </Typography>
          <NextLink href="/privacy-policy" style={{ textDecoration: 'none' }}>
            <Typography 
              sx={{ 
                opacity: 0.7, 
                fontSize: '12px',
                cursor: 'pointer',
                textDecoration: 'underline',
                color: 'inherit',
                '&:hover': {
                  opacity: 1
                }
              }}
            >
              Privacy Policy
            </Typography>
          </NextLink>
        </Box>
      </Container>
    </Paper>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (router.query.modal === 'open') {
      setModalOpen(true);
    } else {
      setModalOpen(true);
    }
  };
  const handleCloseModal = () => setModalOpen(false);

  // Check if modal should be opened based on URL parameter
  React.useEffect(() => {
    if (router.query.modal === 'open') {
      setModalOpen(true);
    }
  }, [router.query.modal]);

  const handleCookieConsent = (preferences: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    // Handle cookie consent changes
    console.log('Cookie preferences updated:', preferences);
    
    // Here you could integrate with analytics scripts based on user consent
    if (preferences.analytics) {
      // Enable analytics tracking
      console.log('Analytics cookies enabled');
    } else {
      // Disable analytics tracking
      console.log('Analytics cookies disabled');
    }
    
    if (preferences.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    } else {
      // Disable marketing cookies
      console.log('Marketing cookies disabled');
    }
  };

  return (
    <>
      <Head>
        <title>Uptime - CDL Hiring in 48 Hours | Join the Waitlist</title>
        <meta 
          name="description" 
          content="Join 500+ fleets and 10,000+ CDL drivers on Uptime's waitlist. Fleets: hire in 48 hours, 70% lower costs. Drivers: skip the wait, get matched instantly." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Plausible Analytics */}
        <script defer data-domain="getuptime.ai" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
        }} />
        
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZFGNZ9W');`
        }} />
        
        {/* Reb2b Analytics */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("0OV0VHMGZD6Z");`
        }} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.getuptime.ai",
                  "name": "Uptime - CDL Hiring in 48 Hours | Join the Waitlist",
                  "description": "Join 500+ fleets and 10,000+ CDL drivers on Uptime's waitlist. Fleets: hire in 48 hours, 70% lower costs. Drivers: skip the wait, get matched instantly.",
                  "url": "https://www.getuptime.ai",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Uptime",
                    "alternateName": "Uptime AI",
                    "url": "https://www.getuptime.ai",
                    "logo": "https://www.getuptime.ai/favicon.png",
                    "sameAs": [
                      "https://www.linkedin.com/company/uptime-ai/",
                      "https://www.tiktok.com/@uptime.ai",
                      "https://www.youtube.com/@ai.uptime"
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Uptime CDL Hiring OS",
                    "description": "AI-powered CDL driver hiring platform that connects fleets with drivers in 48 hours",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web-based",
                    "softwareVersion": "Beta",
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/PreOrder",
                      "description": "Currently in closed beta - join waitlist for early access."
                    },
                    "featureList": [
                      "48-hour CDL driver hiring",
                      "70% reduction in hiring costs",
                      "Automated compliance verification",
                      "AI-powered driver matching",
                      "Audit-ready driver files",
                      "Predictive retention analytics"
                    ],
                    "audience": {
                      "@type": "Audience",
                      "audienceType": ["Fleet Managers", "CDL Drivers", "Trucking Companies"]
                    }
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Uptime?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Uptime is the CDL Hiring OS that connects trucking fleets with qualified drivers in 48 hours, replacing job boards and agencies with one platform that handles matching, compliance, and retention."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How fast can Uptime really fill empty trucks?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We deliver matched, audit-ready CDL drivers in under 48 hours compared to the 3-4 weeks it takes with traditional methods - some fleets get interviews scheduled within 24 hours."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Uptime free for CDL drivers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Uptime is completely free for drivers - create one profile, get matched with the right fleet, and receive job offers in 48 hours without paying anything."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When is Uptime launching?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We're currently in closed beta with select fleets and drivers, onboarding new users weekly - join the waitlist for early access when we expand."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What size fleets does Uptime work with?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We're built for fleets with 25-500 trucks, but if you have fewer trucks or more, join the waitlist and we'll notify you when we expand to your fleet size."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does Uptime cost for fleets?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Uptime reduces cost-per-hire by 70% compared to recruitment agencies that charge $6,000-$12,000 per driver - think hundreds per hire, not thousands."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do drivers have to fill out multiple applications?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, drivers create one profile in under 3 minutes and they're done - when matched with a fleet, everything is already shared, no more uploading the same CDL photo 20 times."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What about compliance and DOT requirements?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Every driver comes pre-verified with CDL, MVR, PSP, and Clearinghouse checks complete - your driver files are audit-ready from day one."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Uptime available in my area?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Uptime covers all states - whether you're running regional routes or long-haul, we have drivers and fleets in your area."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does Uptime predict driver retention?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our AI analyzes 50+ factors including work history, route preferences, and behavioral patterns to show you retention risk scores before you hire - so you know which drivers are likely to stay beyond 90 days."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When will I see ROI from using Uptime?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fleets making 3-5 hires per month become ROI-positive immediately - you'll save more in reduced recruitment costs and empty truck downtime than you spend on Uptime from day one."
                      }
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Head>
      <Box
        sx={{
          backgroundColor: '#f6ffed',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <HeroSection onOpenModal={handleOpenModal} />
          
          <FAQSection />
          
          {/* Simple Policy Links at Bottom */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <NextLink href="/privacy-policy" style={{ textDecoration: 'none' }}>
                <Typography 
                  sx={{ 
                    opacity: 0.6, 
                    fontSize: '12px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#002233',
                    fontFamily: 'var(--font-inter)',
                    '&:hover': {
                      opacity: 1
                    }
                  }}
                >
                  Privacy Policy
                </Typography>
              </NextLink>
              
              <Box sx={{ mx: 1 }}>
                <Typography
                  sx={{
                    opacity: 0.4,
                    fontSize: '12px',
                    color: '#002233',
                    fontFamily: 'var(--font-inter)',
                    userSelect: 'none',
                  }}
                >
                  •
                </Typography>
              </Box>
              
              <NextLink href="/cookie-policy" style={{ textDecoration: 'none' }}>
                <Typography 
                  sx={{ 
                    opacity: 0.6, 
                    fontSize: '12px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#002233',
                    fontFamily: 'var(--font-inter)',
                    '&:hover': {
                      opacity: 1
                    }
                  }}
                >
                  Cookie Policy
                </Typography>
              </NextLink>
            </Box>
          </Box>
      </Box>
      <EmailSignupModal open={modalOpen} onClose={handleCloseModal} />
      <CookieBanner onConsentChange={handleCookieConsent} />
    </>
  );
}
