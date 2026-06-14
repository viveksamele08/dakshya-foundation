import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginButton from './LoginButton';

const navItems = [
  { label: 'About', id: '#about-us' },
  { label: 'Mission', id: '#mission' },
  { label: 'Pillars', id: '#pillars' },
  { label: 'How It Works', id: '#how-it-works' },
  { label: 'Testimonials', id: '#testimonials' },
  { label: 'Get Involved', id: '#get-involved' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled 
            ? 'rgba(7, 10, 19, 0.75)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 75 }}>
            {/* Logo/Brand */}
            <Typography
              variant="h6"
              component="div"
              onClick={() => scrollToSection('#hero')}
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #f8fafc 40%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              Dakshya <Box component="span" sx={{ color: '#14b8a6', WebkitTextFillColor: 'initial' }}>Foundation</Box>
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Typography
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: '#94a3b8',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#f8fafc'
                    }
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* CTA & Mobile Menu Trigger */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <LoginButton />
              </Box>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FavoriteIcon />}
                onClick={() => scrollToSection('#get-involved')}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  borderRadius: 20,
                  fontSize: '0.85rem',
                  py: 1,
                  px: 2.5
                }}
              >
                Donate Now
              </Button>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: '280px',
            background: '#070a13',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mb: 4,
            background: 'linear-gradient(135deg, #f8fafc 40%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Dakshya Foundation
        </Typography>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  borderRadius: 2,
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.08)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    sx: { fontWeight: 500, color: '#f8fafc' }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', mb: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <LoginButton />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<FavoriteIcon />}
            onClick={() => scrollToSection('#get-involved')}
            sx={{ borderRadius: 2 }}
          >
            Donate Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
