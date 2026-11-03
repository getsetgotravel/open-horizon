
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Building2,
  Layers3,
  Camera,
  Plane,
  ShieldCheck,
  FileCheck2,
  Award,
  Download,
  MoveUpRight,
} from 'lucide-react';

/* =========================================
   OPEN HORIZON — IMAGE CONFIGURATION
   Uses your existing PNG images.
   ========================================= */

const images = {
  executive:
    '/images/hero/open-horizon-luxury-executive-office.png',

  reception:
    '/images/hero/open-horizon-corporate-reception.png',

  events:
    '/images/hero/magnum-luxury-event-production.png',

  studio:
    '/images/hero/imagecraft-professional-photography-studio.png',

  travel:
    '/images/hero/getsetgo-premium-travel-experience.png',
};

/* =========================================
   DESIGN TOKENS
   ========================================= */

const headingClass =
  'font-[family-name:var(--font-playfair)] ' +
  'text-[38px] font-medium leading-[1.22] ' +
  'tracking-[-0.035em]';

const bodyClass =
  'text-[15px] md:text-[16px] leading-[1.95] ' +
  'tracking-[-0.01em]';

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   CONTENT
   ========================================= */

const slides = [
  {
    id: '01',
    eyebrow: 'OPEN HORIZON · INFINITE POSSIBILITIES',
    line1: 'One Integrated',
    line2: 'Enterprise.',
    description:
      'Connecting specialist expertise across luxury hospitality, event production, high-definition visual media and bespoke travel through one coordinated corporate framework.',
    image: images.executive,
    cta: 'Discover Open Horizon',
    href: '/who-we-are',
  },
  {
    id: '02',
    eyebrow: 'RELATIONSHIPS · GOVERNANCE · EXECUTION',
    line1: 'Built on Relationships.',
    line2: 'Defined by Execution.',
    description:
      'A relationship-led enterprise bringing together professional expertise, established institutional associations and disciplined operational management.',
    image: images.reception,
    cta: 'Who We Are',
    href: '/who-we-are',
  },
  {
    id: '03',
    eyebrow: 'INFRASTRUCTURE · OPERATIONAL STRENGTH',
    line1: 'Strength in Resources.',
    line2: 'Confidence in Delivery.',
    description:
      'Company-owned infrastructure, substantial technical resources and established specialist networks provide a strong foundation for diverse business requirements.',
    image: images.events,
    cta: 'Our Infrastructure',
    href: '/infrastructure',
  },
  {
    id: '04',
    eyebrow: 'CORPORATE & HOSPITALITY PARTNERSHIPS',
    line1: 'Beyond Transactions.',
    line2: 'Lasting Relationships.',
    description:
      'Aligning corporate requirements with premium hospitality partnerships, specialist expertise and coordinated service delivery to create enduring commercial value.',
    image: images.travel,
    cta: 'Connect With Us',
    href: '/contact',
  },
];

const verticals = [
  {
    number: '01',
    eyebrow: 'EVENT MANAGEMENT & PRODUCTION',
    name: 'MAGNUM',
    tagline: 'Luxury Celebrations & Grand Experiences',
    description:
      'Creative event design, technical production and professionally managed execution across corporate events, conferences, luxury celebrations, fashion and live entertainment.',
    image: images.events,
    href: '/magnum',
  },
  {
    number: '02',
    eyebrow: 'PHOTOGRAPHY & VISUAL PRODUCTION',
    name: 'ImageCraft',
    tagline: 'Framing Moments. Crafting Memories.',
    description:
      'Professional photography, cinematography and visual storytelling supported by advanced production infrastructure, creative expertise and specialist technical capabilities.',
    image: images.studio,
    href: '/imagecraft',
  },
  {
    number: '03',
    eyebrow: 'TRAVEL & MICE',
    name: 'GetSetGo',
    tagline: 'Happy Escapes, Personally Managed.',
    description:
      'Corporate travel, executive mobility, MICE programmes and bespoke domestic and international experiences delivered through personalised planning and coordinated assistance.',
    image: images.travel,
    href: '/getsetgo',
  },
];

