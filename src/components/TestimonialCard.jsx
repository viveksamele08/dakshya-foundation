import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Rating, Chip } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function TestimonialCard({ name, role, type, quote, avatarInitials, rating }) {
  const isStudent = type === 'student';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        pt: 2,
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 40px rgba(20, 184, 166, 0.12)',
          borderColor: 'rgba(20, 184, 166, 0.25)',
        },
      }}
    >
      {/* Decorative Quote Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          left: 24,
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: isStudent ? '#6366f1' : '#14b8a6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: '1.5rem' }} />
      </Box>

      <CardContent sx={{ p: 4, pt: 5, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {/* Rating & Chip */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Rating value={rating} readOnly size="small" sx={{ color: '#eab308' }} />
          <Chip
            label={isStudent ? 'Student Success' : 'Mentor Endorsement'}
            size="small"
            sx={{
              backgroundColor: isStudent ? 'rgba(99, 102, 241, 0.1)' : 'rgba(20, 184, 166, 0.1)',
              color: isStudent ? '#a5b4fc' : '#2dd4bf',
              border: `1px solid ${isStudent ? 'rgba(99, 102, 241, 0.2)' : 'rgba(20, 184, 166, 0.2)'}`,
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
        </Box>

        {/* Quote */}
        <Typography
          variant="body1"
          sx={{
            color: '#cbd5e1',
            fontStyle: 'italic',
            lineHeight: 1.7,
            mb: 4,
            flexGrow: 1
          }}
        >
          "{quote}"
        </Typography>

        {/* User Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              width: 46,
              height: 46,
              background: isStudent
                ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
                : 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
              fontWeight: 700,
              color: '#ffffff',
              fontSize: '1rem',
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            {avatarInitials}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 750, color: '#f8fafc' }}>
              {name}
            </Typography>
            <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mt: 0.25 }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
