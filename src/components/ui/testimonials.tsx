"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "./marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-[#f0abfc] p-1 py-0.5 font-bold text-[#d946ef] dark:bg-[#f0abfc] dark:text-[#d946ef]",
        className
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  img?: string;
  className?: string;
  [key: string]: unknown;
}

export function TestimonialCard({
  name,
  img,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 p-4 rounded-3xl overflow-visible",
        // light styles
        "border border-neutral-200 bg-white hover:border-[#3aa68f]/10 hover:[box-shadow:0_0_10px_#3aa68f,0_0_20px_#3aa68f] transition-shadow duration-300",

        // dark styles
        "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] hover:[box-shadow:0_0_20px_#3aa68f,0_0_40px_#3aa68f] transition-shadow duration-300",
        className
      )}
      {...props}
    >
      <div className="flex w-full select-none items-center justify-center gap-5">
        <Image
          width={80}
          height={80}
          src={img || ""}
          alt={name}
          className="w-auto h-auto invert-100 mix-blend-difference"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  { name: "Ambuja Neotia", img: "/images/clients/1.png" },
  {
    name: "Aditya Birla Group",
    img: "/images/clients/2.png",
  },
  { name: "Bandhan Financial Services", img: "/images/clients/3.png" },
  { name: "TCG Crest", img: "/images/clients/4.png" },
  { name: "Power System Operation Corporation", img: "/images/clients/5.png" },
  { name: "Medica Super Speciality Hospital", img: "/images/clients/6.png" },
  { name: "Sahaj", img: "/images/clients/7.png" },
  { name: "Rakuten (Japan)", img: "/images/clients/8.png" },
  { name: "Alumnus Software Ltd", img: "/images/clients/9.png" },
  { name: "Peerless Hospital", img: "/images/clients/10.png" },
  { name: "GKB Opticals", img: "/images/clients/11.png" },
  { name: "PS Group", img: "/images/clients/12.png" },
  { name: "IMS India", img: "/images/clients/13.png" },
  {
    name: "Synergic Softek Solutions Pvt. Ltd.",
    img: "/images/clients/14.png",
  },
  { name: "Webel Technology Limited", img: "/images/clients/15.png" },
  { name: "Macaws Infotech", img: "/images/clients/16.png" },
  { name: "Novasol (Dubai)", img: "/images/clients/17.png" },
  { name: "Kolkata Police", img: "/images/clients/18.png" },
  { name: "Prime Infoserv", img: "/images/clients/19.png" },
  { name: "Pricoris", img: "/images/clients/20.png" },
  { name: "NOQODI (Dubai)", img: "/images/clients/21.png" },
  { name: "Emaratech (Dubai)", img: "/images/clients/22.png" },
  { name: "Electrosteel Castings Limited", img: "/images/clients/23.png" },
  { name: "ICRA Analytics", img: "/images/clients/24.png" },
  {
    name: "Central Board Of Irrigation & Power",
    img: "/images/clients/25.png",
  },
  { name: "Grid Controller of India Limited", img: "/images/clients/26.png" },
  { name: "NCIIPC India", img: "/images/clients/27.png" },
  { name: "ITC Limited", img: "/images/clients/28.png" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-10">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        Our Trusted Clients
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        We&apos;re proud to partner with industry leaders and innovative
        organizations <span className="text-primary">worldwide</span>
      </h3>
      <div className="relative mt-6 max-h-96 overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 4))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:5s]": i === 1,
                  "[--duration:12s]": i === 2,
                  "[--duration:10s]": i === 3,
                  "[--duration:15s]": i === 4,
                })}
              >
                {testimonials.slice(i * 4, (i + 1) * 4).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background via-background/60 to-transparent"></div>
      </div>
    </section>
  );
}
