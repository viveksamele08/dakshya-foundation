import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { steps, howItWorksConfig } from '../constants/content';

export default function HowItWorks() {
  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background soft orb */}
      <div className="glow-orb orb-tertiary" />

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
            {howItWorksConfig.subtitle}
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
            {howItWorksConfig.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto' }}>
            {howItWorksConfig.description}
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Grid container spacing={4}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(30, 41, 59, 0.25)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: step.color,
                        boxShadow: `0 8px 30px rgba(${step.color === '#6366f1' ? '99, 102, 241' : step.color === '#14b8a6' ? '20, 184, 166' : '59, 130, 246'}, 0.15)`
                      }
                    }}
                  >
                    {/* Icon circle */}
                    <Box
                      sx={{
                        width: 65,
                        height: 65,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.color,
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        mb: 3,
                        boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <Icon sx={{ fontSize: '2rem' }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#f8fafc',
                        mb: 1.5,
                        fontSize: '1.05rem',
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
