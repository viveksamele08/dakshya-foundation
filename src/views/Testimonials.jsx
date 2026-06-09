import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsConfig } from '../constants/content';

export default function Testimonials() {
  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'rgba(11, 15, 25, 0.3)',
        position: 'relative',
        zIndex: 1,
      }}
    >
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
            {testimonialsConfig.subtitle}
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
            {testimonialsConfig.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto' }}>
            {testimonialsConfig.description}
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={5} sx={{ mt: 2 }}>
          {testimonialsConfig.testimonials.map((t, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ height: '100%' }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
