"use client";
import React, { useState } from "react";
import {
  Building2,
  GitBranch,
  Network,
  Search,
  Shield,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const services = [
  {
    icon: <Users size={"35px"} />,
    title: "Consulting & Advisory",
    desc: "Enterprises face evolving cyber threats and strict regulations, making effective cybersecurity programs essential.",
  },
  {
    icon: <Shield size={"35px"} />,
    title: "Cyber Range for OT & IT",
    desc: "Multiple security tools increase complexity, risking performance and network resilience.",
  },
  {
    icon: <Search size={"35px"} />,
    title: "IT & OT Security Assessment",
    desc: "Assess your digital network’s security to improve resilience and reduce cyber-attack risks.",
  },
  {
    icon: <GitBranch size={"35px"} />,
    title: "Security in DevOps",
    desc: "Integrate security automation throughout the software development lifecycle for safer releases.",
  },
  {
    icon: <Building2 size={"35px"} />,
    title: "OEM Centric Solutions",
    desc: "Acting as System Integrators, we provide tailored security services for better fitment.",
  },
  {
    icon: <Network size={"35px"} />,
    title: "Network Solutions",
    desc: "Thoroughly assess network hardware, software, and setup to understand your infrastructure.",
  },
];

export function CanvasRevealEffectDemo3() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="h-[45rem] w-full relative mb-96 md:mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleCardClick(index)}
            className="relative group transition-all duration-300 cursor-pointer"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="relative bg-white dark:bg-background overflow-hidden transition-all duration-300 hover:scale-102"
              animate={{
                height: expandedCard === index ? "auto" : "300px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 p-0.5 dark:bg-neutral-800 bg-muted-foreground/20 group-hover:bg-gradient-to-b group-hover:from-primary group-hover:to-background transition-all duration-1000">
                <div className="w-full h-full bg-white dark:bg-background"></div>
              </div>

              <div className="absolute translate-y-3 inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.1)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.1)_0%,_transparent_120%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <div className="relative z-10 px-10 py-12 h-full">
                <div className="flex flex-col h-full">
                  <div className="text-2xl text-black/60 dark:text-white/60 dark:group-hover:text-primary transition-colors duration-1000">
                    {service.icon}
                  </div>

                  <h3 className="text-xl md:text-3xl font-regular leading-tight mt-20 md:mt-auto max-w-2/3 text-black dark:text-white mb-">
                    {service.title}
                  </h3>

                  <AnimatePresence>
                    {(hoveredIndex === index || expandedCard === index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          className="text-black/70 dark:text-white/70 mt-2 text-xs"
                        >
                          {service.desc}
                        </motion.p>

                        {/* Mobile-only expand indicator */}
                        <motion.div
                          className="mt-4 md:hidden flex items-center text-black/70 dark:text-white/70 text-sm font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Tap to{" "}
                          {expandedCard === index ? "collapse" : "expand"}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Desktop-only hover hint */}
                  {hoveredIndex !== index && expandedCard !== index && (
                    <div className="mt-auto">
                      {/* <div className="hidden md:block text-black/50 dark:text-white/50 text-sm">
                        Hover to learn more
                      </div> */}
                      <div className="md:hidden text-black/50 dark:text-white/50 text-sm">
                        Tap to learn more
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Canvas Reveal Effect */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <CanvasRevealEffect
                      animationSpeed={5}
                      containerClassName="bg-transparent"
                      colors={[
                        [211, 37, 37],
                        [211, 37, 37],
                      ]}
                      opacities={[
                        0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 1,
                      ]}
                      dotSize={4}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
