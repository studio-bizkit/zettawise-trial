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
    <div className="flex justify-center w-full p-56 -mt-96">
      <div className="flex flew-row gap-8 w-full justify-between">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-left w-fit"
          >
            <div className="text-5xl text-black/80 dark:text-white/80"><HyperText duration={1200} delay={index*100}>{stat.value}</HyperText></div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
