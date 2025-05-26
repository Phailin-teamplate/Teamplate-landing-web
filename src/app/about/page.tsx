
import React from 'react';
import PageHero from '@/src/components/PageHero';
import OurStory from './OurStory';
import OurValues from './OurValues';
import TeamSection from './TeamSection';
import MissionStatement from './MissionStatement';
import Partners from '@/src/components/Partners';

const About = () => {
  return (
    <section className="w-full" id='about'>
      <PageHero
        title="About TEAMPLATE"
        subtitle="Our story, mission, and the team behind our success"
      />
      <OurStory />
      <OurValues />
        <Partners />
      <TeamSection />
      <MissionStatement />
    </section>
  );
};

export default About;
