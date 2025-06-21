import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import NewsSection from '../components/Sections/NewsSection';
import FeaturesSection from '../components/Sections/FeaturesSection';
import OurStorySection from '../components/Sections/AboutUs/OurStorySection';

import bgImage from '../assets/images/bg.jfif';

export default function Home() {
  return (
    <>
      <HeroSection backgroundImage={bgImage} />
      <div id="Features-Section">
        <FeaturesSection />
      </div>
      <div id="News-section">
        <NewsSection />
      </div>


    </>
  );
}