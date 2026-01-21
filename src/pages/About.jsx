import React from 'react';
import { CompanyIntro, BrandExplanation, MVVSection } from '../components/about/AboutComponents';
import CTABand from '../components/home/CTABand';

const About = () => {
  return (
    <>
      <CompanyIntro />
      <BrandExplanation />
      <MVVSection />
      <CTABand />
    </>
  );
};

export default About;