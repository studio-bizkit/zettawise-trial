"use client";
import React from "react";
import { Settings } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const services = [
  {
    title: "Consulting & Advisory",
    icon: <Settings size={"30px"} />,
    desc: "Cyber Range is used to validate the security posture of client's networks with real applications and a complete range of threat vectors. By simulating real-world legitimate traffic.",
  },
  {
    title: "Network Solutions",
    icon: <Settings size={"30px"} />,
    desc: "Cyber Range is used to validate the security posture of client's networks with real applications and a complete range of threat vectors. By simulating real-world legitimate traffic.",
  },
  {
    title: "Consulting & Advisory",
    icon: <Settings size={"30px"} />,
    desc: "Cyber Range is used to validate the security posture of client's networks with real applications and a complete range of threat vectors. By simulating real-world legitimate traffic.",
  },
  {
    title: "Network Solutions",
    icon: <Settings size={"30px"} />,
    desc: "Cyber Range is used to validate the security posture of client's networks with real applications and a complete range of threat vectors. By simulating real-world legitimate traffic.",
  },
  {
    title: "Consulting & Advisory",
    icon: <Settings size={"30px"} />,
    desc: "Cyber Range is used to validate the security posture of client's networks with real applications and a complete range of threat vectors. By simulating real-world legitimate traffic.",
  },
  {
    title: "Network Solutions",
    icon: <Settings size={"30px"} />,
    desc: "Cyber Range is used to validate the security posture of client's networks with real applications and a complete range of threat vectors. By simulating real-world legitimate traffic.",
  },
];

export function CanvasRevealEffectDemo3() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="h-[40rem] w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-[40px] border-4 border-neutral-200 dark:border-neutral-800 hover:border-primary/20 bg-white dark:bg-background overflow-hidden group transition-all duration-300 h-[300px] md:min-h-[400px] cursor-pointer hover:scale-105"
          >
            <div className="absolute translate-y-36 inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.1)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.6)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-800 pointer-events-none" />

            <div className="relative z-10 px-10 py-12 h-full flex flex-col justify-between text-black dark:text-white">
              <div className="text-9xl text-black/60 dark:text-white/60">
                {service.icon}
              </div>

              <h3 className="text-3xl font-regular leading-tight mt-auto max-w-3xs text-black dark:text-white">
                {service.title}
              </h3>
            </div>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                      [58, 166, 143],
                      [58, 166, 143],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
