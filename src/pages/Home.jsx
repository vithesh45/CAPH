import React from 'react';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyChoose from '../components/home/WhyChoose';
import HowWeWork from '../components/home/HowWeWork';
import Industries from '../components/home/Industries';
import CTABand from '../components/home/CTABand';

const Home = () => {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <WhyChoose />
      <HowWeWork />
      <Industries />
      <CTABand />
    </>
  );
};

export default Home;