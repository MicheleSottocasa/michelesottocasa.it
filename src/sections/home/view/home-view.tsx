import { useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';
// @mui
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeMyBackground from '../home-my-background';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  // This section of the code is responsible for handling navigation within the page.
  // The 'useLocation' hook from 'react-router-dom' is used to get the current location object which contains the 'hash' property.
  // The 'hash' property is a string beginning with a '#' symbol followed by the fragment identifier.
  // This 'hash' is then cleaned up to get the current section of the page the user is on.
  // If there is no 'hash', it defaults to 'hero'.
  // The 'document.getElementById' method is then used to get a reference to the HTML element with the id of the current section.
  // If such an element exists, 'scrollIntoView' method is used to scroll this element into the viewport.
  // The behavior 'smooth' indicates that the scrolling should happen smoothly.

  const { hash } = useLocation();
  let currentSection = hash.replace('#', '');

  if (hash === '') currentSection = 'hero1';

  // console.log(currentSection);

  const sectionCurrent = document.getElementById(currentSection);

  // console.log(sectionCurrent);

  if (sectionCurrent) {
    sectionCurrent.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <div id="hero1" />
      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
        id="background"
        className="section"
      >
        <HomeMyBackground />
      </Box>
    </>
  );
}