const strengths = [
  {
    icon: Building2,
    title: 'Asset-Backed Business Model',
    text:
      'Company-owned offices, warehouses and established infrastructure strengthen operational independence and resource flexibility.',
  },
  {
    icon: Layers3,
    title: 'Financial Resilience',
    text:
      'A lean fixed-cost structure and disciplined resource management support commercial competitiveness and long-term business stability.',
  },
  {
    icon: ShieldCheck,
    title: 'Operational Governance',
    text:
      'Structured workflows, standard operating procedures and professional accountability underpin planning and execution.',
  },
  {
    icon: Camera,
    title: 'Technical & Creative Infrastructure',
    text:
      'Professional production equipment, photography systems, editing resources and specialist technical networks support diverse assignments.',
  },
];

const engagements = [
  'Mobikwik',
  'Freecharge',
  'Shriram Global',
  'BusinessWorld',
  'Areness Attorneys',
  'Images Multimedia',
  'Jaypee Group',
  'Hitkary Pharmacy',
  'Pathways Edumarks',
  'AIMA',
  'Black Olive Ventures',
];

/* =========================================
   REUSABLE COMPONENTS
   ========================================= */

function Reveal({
  children,
  className = '',
  delay = 0,
  amount = 0.15,
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduced ? false : { opacity: 0, y: 36 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduced ? 0 : 0.8,
        delay: reduced ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? 'bg-[#A4D2C5]' : 'bg-[#2F7768]'
        }`}
      />

      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
          light ? 'text-[#D5EAE4]' : 'text-[#367264]'
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div>
      <Reveal>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={`${headingClass} mt-6 ${
            light ? 'text-white' : 'text-[#17373C]'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.16}>
          <p
            className={`${bodyClass} mt-6 max-w-[680px] ${
              light ? 'text-white/70' : 'text-[#617478]'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-5 border-b pb-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
        light
          ? 'border-white/40 text-white hover:border-white'
          : 'border-[#367466]/40 text-[#245D55] hover:border-[#245D55]'
      }`}
    >
      {children}

      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </Link>
  );
}

