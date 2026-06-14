import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './views/Hero';
import AboutUs from './views/AboutUs';
import Mission from './views/Mission';
import HowItWorks from './views/HowItWorks';
import Testimonials from './views/Testimonials';
import GetInvolved from './views/GetInvolved';
import { Box } from '@mui/material';
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          backgroundColor: 'background.default',
          position: 'relative'
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <AboutUs />
          <Mission />
          <HowItWorks />
          <Testimonials />
          <GetInvolved />
        </Box>
        <Footer />
        <Analytics />
      </Box>
    </ThemeProvider>
  );
}

export default App;
