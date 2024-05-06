"use client";

import { useEffect } from "react";
import { useScroll } from "framer-motion";
import Box from "@mui/material/Box";
import ScrollProgress from "src/components/scroll-progress";
import HomeHero from "../home-hero";
import HomeMyBackground from "../home-my-background";
import HomeAboutMe from "../home-about-me";
import HomeProjects from "../home-projects";
import MainLayout from "src/layouts/main";

export default function HomeView() {
  useEffect(() => {
    const handleHashScroll = () => {
      const { hash } = window.location;
      let currentSection = hash.replace("#", "");

      if (hash === "") currentSection = "hero1";

      const sectionCurrent = document.getElementById(currentSection);

      if (sectionCurrent) {
        sectionCurrent.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashScroll();

    // Listen to hash change events for scrolling
    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <div id="hero" />
      <HomeHero />

      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          bgcolor: "background.default",
        }}
        id="about-me"
        className="section"
      >
        <HomeAboutMe />
        <HomeMyBackground />
        <HomeProjects />
      </Box>
    </MainLayout>
  );
}
