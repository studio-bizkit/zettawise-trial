"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Releases", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t dark:border-neutral-800 border-neutral-800/30 bg-background">
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map(section => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground/80 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t dark:border-neutral-800 border-neutral-800/30 pt-8 md:flex-row">
          <div className="flex space-x-4">
            {socialLinks.map(social => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="mt-4 text-sm text-muted-foreground md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} ZettaWise. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
