import CodeIcon from '@mui/icons-material/Code';
import ForumIcon from '@mui/icons-material/Forum';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

// General site configurations
export const siteConfig = {
  ngoName: 'Dakshya Foundation',
  foundedYear: '2026',
  foundedBy: 'Malaviyans',
  contactEmail: 'info@dakshyafoundation.org',
  location: 'Gorakhpur, Uttar Pradesh, India',
  founder: {
    name: 'Vivek Samele',
    role: 'Founder, Dakshya Foundation',
    linkedin: 'https://www.linkedin.com/in/viveksamele08',
    bio: 'Vivek Samele is a passionate software industry professional and an alumnus of Madan Mohan Malaviya University of Technology (Malaviyan). Guided by his experience in the tech ecosystem, he founded Dakshya Foundation in 2026. Vivek envisioned a platform where aspiring software developers from regional institutions and cities can obtain the precise, direct mentorship they need to kickstart and excel in their tech journeys, bridging the critical gap in coding, communication, and placement assistance.',
    avatarInitials: 'VS'
  }
};

// Hero section configs
export const heroConfig = {
  badgeText: `Founded in ${siteConfig.foundedYear} by ${siteConfig.foundedBy}`,
  headlinePrefix: 'Empowering',
  headlineHighlight: 'Emerging Tech Talent',
  headlineSuffix: 'to Lead the Software Race',
  subText: 'At Dakshya Foundation, we support students from regional colleges and cities to build successful software careers. Get direct 1:1 mentorship from industry leaders, intensive communication grooming, and job placement assistance.',
  primaryCtaText: 'Join the Mission',
  secondaryCtaText: 'Explore Pillars'
};

// Pillars data array
export const pillars = [
  {
    number: '01',
    label: 'Software Engineering',
    description: 'Master Data Structures, Algorithms, System Design, and Modern Software Development practices to match global standards.',
    icon: CodeIcon
  },
  {
    number: '02',
    label: 'Communication & Impact',
    description: 'Enhance your professional English, presentation style, soft skills, and confidence to crack interviews and excel at work.',
    icon: ForumIcon
  },
  {
    number: '03',
    label: 'Job & Career Assistance',
    description: 'Get 1:1 resume feedback, portfolio reviews, mock interviews, and referral support through our extensive industry network.',
    icon: WorkIcon
  }
];

// Mission & Pillars section configs
export const missionConfig = {
  subtitle: 'Our Mission & Purpose',
  title: 'Levelling the Playing Field for All Students',
  description1: 'Students outside major metro hubs possess immense potential, but often lack direct exposure, peer-networks, and technical guidance. Dakshya Foundation works to eliminate this disparity by offering structure and resources.',
  description2: `Founded in ${siteConfig.foundedYear} by Malaviyans, our NGO is powered by dedicated software engineers, product managers, and communication coaches working across top tech companies.`,
  pillarsTitle: 'Our Core Focus Pillars',
  pillarsSubtitle: 'We deliver structured guidance across three essential pillars designed to match production-grade professional standards.',
};

// Steps data array
export const steps = [
  {
    icon: AssignmentIndIcon,
    title: '1. Register & Apply',
    description: 'Submit your student profile or apply as a mentor/volunteer. Tell us about your background, career aspirations, or areas of expertise.',
    color: '#6366f1'
  },
  {
    icon: ConnectWithoutContactIcon,
    title: '2. Review & Matching',
    description: 'Our Volunteer team reviews applications and pairs you with a top industry mentor based on tech-stack, career goals, and skills gap.',
    color: '#14b8a6'
  },
  {
    icon: CastForEducationIcon,
    title: '3. Interactive Mentorship',
    description: 'Engage in 1:1 sessions, weekly webinars, resume critique circles, and coding mock interviews to sharpen your craft.',
    color: '#3b82f6'
  },
  {
    icon: MilitaryTechIcon,
    title: '4. Graduate & Excel',
    description: 'Build premium capstone projects, gain placement readiness certificates, and get connected to top companies through our referral networks.',
    color: '#ec4899'
  }
];

// How it works configs
export const howItWorksConfig = {
  subtitle: 'The Journey',
  title: 'How the Mentorship Program Works',
  description: 'We have structured a roadmap to guide motivated candidates through application, matching, mentorship, and career placement.',
};

// Testimonials configs
export const testimonialsConfig = {
  subtitle: 'Endorsements',
  title: 'What Our Community Says',
  description: 'Hear from the students who launched their careers, and the industry leaders who dedicate their time to mentor them.',
  testimonials: [
    {
      name: 'Aarav Srivastava',
      role: 'Software Engineer @ Microsoft (MMMUT Alumni)',
      type: 'student',
      quote: 'Coming from a regional college, I was completely lost in the DSA and system design race. My Dakshya mentor gave me structured feedback, mock interviews, and the confidence to crack Microsoft. It changed my career trajectory!',
      avatarInitials: 'AS',
      rating: 5
    },
    {
      name: 'Priya Verma',
      role: 'Associate Developer @ Salesforce',
      type: 'student',
      quote: 'The communication mentorship at Dakshya was a lifesaver. I had coding skills but struggled during HR rounds. The mock interview sessions and constructive critiques helped me express my thoughts clearly.',
      avatarInitials: 'PV',
      rating: 5
    },
    {
      name: 'Siddharth Roy',
      role: 'Staff Engineer @ Google (Volunteer Mentor)',
      type: 'mentor',
      quote: 'Being a Malaviyan, giving back to regional talent is highly fulfilling. The students at Dakshya are incredibly hungry to learn; they just need direction. The structured platform makes mentoring easy and impactful.',
      avatarInitials: 'SR',
      rating: 5
    },
    {
      name: 'Neha Pandey',
      role: 'Product Manager @ Amazon (Volunteer Speaker)',
      type: 'mentor',
      quote: 'Dakshya Foundation fills a critical gap. Colleges teach theory, but Dakshya teaches the real-world skills and communication needed to survive and thrive in corporate ecosystems. Proud to support the mission.',
      avatarInitials: 'NP',
      rating: 5
    }
  ]
};

// Get Involved & Donation configs
export const getInvolvedConfig = {
  subtitle: 'Action Center',
  title: 'Join Our Mission',
  description: 'Whether you want to learn, mentor, volunteer, or support us financially—every effort brings us closer to empowering regional college students.',
  studentSubtitle: 'Are you a student from a regional college or city lagging in software preparation or communication? Fill out the form to connect with our volunteer mentors.',
  mentorSubtitle: 'Want to guide the next generation of engineers? Help us as a mentor or operations volunteer. Malaviyans and industry leaders are welcome!',
  donationSubtitle: `${siteConfig.ngoName} runs entirely on volunteer efforts and donations. Help us scale our setup, arrange platforms, and provide learning materials to students.`,
  donationTiers: [
    { value: '15', label: '₹1500' },
    { value: '30', label: '₹3000' },
    { value: '50', label: '₹5000' },
    { value: '100', label: '₹10000' }
  ],
  donationImpacts: {
    low: 'Sponsors digital learning resources and platform access for 1 student.',
    medium: 'Sponsors a 1-month Communication & Mock Interview workshop session for 2 students.',
    high: 'Sponsors standard 1:1 mentorship and mock tests for 3 students for 2 months.',
    premium: 'Provides complete career guidance, placement assistance, and mentorship resources for a student cohort.'
  }
};
