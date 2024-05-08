"use client";

import { useScroll } from "framer-motion";
import ScrollProgress from "src/components/scroll-progress";

export default function BlogView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <h1>Blog View</h1>
    </>
  );
}