function Photo({
  src,
  alt,
  priority = false,
  sizes = '100vw',
  className = '',
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#173D43] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

/* =========================================
   SECTION 01 — CINEMATIC HERO
   ========================================= */

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (paused || reduced) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [active, paused, reduced]);

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + slides.length) % slides.length
    );
  };

  const next = () => {
    setActive(
      (current) => (current + 1) % slides.length
    );
  };

  const slide = slides[active];

  return (
    <section
      aria-label="Open Horizon introduction"
      className="relative isolate h-[100svh] min-h-[690px] overflow-hidden bg-[#09262F] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      {/* IMAGE CROSSFADE */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduced ? 0 : 1.2,
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{
              scale: reduced ? 1 : 1.065,
            }}
            transition={{
              duration: 8,
              ease: 'linear',
            }}
          >
            <Photo
              src={slide.image}
              alt="Premium corporate and hospitality interior without people"
              priority={active === 0}
              className="h-full w-full"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* CINEMATIC OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#031A21]/95 via-[#071F29]/75 to-[#09232A]/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041921]/75 via-transparent to-[#041A21]/20" />

      {/* TEXT — LEFT BOTTOM */}
      <div className="relative z-10 mx-auto flex h-full w-[90%] max-w-[1440px] items-end pb-[115px] md:pb-[135px]">
        <div className="max-w-[920px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-text'}
              initial={
                reduced
                  ? false
                  : { opacity: 0, y: 28 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: reduced ? 0 : -15,
              }}
              transition={{
                duration: reduced ? 0 : 0.7,
                ease,
              }}
            >
              <Eyebrow light>
                {slide.eyebrow}
              </Eyebrow>

              <h1 className="mt-7 font-[family-name:var(--font-playfair)] text-[clamp(48px,5.6vw,84px)] font-medium leading-[1.1] tracking-[-0.045em]">
                {slide.line1}
                <span className="block italic text-[#D5C3A1]">
                  {slide.line2}
                </span>
              </h1>

              <p className="mt-7 max-w-[630px] text-[15px] leading-[1.9] text-white/85 md:text-[17px]">
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href={slide.href}
                  className="group inline-flex min-h-[54px] items-center gap-8 bg-[#087F9D] px-6 text-[11px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[#176B5C]"
                >
                  {slide.cta}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#ecosystem"
                  className="inline-flex min-h-[54px] items-center border border-white/60 px-7 text-[11px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-white hover:text-[#17383D]"
                >
                  Our Ecosystem
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CAROUSEL NAVIGATION */}
      <div className="absolute bottom-8 left-[5%] right-[5%] z-20 flex items-center justify-between">
        <div className="flex gap-3">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                active === index ? 'true' : undefined
              }
              className="flex w-10 flex-col gap-3 text-left md:w-14"
            >
              <span className="text-[10px] text-white/80">
                {item.id}
              </span>

              <span
                className={`h-[2px] w-full ${
                  active === index
                    ? 'bg-[#75D1C1]'
                    : 'bg-white/30'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/55 transition-colors hover:bg-white hover:text-[#173D44]"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/55 transition-colors hover:bg-white hover:text-[#173D44]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 02 — WHO WE ARE
   ========================================= */

function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="overflow-hidden bg-[#F8F7F3] px-6 py-24 md:px-14 md:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        <div>
          <SectionTitle
            eyebrow="01 / THE OPEN HORIZON PHILOSOPHY"
            title={
              <>
                Distinct Capabilities.
                <br />
                <em className="text-[#367465]">
                  Collective Strength.
                </em>
              </>
            }
          />

          <Reveal delay={0.15}>
            <p className={`${bodyClass} mt-8 text-[#647579]`}>
              Open Horizon is an integrated enterprise
              platform operating at the intersection of
              luxury hospitality, live experiences,
              high-definition visual media and bespoke
              travel.
            </p>

            <p className={`${bodyClass} mt-5 text-[#647579]`}>
              Through MAGNUM, ImageCraft and GetSetGo,
              we connect specialist capabilities under
              centralised corporate stewardship,
              combining relationship-led service,
              operational discipline and one
              accountable interface.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-9">
            <EditorialLink href="/who-we-are">
              Discover Our Philosophy
            </EditorialLink>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.7, ease }}
              className="relative h-[450px] overflow-hidden md:h-[570px]"
            >
              <Photo
                src={images.reception}
                alt="Premium corporate reception interior"
                className="h-full w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <div className="absolute -bottom-8 -left-3 max-w-[285px] bg-[#123A3C] p-7 text-white md:-left-10">
              <p className="font-[family-name:var(--font-playfair)] text-[25px] italic leading-[1.4] tracking-[-0.035em]">
                Professional Relationships.
                Coordinated Solutions.
                Lasting Value.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 03 — BUSINESS ECOSYSTEM
   ========================================= */

function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="scroll-mt-20 bg-[#0C3037] px-6 py-24 text-white md:px-14 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
          <SectionTitle
            light
            eyebrow="02 / OUR SPECIALIST VERTICALS"
            title={
              <>
                Three Distinct Businesses.
                <br />
                <em className="text-[#A9CDBC]">
                  One Unified Platform.
                </em>
              </>
            }
            description="Each vertical retains its specialist identity, dedicated capabilities and operational focus while benefiting from a connected enterprise ecosystem."
          />

          <Reveal>
            <EditorialLink href="/what-we-do" light>
              What We Do
            </EditorialLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {verticals.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.1}
            >
              <Link
                href={item.href}
                className="group relative block h-[525px] overflow-hidden bg-[#173F46]"
              >
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.08]">
                  <Photo
                    src={item.image}
                    alt={`${item.name} services`}
                    className="h-full w-full"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#021820]/95 via-[#071F27]/50 to-[#071F27]/10" />

                <div className="absolute left-7 right-7 top-7 flex items-start justify-between gap-4">
                  <span className="max-w-[235px] text-[10px] font-semibold tracking-[0.14em] text-white/80">
                    {item.eyebrow}
                  </span>

                  <span className="text-[11px] text-white/70">
                    {item.number}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-[38px] font-medium tracking-[-0.035em]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-[12px] font-medium text-[#A9D5C9]">
                    {item.tagline}
                  </p>

                  <p className="mt-5 text-[13px] leading-[1.9] text-white/75">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Explore {item.name}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 04 — INFRASTRUCTURE
   ========================================= */

function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="overflow-hidden bg-[#F0F1ED] px-6 py-24 md:px-14 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="03 / INFRASTRUCTURE & RESILIENCE"
              title={
                <>
                  The Strength Behind
                  <br />
                  <em className="text-[#347364]">
                    Every Commitment.
                  </em>
                </>
              }
              description="An asset-backed business model, established specialist networks and significant investment in professional infrastructure provide the foundation for dependable execution."
            />

            <Reveal delay={0.2} className="mt-9">
              <EditorialLink href="/infrastructure">
                Explore Our Infrastructure
              </EditorialLink>
            </Reveal>
          </div>

          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7 }}
              className="relative h-[390px] overflow-hidden md:h-[510px]"
            >
              <Photo
                src={images.studio}
                alt="Professional photography and technical production infrastructure"
                className="h-full w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 border-t border-[#CED8D2] md:grid-cols-2">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={(index % 2) * 0.1}
              >
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex min-h-[180px] gap-5 border-b border-[#CED8D2] py-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#BDD2C6] text-[#347969] transition-colors group-hover:bg-[#276B5C] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[25px] font-medium tracking-[-0.035em] text-[#17373C]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[520px] text-[14px] leading-[1.9] text-[#63767A]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 05 — BRAND ASSOCIATIONS
   ========================================= */

function Associations() {
  const reduced = useReducedMotion();

  return (
    <section
      id="associations"
      className="overflow-hidden bg-[#FAF8F3] px-6 py-24 md:px-14 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionTitle
          eyebrow="04 / PROFESSIONAL ENGAGEMENTS"
          title={
            <>
              Relationships Built
              <br />
              <em className="text-[#387869]">
                Through Experience.
              </em>
            </>
          }
          description="Our professional engagements have spanned financial services, media, education, industry and other corporate sectors, reflecting the breadth of our institutional relationships."
        />

        <Reveal delay={0.2}>
          <div className="relative mt-14 overflow-hidden border-y border-[#DDE3DB] py-9">
            <motion.div
              className="flex w-max items-center gap-5"
              animate={
                reduced
                  ? undefined
                  : { x: ['0%', '-50%'] }
              }
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{
                animationPlayState: 'paused',
              }}
            >
              {[...engagements, ...engagements].map(
                (name, index) => (
                  <div
                    key={`${name}-${index}`}
                    className="flex h-[104px] min-w-[205px] items-center justify-center border border-[#E2E7DF] bg-white px-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#7EA99D] hover:shadow-lg"
                  >
                    <span className="text-[15px] font-semibold tracking-[-0.025em] text-[#2B4E51]">
                      {name}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-5 max-w-[900px] text-[12px] leading-[1.8] text-[#83918C]">
            Organisations listed reflect professional
            engagements documented in the Open Horizon
            company profile. They are not presented
            as certifications or endorsements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 06 — CERTIFICATES & CREDENTIALS
   No invented certifications.
   ========================================= */

function Credentials() {
  const credentials = [
    {
      icon: FileCheck2,
      title: 'Corporate Documentation',
      text:
        'Relevant corporate registration and business documentation can be presented following verification.',
    },
    {
      icon: Award,
      title: 'Professional Credentials',
      text:
        'Issued certificates, recognised credentials and supporting records can be featured with their authentic details.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance Records',
      text:
        'Applicable compliance documentation can be displayed with the issuing authority and validity details.',
    },
  ];

  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-[#103B35] px-6 py-24 text-white md:px-14 md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 -top-60 h-[620px] w-[620px] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-[1400px]">
        <SectionTitle
          light
          eyebrow="05 / CORPORATE CREDENTIALS"
          title={
            <>
              Credibility Through
              <br />
              <em className="text-[#B5D4B6]">
                Documented Standards.
              </em>
            </>
          }
          description="Corporate documentation, professional credentials and recognised certificates form part of a transparent and responsible institutional presentation."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {credentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="group flex min-h-[290px] flex-col border border-white/20 bg-white/[0.055] p-8 backdrop-blur-sm transition-colors hover:border-[#A9D4C2]/60 hover:bg-white/[0.09]"
                >
                  <Icon
                    size={31}
                    strokeWidth={1.3}
                    className="text-[#B9D9C3]"
                  />

                  <h3 className="mt-9 font-[family-name:var(--font-playfair)] text-[27px] tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-[1.95] text-white/65">
                    {item.text}
                  </p>

                  <div className="mt-auto pt-7">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3C4B8]">
                      Documentation pending verification
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.25}>
          <p className="mt-8 text-[12px] leading-[1.8] text-white/55">
            Actual certificate previews, issuing authorities
            and validity dates should be added only after
            the corresponding documents are supplied
            and verified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================
   SECTION 07 — STRATEGIC PARTNERSHIPS
   ========================================= */

function Partnerships() {
  return (
    <section
      id="partnerships"
      className="relative isolate min-h-[600px] overflow-hidden bg-[#0C2C35] text-white"
    >
      <div className="absolute inset-0">
        <Photo
          src={images.executive}
          alt="Premium corporate hospitality interior"
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D26]/95 via-[#072630]/80 to-[#072630]/30" />

      <div className="relative mx-auto grid min-h-[600px] w-[90%] max-w-[1400px] items-center gap-10 py-24 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Reveal>
            <Eyebrow light>
              06 / STRATEGIC PARTNERSHIPS
            </Eyebrow>

            <h2
              className={`${headingClass} mt-7 max-w-[610px] text-white`}
            >
              Connecting Opportunities.
              <br />
              <em className="text-[#C3D8C2]">
                Creating Long-Term Value.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[600px] text-[16px] leading-[1.95] text-white/75">
              We view corporate organisations, premium
              hospitality groups and institutional
              clients as long-term partners.
              By aligning complementary expertise,
              professional networks and operational
              resources, we seek to create meaningful
              opportunities for mutual growth.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <Link
              href="/contact"
              className="group mt-9 inline-flex min-h-[56px] items-center gap-10 bg-[#F7F4ED] px-7 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#173B40] transition-colors hover:bg-[#BBD8C6]"
            >
              Start a Conversation

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="hidden border-l border-white/35 pl-10 lg:block">
            <p className="font-[family-name:var(--font-playfair)] text-[31px] italic leading-[1.55] tracking-[-0.035em] text-white/85">
              Professional Relationships.
              <br />
              Coordinated Solutions.
              <br />
              Lasting Value.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================
   HOMEPAGE
   Navbar + Footer come from layout.js.
   ========================================= */

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#F8F7F3] font-[family-name:var(--font-inter)]">
      <Hero />
      <WhoWeAre />
      <Ecosystem />
      <Infrastructure />
      <Associations />
      <Credentials />
      <Partnerships />
    </main>
  );
}
