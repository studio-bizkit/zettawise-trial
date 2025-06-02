"use client";
import { LampContainer } from "@/components/ui/lamp-effect";
import { motion } from "framer-motion";
// import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { StatsSection } from "@/components/StatsSection";
import { CanvasRevealEffectDemo3 } from "@/components/ServicesSection";
import SectorSection from "@/components/SectorSection";
import { FlickerBackgroundDemo } from "@/components/ui/flickering-grid";
import { Testimonials } from "@/components/ui/testimonials";
import { ConsultationSection } from "@/components/ConsultationSection";

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
    <main className="w-full min-h-screen bg-background items-center justify-center">
      {/* <NavbarDemo /> */}
      <FlickerBackgroundDemo />
      {/* <GridBackgroundDemo /> */}
      <LampContainer />
      <motion.div className="relative flex flex-col justify-center items-center pt-32 md:pt-80 gap-4 mb-24 md:mb-36 px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-black to-accent dark:from-white dark:to-accent bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-7xl px-4 md:px-0"
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
          className="text-center text-muted-foreground mx-auto text-lg md:text-2xl px-4 md:px-0"
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
            className="bg-background text-black dark:text-white flex items-center px-8 md:px-12"
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
        className="relative flex flex-col justify-center items-center mb-24 md:mb-48 w-full md:w-1/2 mx-auto overflow-hidden gap-8 px-4 md:px-0"
      >
        <p className="text-muted">Affiliated with</p>
        <InfiniteMovingCards items={logos} direction="right" speed="fast" />
      </motion.div>
      <div className="relative flex flex-col gap-96 md:gap-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col w-full justify-center items-center mx-auto px-12 md:px-48"
        >
          <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
            Offered
            <span className="text-primary text-center tracking-normal font-cursive italic text-6xl leading-0">
              {" "}
              Services
            </span>
          </h2>
          <CanvasRevealEffectDemo3 />
        </motion.div>
      </div>
      <div className="relative flex flex-col gap-96 md:gap-48 mb-32 md:mb-36 mt-12 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative md:flex flex-col justify-center items-center px-4 md:px-0 hidden"
        >
          <StatsSection stats={stats} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col px-24 md:px-56 gap-96 md:gap-12 pb-24"
      >
        <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
          <span className="text-primary text-center tracking-normal font-cursive italic text-6xl leading-0">
            Sectors{" "}
          </span>
          we focus
        </h2>
        <SectorSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col px-24 md:px-56 gap-96 md:gap-12 pb-24"
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col px-24 md:px-56 gap-96 md:gap-12 pb-24"
      >
        <ConsultationSection />
      </motion.div>
    </main>
  );
}
