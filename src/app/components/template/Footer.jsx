"use client";
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        width: '100%',
        backgroundColor: 'background.paper',
       
        borderTop: (theme) => 
          `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
      }}
      // className='sticky bottom-0'
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            © {currentYear} Yelmouss. All rights reserved.
          </Typography>
          
          <Box>
            <IconButton
              color="secondary"
              aria-label="LinkedIn"
              sx={{ '&:hover': { color: 'info.main' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="GitHub"
              sx={{ '&:hover': { color: 'info.main' } }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="Email"
              sx={{ '&:hover': { color: 'info.main' } }}
            >
              <EmailIcon />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            Made by me with ❤️
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;