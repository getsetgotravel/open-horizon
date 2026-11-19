
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
      <div className="relative mx-auto max-w-[1440px] px-6 pt-20 pb-14 md:px-14 md:pt-10 xl:px-20">



        {/* Footer columns */}
        <div className="grid gap-x-10 gap-y-10 border-b border-white/15 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">

          {/* Brand */}
          <FooterReveal delay={0.05}>
            <div>
             
<Link
  href="/"
  aria-label="Open Horizon homepage"
  className="inline-flex items-center justify-center bg-white p-1"
>
  <Image
    src="/logos/open-horizon.png"
    alt="Open Horizon — Infinite Possibilities"
    width={270}
    height={65}
    sizes="(max-width: 768px) 210px, 270px"
    className="h-auto w-[210px] object-contain md:w-[270px]"
    priority
  />
</Link>


             
<p className="mt-7 max-w-[330px] text-justify text-[13px] leading-[1.9] text-white/65">
  An integrated enterprise platform operating at the intersection
  of luxury hospitality, live experiences, high-definition visual
  media and bespoke travel. We specialise in event management and
  production, corporate travel and MICE, professional photography
  and visual production.
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
              href="/disclaimer"
              className="transition-colors hover:text-white"
            >
              Disclaimer
            </Link>
            <Link
              href="/sitemap"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>
               <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
           
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#087D9A] via-[#317A5B] to-[#0B2832]" />
    </footer>
  );
}
