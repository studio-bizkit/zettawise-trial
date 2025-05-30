"use client";
import { Navbar } from "@/components/ui/navbar";
import { LampContainer } from "@/components/ui/lamp-effect";
import { motion } from "framer-motion";
import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <GridBackgroundDemo />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-[315px] bg-gradient-to-br from-black to-accent dark:from-white dark:to-accent bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Built to Secure <br />
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
          className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          From cyber range simulations to vulnerability assessments,
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 flex gap-4"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-background text-black dark:text-white flex items-center space-x-2"
          >
            Explore
          </HoverBorderGradient>
        </motion.div>
      </LampContainer>
    </main>
  );
}
