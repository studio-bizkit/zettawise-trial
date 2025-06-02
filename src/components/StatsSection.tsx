import React from "react";
import { HyperText } from "./ui/hyper-text";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="relative flex justify-center w-full px-4 md:px-56">
      <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-left w-full md:w-fit"
          >
            <div className="text-3xl md:text-5xl text-black/80 dark:text-white/80">
              <HyperText duration={1200} delay={index*100}>{stat.value}</HyperText>
            </div>
            <div className="text-sm text-black/60 dark:text-white/60 max-w-3/4">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
