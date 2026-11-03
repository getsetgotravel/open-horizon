
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const companyLinks = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Our Team', href: '/our-team' },
];

const ecosystemLinks = [
  { label: 'MAGNUM', href: '/magnum' },
  { label: 'ImageCraft', href: '/imagecraft' },
  { label: 'GetSetGo', href: '/getsetgo' },
  { label: 'Contact Us', href: '/contact' },
];

function FooterReveal({ children, delay = 0, className = '' }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        group inline-flex w-fit items-center gap-2
        text-[13px] text-white/65
        transition-colors duration-300
        hover:text-white
      "
    >
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>
      <ArrowUpRight
        size={13}
        className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B2832] font-[family-name:var(--font-inter)] text-white">

      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#176E62]/15 blur-[110px]"
      />

      {/* Main footer */}
      <div className="relative mx-auto max-w-[1440px] px-6 pt-20 pb-14 md:px-14 md:pt-28 xl:px-20">

        {/* Footer introduction */}
        <FooterReveal>
          <div className="flex flex-col justify-between gap-9 border-b border-white/15 pb-14 lg:flex-row lg:items-end">

            <div className="max-w-[770px]">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#99CFC2]">
                OPEN HORIZON · INFINITE POSSIBILITIES
              </p>

              <h2 className="font-[family-name:var(--font-playfair)] text-[38px] font-medium leading-[1.2] tracking-[-0.035em] text-white md:text-[38px]">
                Meaningful Relationships.
                <br />
                <span className="italic text-[#A9D0BD]">
                  Enduring Business Value.
                </span>
              </h2>

              <p className="mt-6 max-w-[590px] text-[14px] leading-[1.9] text-white/65">
                An integrated enterprise platform connecting event
                management, high-definition visual production,
                corporate travel and premium hospitality through
                specialist expertise and coordinated execution.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group inline-flex w-fit shrink-0 items-center
                gap-9 border border-[#8AAEA4]/50
                px-6 py-4 text-[12px] font-semibold
                uppercase tracking-[0.08em]
                transition-all duration-300
                hover:border-[#A9D0BD]
                hover:bg-[#A9D0BD]
                hover:text-[#0B2832]
              "
            >
              Start a Conversation
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FooterReveal>

        {/* Footer columns */}
        <div className="grid gap-x-10 gap-y-14 border-b border-white/15 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">

          {/* Brand */}
          <FooterReveal delay={0.05}>
            <div>
              <Link
                href="/"
                aria-label="Open Horizon homepage"
                className="inline-flex bg-white p-3"
              >
                <Image
                  src="/logos/open-horizon.png"
                  alt="Open Horizon — Infinite Possibilities"
                  width={225}
                  height={75}
                  sizes="225px"
                  className="h-auto w-[225px] object-contain"
                />
              </Link>

              <p className="mt-7 max-w-[330px] text-[13px] leading-[1.9] text-white/65">
                Professional Relationships.
                <br />
                Coordinated Solutions.
                <br />
                Lasting Value.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <span className="h-px w-7 bg-[#9CCDBF]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A9CFC4]">
                  New Delhi · India
                </span>
              </div>
            </div>
          </FooterReveal>

          {/* Company */}
          <FooterReveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7D5C8]">
                The Company
              </h3>

              {companyLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </FooterReveal>

          {/* Ecosystem */}
          <FooterReveal delay={0.15}>
            <div className="flex flex-col gap-4">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7D5C8]">
                Our Ecosystem
              </h3>

              {ecosystemLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </FooterReveal>

          {/* Contact */}
          <FooterReveal delay={0.2}>
            <div>
              <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A7D5C8]">
                Corporate Office
              </h3>

              <div className="space-y-6">

                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-[#A7D5C8]"
                  />
                  <p className="text-[13px] leading-[1.85] text-white/65">
                    Open Horizon Commercials Private Limited
                    <br />
                    17/6 New Rohtak Road,
                    <br />
                    Opp. Street No. 10,
                    <br />
                    Anand Parbat Industrial Area,
                    <br />
                    New Delhi – 110005, India
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={17}
                    className="mt-1 shrink-0 text-[#A7D5C8]"
                  />
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:care@openhorizon.co.in"
                      className="text-[13px] text-white/65 transition-colors hover:text-white"
                    >
                      care@openhorizon.co.in
                    </a>
                    <a
                      href="mailto:partner@openhorizon.co.in"
                      className="text-[13px] text-white/65 transition-colors hover:text-white"
                    >
                      partner@openhorizon.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={17}
                    className="mt-1 shrink-0 text-[#A7D5C8]"
                  />
                  <a
                    href="tel:+919717884777"
                    className="text-[13px] text-white/65 transition-colors hover:text-white"
                  >
                    +91 97178 84777
                  </a>
                </div>

              </div>
            </div>
          </FooterReveal>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-8 text-[11px] text-white/50 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Open Horizon Commercials Private Limited.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/who-we-are"
              className="transition-colors hover:text-white"
            >
              About Open Horizon
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>

            <a
              href="https://openhorizon.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              openhorizon.co.in
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#087D9A] via-[#317A5B] to-[#0B2832]" />
    </footer>
  );
}
