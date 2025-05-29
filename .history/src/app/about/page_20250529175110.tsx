import React from "react";
import PageHero from "@/src/components/PageHero";
import OurStory from "./OurStory";
import OurValues from "./OurValues";
import TeamSection from "./TeamSection";
import MissionStatement from "./MissionStatement";
import Partners from "@/src/components/Partners";
import Activity from "@/src/components/pages/Activity";

export const metadata = {
  title: "About | TEAMPLATE",
  description:
    "Learn about TEAMPLATE — our story, mission, team, and values that drive our innovation.",
  keywords: ["teamplate", "about", "our story", "mission", "values", "team"],
  openGraph: {
    title: "About | TEAMPLATE",
    description:
      "Discover TEAMPLATE's story, mission, and the people behind our success.",
    url: "https://yourdomain.com/about",
    siteName: "TEAMPLATE",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.jpg", // ✅ Replace with actual path
        width: 1200,
        height: 630,
        alt: "About TEAMPLATE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const About = () => {
  return (
    <section className="w-full" id="about">
      <PageHero
        title="About TEAMPLATE"
        subtitle="Our story, mission, and the team behind our success"
      />
      <OurStory />
      <OurValues />
      <Partners />
      <Activity showHero={false} limit={3} showMoreButton={true} showIntro={true}/>
      <TeamSection />
      <MissionStatement />
    </section>
  );
};

export default About;
