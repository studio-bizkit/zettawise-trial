"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Whistleblower Policy", href: "/whistleblower-policy" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Certifications",
    links: [
      { name: "ISO 27001", href: "#" },
      { name: "ISO 9001", href: "#" },
      { name: "ISO 20000-1", href: "#" },
      { name: "GeM Seller ID: 760D240011884428", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/zettawise-consulting/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/zettakolkata", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@zettawise.in", label: "Email" },
];

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full border-t dark:border-neutral-800 border-neutral-800/30 bg-background"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-foreground/80 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                    whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
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
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-foreground/80 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <motion.li 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Unit 1102, 11th Floor, Godrej Genesis Building,
                EP & GP Block, Sector V, Bidhannagar,
                Kolkata, WB 700091
              </motion.li>
              <motion.li 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a href="mailto:contact@zettawise.in" className="hover:text-foreground transition-colors">
                  contact@zettawise.in
                </a>
              </motion.li>
              <motion.li 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a href="tel:+917980889376" className="hover:text-foreground transition-colors">
                  +91-79808 89376
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t dark:border-neutral-800 border-neutral-800/30 pt-8 md:flex-row">
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="mt-4 text-sm text-muted-foreground md:mt-0 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              © {new Date().getFullYear()} ZettaWise Consulting Pvt. Ltd. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-2"
            >
              Baked by{" "}
              <a
                href="https://studiobizkit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Studio Bizkit
              </a>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 1,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
            className="hidden md:block"
          >
            <Image
              src="/images/logo-icon.png"
              alt="ZettaWise Logo"
              width={30}
              height={30}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
