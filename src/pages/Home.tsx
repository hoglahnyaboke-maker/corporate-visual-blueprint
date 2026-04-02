import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/About';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Timeline from '../components/sections/Timeline';
import CaseStudies from '../components/sections/CaseStudies';
import ComparisonTable from '../components/sections/ComparisonTable';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Timeline />
      <Team />
      <Testimonials />
      <ComparisonTable />
      <CaseStudies />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;