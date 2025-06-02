import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface GridBackgroundDemoProps {
  half?: 'top' | 'bottom';
}

export function GridBackgroundDemo({ half = 'bottom' }: GridBackgroundDemoProps) {
  const isBottom = half === 'bottom';
  // const isTop = half === 'top';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute left-0 w-full z-0 overflow-hidden bg-white dark:bg-background",
        isBottom ? "top-1/2 h-1/2" : "bottom-1/2 h-1/2"
      )}
    >
      {/* Grid */}
      <div
        className={cn(
          "absolute w-full h-full",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Optional radial gradient overlay for subtle fade effect */}
      {/* Adjusted mask to apply to the respective half */}
      <div className={cn("pointer-events-none absolute inset-0 bg-white dark:bg-background",
                         isBottom ? "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" : "[mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_80%)]" // Example mask for top half, might need adjustment
      )} />
    </motion.div>
  );
}
