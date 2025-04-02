"use client";
import React, { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip, Zoom } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@emotion/react';

const WhatsAppButton = ({ phoneNumber = "212612865681" }) => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only render on client-side to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
      }}
    >
      <Tooltip
        title="Contact me on WhatsApp"
        TransitionComponent={Zoom}
        arrow
        placement="left"
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            component="a"
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 60,
              height: 60,
              backgroundColor: theme.palette.mode === "dark" ? 'rgba(37, 211, 102, 0.9)' : '#25D366',
              '&:hover': {
                backgroundColor: theme.palette.mode === "dark" ? 'rgba(37, 211, 102, 1)' : '#20c25b',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'relative', width: 35, height: 35 }}>
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </IconButton>
          
          {/* Pulse animation effect */}
          <Box
            component={motion.div}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '50%',
              backgroundColor: theme.palette.mode === "dark" ? 'rgba(37, 211, 102, 0.4)' : 'rgba(37, 211, 102, 0.4)',
              zIndex: -1,
            }}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton;