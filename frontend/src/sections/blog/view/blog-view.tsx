"use client";

import { useScroll } from "framer-motion";
import ScrollProgress from "src/components/scroll-progress";
import MainLayout from "src/layouts/main/layout";

export default function BlogView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <h1>Blog View</h1>
    </MainLayout>
  );
}
