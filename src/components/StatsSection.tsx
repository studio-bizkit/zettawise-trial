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
    <div className="flex justify-center w-full p-56 -mt-96 ">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${index < 2 ? "text-left" : "text-right"}`}
          >
            <div className="text-5xl"><HyperText duration={1200} delay={index*100}>{stat.value}</HyperText></div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
