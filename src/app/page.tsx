"use client";
import { Navbar } from "@/components/ui/navbar";
import { LampContainer } from "@/components/ui/lamp-effect";
import { motion } from "framer-motion";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { StatsSection } from "@/components/StatsSection";
import { CanvasRevealEffectDemo3 } from "@/components/ServicesSection";

export default function Home() {
  const logos = [
    {
      image: "/images/members/1.png",
      alt: "Member Logo 1",
    },
    {
      image: "/images/members/2.png",
      alt: "Member Logo 2",
    },
    {
      image: "/images/members/3.png",
      alt: "Member Logo 3",
    },
    {
      image: "/images/members/4.png",
      alt: "Member Logo 4",
    },
  ];

  const stats = [
    {
      value: "295k",
      label: "CVE's till date",
    },
    {
      value: "454k",
      label: "Malware signatures detected",
    },
    {
      value: "3000",
      label: "Threat actors tracked",
    },
    {
      value: "170",
      label: "Global ICS advisories",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-background  items-center justify-center">
      <Navbar />
      <GridBackgroundDemo />
      <LampContainer />
      <motion.div className="relative flex flex-col justify-center items-center  pt-60 gap-4 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-black to-accent dark:from-white dark:to-accent bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-8xl "
        >
          Built to Secure
          <br />
          Critical Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center text-muted-foreground mx-auto text-3xl"
        >
          From cyber range simulations to vulnerability assessments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 flex gap-4"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-background text-black dark:text-white flex items-center px-12"
          >
            Explore
          </HoverBorderGradient>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col justify-center items-center  pt-60 gap-4"
      >
        <StatsSection stats={stats} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col justify-center items-center  mx-auto px-48"
      >
        <h2 className="text-center text-4xl font-bold mb-8">Our Services</h2>
        <CanvasRevealEffectDemo3 />
      </motion.div>

      <motion.div className="py-12 w-1/2 mx-auto overflow-hidden pt-64">
        <InfiniteMovingCards items={logos} direction="right" speed="fast" />
      </motion.div>
    </main>
  );
}
