"use client";

import { Banknote, Bolt, HeartPulse, Landmark, Phone, ShieldCheck, ShoppingBag, Train } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function SectorSection() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:max-h-[44rem] xl:grid-rows-3">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Bolt className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Power & Energy"
        description="Securing infrastructure powering the nation."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Banknote className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Banking & Financial"
        description="Protecting financial systems and digital assets."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Phone className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Telecom"
        description="Enabling secure communication networks."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Train className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Transport"
        description="Protecting mobility and transit infrastructure."
      />

      <GridItem
        area="md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]"
        icon={
          <HeartPulse className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Healthcare"
        description="Ensuring privacy and safety in health tech."
      />

      <GridItem
        area="md:[grid-area:3/7/4/13] xl:[grid-area:3/1/4/5]"
        icon={
          <ShieldCheck className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Strategic Public Enterprises"
        description="Strengthening the digital backbone of SPSEs."
      />

      <GridItem
        area="md:[grid-area:4/1/5/7] xl:[grid-area:3/5/4/9]"
        icon={<Landmark className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Government"
        description="Securing mission-critical public infrastructure."
      />

      <GridItem
        area="md:[grid-area:4/7/5/13] xl:[grid-area:3/9/4/13]"
        icon={
          <ShoppingBag className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Retail"
        description="Safeguarding retail systems and transactions."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          blur={1}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
