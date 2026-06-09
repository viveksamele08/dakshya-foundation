import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const handleScrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#05070e',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        pt: 8,
        pb: 4,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.4rem',
                mb: 2,
                background: 'linear-gradient(135deg, #f8fafc 40%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dakshya <Box component="span" sx={{ color: '#14b8a6', WebkitTextFillColor: 'initial' }}>Foundation</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', maxWidth: '380px', mb: 3 }}>
              Dakshya Foundation is an NGO founded in 2026 by Malaviyans, dedicated to supporting students from regional colleges to kickstart and grow their software engineering careers with mentorship from industry leaders.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#f8fafc' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#f8fafc' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#f8fafc' } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: '#94a3b8', '&:hover': { color: '#f8fafc' } }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={3.5}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#f8fafc', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['About Us', 'Mission', 'Pillars', 'How It Works', 'Testimonials', 'Get Involved'].map((link) => (
                <Link
                  key={link}
                  component="button"
                  variant="body2"
                  onClick={() => handleScrollToSection(`#${link.toLowerCase().replace(/\s+/g, '-')}`)}
                  sx={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    textAlign: 'left',
                    width: 'fit-content',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    '&:hover': { color: '#6366f1' }
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={6} md={3.5}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#f8fafc', mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>
              Email: info@dakshyafoundation.org
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>
              Location: Gorakhpur, Uttar Pradesh, India
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
              Founded in 2026 by Alumni of MMMUT (Malaviyans)
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.05)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            &copy; {new Date().getFullYear()} Dakshya Foundation. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            Designed with ♥ for the Tier-2 community.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
