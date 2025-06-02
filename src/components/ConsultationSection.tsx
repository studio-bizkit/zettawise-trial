import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
// import { FlickeringGrid } from "./ui/flickering-grid";
// import { useEffect, useState } from "react";
import { GridBackgroundDemo } from "./ui/grid-background";
import { ArrowRight } from "lucide-react";

export const ConsultationSection = () => {
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     if (typeof window !== 'undefined') {
  //       const container = document.getElementById('consultation-section-container');
  //       if (container) {
  //         setDimensions({
  //           width: container.clientWidth,
  //           height: container.clientHeight,
  //         });
  //       }
  //     }
  //   };

  //   updateDimensions();
  //   window.addEventListener('resize', updateDimensions);

  //   return () => window.removeEventListener('resize', updateDimensions);
  // }, []);

  return (
    <motion.div
      id="consultation-section-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col items-center justify-center py-32 px-8 md:px-24 overflow-hidden rounded-4xl"
    >
      <GridBackgroundDemo half="bottom" />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent z-[5]" /> */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4 w-full max-w-[1000px] h-[600px] blur-3xl z-[5] opacity-40" style={{ background: 'radial-gradient(circle, #3aa68f 40%, #3aa68f00 180%)' }} />
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 z-10 max-w-2xl">
        Let&apos;s discuss about how we can help make your business more <span className="text-primary tracking-normal font-cursive italic">secured</span>
      </h2>
      
      <HoverBorderGradient
        containerClassName="rounded-full z-10"
        as="button"
        className="bg-[#172320] text-primary dark:text-primary flex items-center px-8 md:px-12"
      >
        {/* Get consultation <ArrowRight className="ml-2"  /> */}
      </HoverBorderGradient>
    </motion.div>
  );
}; 