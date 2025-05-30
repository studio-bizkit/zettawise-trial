import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function GridBackgroundDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="absolute top-0 -mt-[440px] left-0 w-full h-full z-0 overflow-hidden bg-white dark:bg-background"
    >
      {/* Bottom Half Grid */}
      <div
        className={cn(
          "absolute top-1/2 w-full h-1/2",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Optional radial gradient overlay for subtle fade effect */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />
    </motion.div>
  );
}
