import React from 'react';
import { Box, Container, Grid, Typography, Button, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { siteConfig } from '../constants/content';

export default function AboutUs() {
  const { founder } = siteConfig;

  return (
    <Box
      id="about-us"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'rgba(7, 10, 19, 0.25)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background soft orb */}
      <div className="glow-orb orb-secondary" style={{ right: 'auto', left: '15%', top: '20%' }} />

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#14b8a6',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.1em',
              mb: 1
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              fontFamily: "'Outfit', sans-serif",
              mb: 2
            }}
          >
            Behind the Mission
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto' }}>
            Learn about our origins and the individuals driving Dakshya Foundation to support software engineers of tomorrow.
          </Typography>
        </Box>

        {/* Founder Row */}
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Avatar Card */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                className="glass-panel"
                sx={{
                  p: 4,
                  borderRadius: 5,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '1px solid rgba(99, 102, 241, 0.15) !important',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Glowing backdrop border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '6px',
                    background: 'linear-gradient(to right, #6366f1, #14b8a6)',
                  }}
                />

                <Avatar
                  sx={{
                    width: 110,
                    height: 110,
                    background: 'linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)',
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: "'Outfit', sans-serif",
                    mb: 3,
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.35)',
                    border: '3px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {founder.avatarInitials}
                </Avatar>

                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, color: '#f8fafc' }}>
                  {founder.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#14b8a6', fontWeight: 600, mb: 3 }}>
                  {founder.role}
                </Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: 20,
                    borderColor: 'rgba(99, 102, 241, 0.3)',
                    color: '#a5b4fc',
                    '&:hover': {
                      borderColor: '#6366f1',
                      background: 'rgba(99, 102, 241, 0.08)',
                    }
                  }}
                >
                  Connect on LinkedIn
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Side: Biography */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontFamily: "'Outfit', sans-serif",
                  mb: 3,
                  background: 'linear-gradient(135deg, #f8fafc 50%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Founder's Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '1.08rem',
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                {founder.bio}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748b',
                  lineHeight: 1.7,
                }}
              >
                At Dakshya, we believe talent is universal, but opportunities are not. Our goal is to scale this mentorship network to reach thousands of students across regional universities, providing them with technical expertise, soft skills training, and direct pathways to top-tier software companies.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
