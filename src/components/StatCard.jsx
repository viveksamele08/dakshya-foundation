import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function StatCard({ number, label, description, icon: Icon }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          background: 'linear-gradient(to bottom, #6366f1, #14b8a6)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 40px rgba(99, 102, 241, 0.15)',
          borderColor: 'rgba(99, 102, 241, 0.3)',
          '&::before': {
            opacity: 1,
          },
          '& .icon-wrapper': {
            transform: 'scale(1.1) rotate(5deg)',
            background: 'rgba(99, 102, 241, 0.15)',
            color: '#6366f1',
          }
        },
      }}
    >
      <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box
            className="icon-wrapper"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: '12px',
              backgroundColor: 'rgba(20, 184, 166, 0.1)',
              color: '#14b8a6',
              transition: 'all 0.3s ease',
            }}
          >
            {Icon && <Icon sx={{ fontSize: '1.8rem' }} />}
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              background: 'linear-gradient(135deg, #14b8a6 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {number}
          </Typography>
        </Box>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#f8fafc',
            mb: 1
          }}
        >
          {label}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8',
            lineHeight: 1.6
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
