import React from 'react';
import AboutHeroSection from '../components/Sections/AboutUs/AboutUsSection';
import OurStorySection from '../components/Sections/AboutUs/OurStorySection';
import MissionSection from '../components/Sections/AboutUs/MissionSection';
import StatisticsSection from '../components/Sections/AboutUs/StatisticsSection';

import storyImage from '../assets/images/logo.jfif';

export default function About() {
  return(
    <>
      <div>
        <AboutHeroSection />
      </div>

      <div className="container mx-auto px-6 py-16">
        <OurStorySection storyImage={storyImage} /> 
      </div>

      <div>
        <MissionSection />
      </div>

      <div>
        <StatisticsSection />
      </div>

    </>
  )

}
