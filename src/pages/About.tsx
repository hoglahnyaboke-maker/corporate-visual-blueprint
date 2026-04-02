import React from 'react';
import AboutSection from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Team from '../components/sections/Team';

const About = () => {
  return (
    <div className="pt-20">
      <AboutSection />
      <Timeline />
      <Team />
    </div>
  );
};

export default About;