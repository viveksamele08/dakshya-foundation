import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Paper,
  MenuItem,
  Snackbar,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useAuth0 } from '@auth0/auth0-react';
import { siteConfig, getInvolvedConfig } from '../constants/content';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`involvement-tabpanel-${index}`}
      aria-labelledby={`involvement-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function GetInvolved() {
  const { user, isAuthenticated } = useAuth0();
  const [activeTab, setActiveTab] = useState(0);
  const [donationAmount, setDonationAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    college: '',
    city: '',
    techInterest: 'Full Stack Development',
    resumeLink: '',
  });

  // Volunteer Form State
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    role: 'Mentor',
    expertise: 'Backend Development',
    linkedin: '',
  });

  // Pre-fill form with authenticated user data
  useEffect(() => {
    if (isAuthenticated && user) {
      setStudentForm((prev) => ({
        ...prev,
        name: prev.name || user.name || '',
        email: prev.email || user.email || '',
      }));
      setVolunteerForm((prev) => ({
        ...prev,
        name: prev.name || user.name || '',
        email: prev.email || user.email || '',
      }));
    }
  }, [isAuthenticated, user]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDonationChange = (event, newAmount) => {
    if (newAmount !== null) {
      setDonationAmount(newAmount);
      setCustomAmount('');
    }
  };

  const handleCustomDonationChange = (event) => {
    const val = event.target.value;
    if (val === '' || /^\d+$/.test(val)) {
      setCustomAmount(val);
      setDonationAmount('custom');
    }
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    if (!studentForm.name || !studentForm.email || !studentForm.college || !studentForm.city) {
      showSnackbar('Please fill out all required fields.', 'error');
      return;
    }
    // submit to Netlify forms
    postToNetlify('student-application', studentForm)
      .then(() => showSnackbar('Application submitted successfully! Our volunteer team will contact you shortly.', 'success'))
      .catch(() => showSnackbar('Submission failed. Please try again later.', 'error'));
    setStudentForm({
      name: '',
      email: '',
      college: '',
      city: '',
      techInterest: 'Full Stack Development',
      resumeLink: '',
    });
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (!volunteerForm.name || !volunteerForm.email || !volunteerForm.linkedin) {
      showSnackbar('Please fill out all required fields.', 'error');
      return;
    }
    postToNetlify('volunteer-application', volunteerForm)
      .then(() => showSnackbar(`Thank you for applying as a ${volunteerForm.role}! We will review your profile and reach out.`, 'success'))
      .catch(() => showSnackbar('Submission failed. Please try again later.', 'error'));
    setVolunteerForm({
      name: '',
      email: '',
      role: 'Mentor',
      expertise: 'Backend Development',
      linkedin: '',
    });
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    if (!finalAmount || parseInt(finalAmount) <= 0) {
      showSnackbar('Please enter or select a valid donation amount.', 'error');
      return;
    }
    postToNetlify('donation', { amount: finalAmount })
      .then(() => showSnackbar(`Thank you! Donation of ₹${finalAmount} recorded. You are supporting our mission!`, 'success'))
      .catch(() => showSnackbar('Donation submission failed. Please try again later.', 'error'));
  };

  const postToNetlify = async (formName, payload) => {
    const formData = new URLSearchParams();
    formData.append('form-name', formName);
    
    // Include auth0 user ID if authenticated
    if (isAuthenticated && user?.sub) {
      formData.append('auth0_user_id', user.sub);
    }
    
    Object.keys(payload).forEach((key) => {
      if (payload[key] !== undefined && payload[key] !== null) {
        formData.append(key, payload[key]);
      }
    });

    const resp = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });
    if (!resp.ok) throw new Error('Form submission failed');
    return resp;
  };

  // Dynamic Donation Impact Text
  const getDonationImpact = () => {
    const amount = donationAmount === 'custom' ? parseInt(customAmount) || 0 : parseInt(donationAmount);
    if (amount <= 0) return 'Choose an amount to see the impact of your support.';
    if (amount < 25) return getInvolvedConfig.donationImpacts.low;
    if (amount < 50) return getInvolvedConfig.donationImpacts.medium;
    if (amount < 100) return getInvolvedConfig.donationImpacts.high;
    return getInvolvedConfig.donationImpacts.premium;
  };

  return (
    <Box
      id="get-involved"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'rgba(7, 10, 19, 0.4)',
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
            {getInvolvedConfig.subtitle}
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
            {getInvolvedConfig.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto' }}>
            {getInvolvedConfig.description}
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left Side: Forms */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                className="glass-panel"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                }}
              >
                <Box sx={{ borderBottom: 1, borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    textColor="secondary"
                    indicatorColor="secondary"
                  >
                    <Tab
                      label="Apply as Student"
                      icon={<SchoolIcon />}
                      iconPosition="start"
                      sx={{ fontWeight: 600 }}
                    />
                    <Tab
                      label="Join as Mentor / Volunteer"
                      icon={<VolunteerActivismIcon />}
                      iconPosition="start"
                      sx={{ fontWeight: 600 }}
                    />
                  </Tabs>
                </Box>

                {/* Tab 1: Student Application */}
                <TabPanel value={activeTab} index={0}>
                  <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3 }}>
                    {getInvolvedConfig.studentSubtitle}
                  </Typography>
                  <form onSubmit={handleStudentSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                          required
                          value={studentForm.name}
                          onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          type="email"
                          variant="outlined"
                          required
                          value={studentForm.email}
                          onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="College / University"
                          variant="outlined"
                          required
                          value={studentForm.college}
                          onChange={(e) => setStudentForm({ ...studentForm, college: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="City"
                          variant="outlined"
                          required
                          value={studentForm.city}
                          onChange={(e) => setStudentForm({ ...studentForm, city: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Primary Tech Interest"
                          value={studentForm.techInterest}
                          onChange={(e) => setStudentForm({ ...studentForm, techInterest: e.target.value })}
                        >
                          <MenuItem value="Full Stack Development">Full Stack Development</MenuItem>
                          <MenuItem value="Data Structures & Algorithms">Data Structures & Algorithms</MenuItem>
                          <MenuItem value="Frontend Development">Frontend Development</MenuItem>
                          <MenuItem value="Backend & Cloud">Backend & Cloud</MenuItem>
                          <MenuItem value="Communication & Interview Prep">Communication & Interview Prep</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="GitHub / LinkedIn Link"
                          placeholder="https://..."
                          variant="outlined"
                          value={studentForm.resumeLink}
                          onChange={(e) => setStudentForm({ ...studentForm, resumeLink: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ py: 1.5 }}
                        >
                          Submit Application
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </TabPanel>

                {/* Tab 2: Mentor / Volunteer Application */}
                <TabPanel value={activeTab} index={1}>
                  <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3 }}>
                    {getInvolvedConfig.mentorSubtitle}
                  </Typography>
                  <form onSubmit={handleVolunteerSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                          required
                          value={volunteerForm.name}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          type="email"
                          variant="outlined"
                          required
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Role"
                          value={volunteerForm.role}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                        >
                          <MenuItem value="Mentor">Industry Mentor (1:1 Guides)</MenuItem>
                          <MenuItem value="Volunteer">NGO Operations Volunteer</MenuItem>
                          <MenuItem value="Speaker">Guest Speaker / Workshop Host</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Expertise Area"
                          value={volunteerForm.expertise}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, expertise: e.target.value })}
                        >
                          <MenuItem value="Frontend Development">Frontend Development</MenuItem>
                          <MenuItem value="Backend Development">Backend Development</MenuItem>
                          <MenuItem value="System Design">System Design & Cloud</MenuItem>
                          <MenuItem value="Communication Skills">Communication & HR Coaching</MenuItem>
                          <MenuItem value="Coordination">Event & NGO Coordination</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="LinkedIn Profile URL"
                          placeholder="https://linkedin.com/in/..."
                          variant="outlined"
                          required
                          value={volunteerForm.linkedin}
                          onChange={(e) => setVolunteerForm({ ...volunteerForm, linkedin: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ py: 1.5 }}
                        >
                          Submit Mentor / Volunteer Application
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </TabPanel>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Side: Donation Widget */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Paper
                className="glass-panel"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  border: '1px solid rgba(20, 184, 166, 0.15) !important',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative border glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(0,0,0,0) 70%)',
                  }}
                />

                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FavoriteBorderIcon sx={{ color: '#14b8a6' }} /> Support Our NGO
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8', mb: 4 }}>
                  {getInvolvedConfig.donationSubtitle}
                </Typography>

                <form onSubmit={handleDonateSubmit}>
                  {/* Preset Buttons */}
                  <ToggleButtonGroup
                    value={donationAmount}
                    exclusive
                    onChange={handleDonationChange}
                    fullWidth
                    sx={{
                      mb: 3,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1.5,
                      '& .MuiToggleButtonGroup-grouped': {
                        border: '1px solid rgba(255,255,255,0.08) !important',
                        borderRadius: '8px !important',
                        color: '#94a3b8',
                        '&.Mui-selected': {
                          borderColor: '#14b8a6 !important',
                          color: '#14b8a6',
                          backgroundColor: 'rgba(20, 184, 166, 0.08)',
                        }
                      }
                    }}
                  >
                    {getInvolvedConfig.donationTiers.map((tier) => (
                      <ToggleButton key={tier.value} value={tier.value} sx={{ flexGrow: 1 }}>
                        {tier.label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>

                  {/* Custom Amount */}
                  <TextField
                    fullWidth
                    label="Custom Amount (INR)"
                    variant="outlined"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={handleCustomDonationChange}
                    sx={{ mb: 3 }}
                  />

                  {/* Impact Message */}
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(20, 184, 166, 0.04)',
                      border: '1px dashed rgba(20, 184, 166, 0.2)',
                      mb: 4,
                      minHeight: 65,
                    }}
                  >
                    <Typography variant="body2" sx={{ color: '#14b8a6', fontWeight: 500 }}>
                      Impact: {getDonationImpact()}
                    </Typography>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="large"
                    sx={{ py: 1.8 }}
                  >
                    Proceed to Donate
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
