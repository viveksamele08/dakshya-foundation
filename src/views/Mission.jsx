import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import StatCard from '../components/StatCard';
import { motion } from 'framer-motion';
import { pillars, missionConfig } from '../constants/content';

export default function Mission() {
  return (
    <Box
      id="mission"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'rgba(11, 15, 25, 0.5)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        {/* About Section Header */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
                {missionConfig.subtitle}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.25,
                }}
              >
                {missionConfig.title}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Typography variant="body1" sx={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, mb: 2 }}>
                {missionConfig.description1}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {missionConfig.description2}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Pillars Headline */}
        <Box id="pillars" sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              fontFamily: "'Outfit', sans-serif",
              mb: 2
            }}
          >
            {missionConfig.pillarsTitle}
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto' }}>
            {missionConfig.pillarsSubtitle}
          </Typography>
        </Box>

        {/* Pillar Cards */}
        <Grid container spacing={4}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ height: '100%' }}
              >
                <StatCard
                  number={pillar.number}
                  label={pillar.label}
                  description={pillar.description}
                  icon={pillar.icon}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
