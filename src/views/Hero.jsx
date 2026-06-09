import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { heroConfig } from '../constants/content';

export default function Hero() {
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
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Decorative Orbs */}
      <div className="glow-orb orb-primary" />
      <div className="glow-orb orb-secondary" />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Box>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2,
                    py: 0.8,
                    borderRadius: 20,
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#14b8a6',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      color: '#a5b4fc',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {heroConfig.badgeText}
                  </Typography>
                </Box>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.3rem', sm: '3.3rem', md: '4.2rem' },
                    lineHeight: 1.15,
                    mb: 3,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  {heroConfig.headlinePrefix} <br />
                  <Box
                    component="span"
                    className="text-gradient-cyan"
                    sx={{ fontWeight: 800 }}
                  >
                    {heroConfig.headlineHighlight}
                  </Box>{' '}
                  {heroConfig.headlineSuffix}
                </Typography>
              </motion.div>

              {/* Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    color: '#94a3b8',
                    mb: 4,
                    maxWidth: '600px',
                    lineHeight: 1.7,
                  }}
                >
                  {heroConfig.subText}
                </Typography>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2.5}
                  sx={{ mb: 6 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<RocketLaunchIcon />}
                    onClick={() => handleScrollToSection('#get-involved')}
                    sx={{
                      fontSize: '1rem',
                      py: 1.5,
                      px: 3.5,
                    }}
                  >
                    {heroConfig.primaryCtaText}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<GroupAddIcon />}
                    onClick={() => handleScrollToSection('#pillars')}
                    sx={{
                      fontSize: '1rem',
                      py: 1.5,
                      px: 3.5,
                    }}
                  >
                    {heroConfig.secondaryCtaText}
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          {/* Graphical Mockup / Card Frame */}
          <Grid item xs={12} lg={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                className="glass-panel"
                sx={{
                  p: 4,
                  borderRadius: 6,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    pointerEvents: 'none',
                  }
                }}
              >
                {/* Code UI Mockup */}
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </Box>
                <Typography variant="subtitle2" sx={{ color: '#a5b4fc', fontFamily: 'monospace', mb: 1.5 }}>
                  // Empowering Malaviyan Initiative
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'monospace', mb: 3 }}>
                  const dakshyaMission = &#123;<br />
                  &nbsp;&nbsp;founded: 2026,<br />
                  &nbsp;&nbsp;focus: "Regional Talents",<br />
                  &nbsp;&nbsp;corePillars: ["Coding", "Comm Skills", "Mentorship"],<br />
                  &nbsp;&nbsp;industryMentors: true,<br />
                  &nbsp;&nbsp;supportVolunteers: true<br />
                  &#125;;
                </Typography>
                <Box sx={{ p: 2, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Typography variant="body2" sx={{ color: '#f8fafc', fontWeight: 600, mb: 1 }}>
                    🚀 Industry Mentors from
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Google, Amazon, Microsoft, Top Startups, and Alumni networks.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
