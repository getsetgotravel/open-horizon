
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
  BadgeCheck,
  Landmark,
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
    '/images/hero/heroimg.png',

  reception:
    '/images/hero/open-horizon-corporate-reception.png',

  events:
    '/images/hero/magnum-vertical.png',

  studio:
    '/images/hero/Imagecraft-vertical.png',

  travel:
    '/images/hero/getsetgo verticals.png',

  strategic:
  '/images/hero/open-horizon-luxury-executive-office.png'

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
    
    eyebrow: 'OPEN HORIZON · INFINITE POSSIBILITIES',
    line1: 'An Integrated',
    line2: 'Enterprise.',
    description:
      'Connecting specialist expertise across luxury hospitality,\nevent production, high-definition visual media and bespoke \ntravel through one coordinated corporate framework.',
    image: images.executive,
    cta: 'Discover Open Horizon',
    href: '/who-we-are',
  }
  
];

const verticals = [
  {
    name: 'MAGNUM',
    tagline: 'Luxury Celebrations & Grand Experiences',
    description:'EVENT MANAGEMENT & PRODUCTION',
    image: images.events,
    href: 'https://magnumevents.in/',
  },
  {
    name: 'ImageCraft',
    tagline: 'Framing Moments. Crafting Memories.',
    description:'PHOTOGRAPHY & VISUAL PRODUCTION',
    image: images.studio,
    href: 'http://imgcraft.in/',
  },
  {

    name: 'GetSetGo',
    tagline: 'Happy Escapes, Personally Managed.',
    description:'TRAVEL & MICE',
    image: images.travel,
    href: 'http://getsetgo.in/',
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
      className={`group inline-flex min-h-[54px] items-center
        justify-between gap-8 px-7 py-4
        text-[11px] font-semibold uppercase tracking-[0.08em]
        text-white bg-[#0787A6]
        transition-all duration-500 ease-in-out
        hover:bg-[#174F43]
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]`}
    >
      <span>{children}</span>

      <ArrowRight
        size={18}
        strokeWidth={1.7}
        className="transition-transform duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1"
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

     
{/* SUBTLE LEFT-SIDE GRADIENT */}
                <div
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      linear-gradient(
        90deg,
        rgba(3, 26, 33, 0.98) 0%,
        rgba(3, 26, 33, 0.90) 25%,
        rgba(3, 26, 33, 0.65) 50%,
        rgba(3, 26, 33, 0.35) 75%,
        rgba(3, 26, 33, 0.20) 100%
      )
    `,
  }}
/>

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

              
            <h1 className="mt-7 font-[family-name:var(--font-playfair)] text-[clamp(30px,5.6vw,38px)] font-medium leading-[1.1] tracking-[-0.045em]">
              {slide.line1}{" "}
              <span className="inline text-[#c3d8c2]">
                {slide.line2}
              </span>
            </h1>


              <p className="whitespace-pre-line mt-7 max-w-[630px] text-[15px] leading-[1.9] text-white/85 md:text-[17px]">
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href={slide.href}
                  className="group inline-flex min-h-[54px] items-center gap-8 bg-[#087F9D] px-6 text-[11px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[#176B5C]"
                >
                  {slide.cta}

                  <ArrowRight
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
            eyebrow="THE OPEN HORIZON PHILOSOPHY"
            title={
              <>
                An Integrated Enterprise.
                <br />
                 <span className="block not-italic text-[#0787A6]">
        A Diversified Expertise.
      </span>
                
              </>
            }
          />

          <Reveal delay={0.15}>
  <p className={`${bodyClass} mt-8 text-justify text-[#647579]`}>
    Open Horizon is a diversified business enterprise bringing
    together three specialised verticals —{' '}
    <span className="font-bold text-[#245D55]">
      MAGNUM, ImageCraft and GetSetGo
    </span>
    {' '}— across events, hospitality, visual media and travel management.
  </p>

  <p className={`${bodyClass} mt-5 text-justify text-[#647579]`}>
    Our business is supported by experienced professionals,
    established industry relationships and company-owned
    infrastructure. Each vertical maintains its specialised
    expertise while operating within a coordinated framework
    of corporate governance, operational discipline and
    consistent service standards.
  </p>
</Reveal> 

          <Reveal delay={0.25} className="mt-9">
            <EditorialLink href="/who-we-are">
              EXPLORE OUR COMPANY
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

            <div className="absolute - bottom-8 -left-3 max-w-[285px] bg-[#123A3C] p-7 text-white md:-left-6">
              <p className="font-[family-name:var(--font-playfair)] text-[24px] italic leading-[1.4] tracking-[-0.035em]">
                Professional Integrity.
                Institutional Strength.
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

// function Ecosystem() {
//   return (
//     <section
//       id="ecosystem"
//       className="scroll-mt-20 bg-[#0C3037] px-6 py-24 text-white md:px-14 md:py-28"
//     >
//       <div className="mx-auto max-w-[1400px]">
//         <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
//           <SectionTitle
//             light
//             eyebrow="02 / OUR SPECIALIST VERTICALS"
//             title={
//               <>
//                 Three Distinct Businesses.
//                 <br />
//                 <em className="text-[#A9CDBC]">
//                   One Unified Platform.
//                 </em>
//               </>
//             }
//             description="Each vertical retains its specialist identity, dedicated capabilities and operational focus while benefiting from a connected enterprise ecosystem."
//           />

//           <Reveal>
//             <EditorialLink href="/what-we-do" light>
//               What We Do
//             </EditorialLink>
//           </Reveal>
//         </div>

//         <div className="mt-14 grid gap-5 lg:grid-cols-3">
//           {verticals.map((item, index) => (
//             <Reveal
//               key={item.name}
//               delay={index * 0.1}
//             >
//               <Link
//                 href={item.href}
//                 className="group relative block h-[525px] overflow-hidden rounded-[12px] bg-[#173F46] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-shadow duration-500 hover:shadow-[0_14px_32px_rgba(0,0,0,0.24)]">
            
//                 <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.08]">
                 
//                   <Photo
//                     src={item.image}
//                     alt={`${item.name} services`}
//                     className="h-full w-full object-cover object-center"
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                   />

//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#021820]/95 via-[#071F27]/50 to-[#071F27]/10" />

               

//                 <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
//                   <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-[38px] font-medium tracking-[-0.035em]">
//                     {item.name}
//                   </h3>

//                   <p className="mt-2 text-[14px] font-medium text-[#A9D5C9]">
//                     {item.tagline}
//                   </p>

//                   <p className="mt-2 text-[14px] leading-[1.9] text-white/75">
//                     {item.description}
//                   </p>

//                   <div className="mt-2 flex items-center justify-between border-t border-white/25 pt-2">
//                     <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
//                       Explore {item.name}
//                     </span>

//                     <ArrowRight
//                       size={20}
//                       className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </div>
//                 </div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


/* =========================================
   NEW SECTION ADDED — OUR BUSINESS VERTICALS
   ========================================= */

// function BusinessVerticals() {
//   const content = {
//     MAGNUM: {
//       eyebrow: "EVENT MANAGEMENT & PRODUCTION",
//       heading: "Experiences Defined",
//       highlight: "by Excellence.",
//       description:
//         "MAGNUM specialises in the planning, production and execution of corporate events, luxury celebrations and large-scale experiences. From conferences, dealer meets and product launches to destination weddings and live entertainment, every assignment is managed through coordinated creative, technical and operational expertise.",
//       services: [
//         "Corporate Events",
//         "Event Production",
//         "Luxury Celebrations",
//         "Live Entertainment",
//       ],
//     },

//     ImageCraft: {
//       eyebrow: "PHOTOGRAPHY & VISUAL PRODUCTION",
//       heading: "Creativity Backed",
//       highlight: "by Precision.",
//       description:
//         "ImageCraft brings together professional photography, cinematography and visual production capabilities. Supported by advanced imaging equipment, aerial technology and post-production resources, the business creates compelling visual content for corporate organisations, hospitality brands, events and individual clients.",
//       services: [
//         "Professional Photography",
//         "Cinematography",
//         "Aerial Imaging",
//         "Visual Production",
//       ],
//     },

//     GetSetGo: {
//       eyebrow: "CORPORATE TRAVEL & MICE",
//       heading: "Travel Managed",
//       highlight: "with Expertise.",
//       description:
//         "GetSetGo delivers integrated travel management and MICE solutions for corporate and leisure requirements. From business travel, executive movements and international conferences to incentive programmes, group tours and personalised holidays, arrangements are coordinated through established hospitality and destination partnerships.",
//       services: [
//         "Corporate Travel",
//         "Meetings & Conferences",
//         "Incentive Travel",
//         "Leisure & Group Travel",
//       ],
//     },
//   };

//   return (
//     <section
//       id="business-verticals"
//       className="bg-[#F7F7F3] px-6 py-24 md:px-14 md:py-28"
//     >
//       <div className="mx-auto max-w-[1400px]">

      
//     {/* SECTION INTRO — CENTERED DARK BACKGROUND */}
//         <Reveal>
//           <div className="mx-auto mb-16 max-w-[950px] rounded-[14px] bg-[#15383B] px-7 py-14 text-center shadow-[0_14px_40px_rgba(0,0,0,0.08)] md:mb-20 md:px-16 md:py-16">

//             {/* EYEBROW */}
//             <div className="flex items-center justify-center gap-3">
//               <span className="h-px w-8 bg-[#A9CDBC]" />

//               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A9CDBC]">
//                 OUR SPECIALIST VERTICALS
//               </p>

//               <span className="h-px w-8 bg-[#A9CDBC]" />
//             </div>

//             {/* HEADING */}
//             <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-[clamp(30px,4vw,36px)] font-medium leading-[1.15] tracking-[-0.035em] text-white">
//               Three Distinct Businesses.
//               <br />
//               <em className="font-normal text-[#B9D6C3]">
//                 An Integral Platform
//               </em>
//             </h2>

//             {/* DESCRIPTION */}
//             <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-[1.9] text-white/75">
//               Explore the distinct capabilities of our
//               three businesses, each supported by
//               professional expertise, industry relationships
//               and a commitment to coordinated execution.
//             </p>

//           </div>
//         </Reveal>


//         {/* ALTERNATING VERTICALS */}
//         <div className="space-y-20 md:space-y-28">

//           {verticals.map((item, index) => {
//             const detail = content[item.name];

//             if (!detail) return null;

//             const reversed = index % 2 === 1;

//             return (
//               <div
//                 key={item.name}
//                 className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
//               >

//                 {/* IMAGE */}
//                 <div
//                   className={
//                     reversed
//                       ? "lg:order-2"
//                       : "lg:order-1"
//                   }
//                 >
//                   <Reveal>
//                     <Link
//                       href={item.href}
//                       className="group relative block overflow-hidden rounded-[12px] bg-[#173F46] shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
//                     >
//                       <div className="aspect-[3/4] w-full overflow-hidden">
//                         <div className="h-full w-full transition-transform duration-1000 ease-out group-hover:scale-[1.035]">
//                           <Photo
//                             src={item.image}
//                             alt={`${item.name} services`}
//                             className="h-full w-full object-cover object-center"
//                             sizes="(max-width: 1024px) 100vw, 45vw"
//                           />
//                         </div>
//                       </div>
//                     </Link>
//                   </Reveal>
//                 </div>

//                 {/* CONTENT */}
//                 <div
//                   className={
//                     reversed
//                       ? "lg:order-1"
//                       : "lg:order-2"
//                   }
//                 >
//                   <Reveal delay={0.1}>
//                     <div className="max-w-[560px]">

//                       {/* EYEBROW */}
//                       <div className="flex items-center gap-3">
//                         <span className="h-px w-7 bg-[#397666]" />

//                         <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#397666]">
//                           0{index + 1} / {detail.eyebrow}
//                         </p>
//                       </div>

//                       {/* BRAND NAME */}
//                       <p className="mt-7 font-[family-name:var(--font-playfair)] text-[22px] font-semibold text-[#15383B]">
//                         {item.name}
//                       </p>

//                       {/* HEADING */}
//                       <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-[clamp(34px,3.5vw,46px)] font-medium leading-[1.18] tracking-[-0.035em] text-[#15383B]">
//                         {detail.heading}
//                         <br />
//                         <em className="font-normal text-[#397666]">
//                           {detail.highlight}
//                         </em>
//                       </h3>

//                       {/* DESCRIPTION */}
//                       <p className="mt-7 text-[16px] leading-[1.95] text-[#5E6F69]">
//                         {detail.description}
//                       </p>

//                       {/* SERVICES */}
//                       <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#D4DFD7] pt-7">
//                         {detail.services.map((service) => (
//                           <div
//                             key={service}
//                             className="flex items-start gap-3"
//                           >
//                             <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#397666]" />

//                             <span className="text-[13px] leading-[1.7] text-[#425F56]">
//                               {service}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* CTA */}
//                       <div className="mt-10">
//                         <Link
//                           href={item.href}
//                           className="group inline-flex items-center gap-7 border-b border-[#397666] pb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#15383B] transition-colors duration-300 hover:text-[#397666]"
//                         >
//                           Explore {item.name}

//                           <ArrowRight
//                             size={18}
//                             className="transition-transform duration-300 group-hover:translate-x-2"
//                           />
//                         </Link>
//                       </div>

//                     </div>
//                   </Reveal>
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



/* =========================================
   SECTION 04 — OUR BUSINESS VERTICALS
   ========================================= */

function BusinessVerticals() {
  const content = {
    MAGNUM: {
      eyebrow: "Luxury Celebration and Grand Experiences",
      description:
        "Magnum is the event management vertical of Open Horizon specialising in the planning, creative design, production and execution of events across corporate, wedding, social and hospitality segments. Backed by an experienced event execution team and an established network of specialist vendors, fabricators, decorators, technical production partners, creative professionals, artists and hospitality service providers, Magnum offers integrated event management solutions through a single, professionally coordinated interface. Our approach combines creative flexibility with commercial transparency, reliable coordination and an understanding of the operational requirements of corporate clients and premium hospitality venues. ",
      services: [
        "Event Design & Production",
        "Corporate Events & Conferences",
        "Weddings & Social Celebrations",
        "Fashion, Entertainment & Live Experiences",
    
      ],
    },

    ImageCraft: {
      eyebrow: "Framing Moments. Crafting memories.",
      description:"ImageCraft is the photography and visual production vertical of Open Horizon, offering professional photography, cinematography and imaging solutions across corporate, commercial, fashion, wedding, hospitality and event segments.Positioned as one of the leading B2B photography and visual production brands in Delhi NCR, ImageCraft combines extensive technical infrastructure, a skilled in-house team of creative professionals and an established network of specialist photographers, cinematographers, editors and visual artists. With production infrastructure representing an investment running into eight figures, our capabilities extend from intimate photographic assignments to complex commercial productions and large-scale live events.",
      services: [
        "Corporate, Commercial & Hospitality Visual Production",
        "Weddings, Fashion & Celebrity Photography",
        "Events, Cultural & Visual Documentation",
        "Advanced Production Infrastructure & Technical Capabilities",
      ],
    },

    GetSetGo: {
      eyebrow: "Happy Escapes, Personally Managed",
      description:"GetSetGo is a premium travel advisory and concierge vertical built around the belief that exceptional travel is as much about the journey as the destination. The brand name GetSetGo itself embodies positive energy, reflecting the excitement of discovering new places, embracing new experiences and setting out on journeys with confidence. We curate domestic and international travel experiences, manage corporate travel and MICE requirements, and coordinate group movements through an extensive network of established travel, hospitality and destination partners. Every itinerary is approached with an emphasis on comfort, practicality, transparent communication and dependable coordination.",
      services: [
        "Corporate Travel & MICE",
        "FIT & Bespoke Leisure Travel",
        "Inbound, Series & Pilgrimage Travel",
        "Honeymoon Travel",
      ],
    },
  };

  return (
    <section
      id="business-verticals"
      className="bg-[#F7F7F3] pb-24 pt-0 md:pb-28"
    >

      {/* =====================================
          BUSINESS INTRO — IMAGE WAVE BACKGROUND
         ===================================== */}

      <div className="relative overflow-hidden">


{/* IMAGE BACKGROUND — ORIGINAL COLORS */}
      <div className="relative w-full">
        <img
          src="/images/hero/open-horizon-verticals-wave.webp"
          alt="Event production, photography and corporate travel"
          className="block h-auto w-full"
          loading="eager"
        />
      </div>

        {/* OVERLAPPING INTRO PANEL */}
        <Reveal>
  <div className="relative z-10 mx-auto mt-6 w-[90%] max-w-[1050px] overflow-hidden rounded-[14px] bg-[#0D3B3C] px-6 py-12 text-center text-white shadow-[0_18px_45px_rgba(10,45,45,0.14)] md:mt-0 md:px-16 md:py-14">            {/* SUBTLE PANEL GRADIENT */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(52,114,102,0.22) 0%, transparent 75%)",
              }}
            />

            <div className="relative z-10">

              {/* EYEBROW */}
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#9DCBB7]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B7D9C7]">
                  OUR SPECIALIST VERTICALS
                </p>

                <span className="h-px w-8 bg-[#9DCBB7]" />
              </div>

              {/* HEADING */}
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(30px,4vw,38px)] font-medium leading-[1.15] tracking-[-0.035em] text-white">
                Three Distinct Businesses.
                <br />
           
                  An Integral Platform
              
              </h2>

              {/* DESCRIPTION */}
              <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-[1.9] text-white/85 md:text-[16px]">
                Explore the distinct capabilities of our three
                businesses, each supported by professional
                expertise, industry relationships and a
                commitment to coordinated execution.
              </p>

            </div>
          </div>
        </Reveal>
      </div>

      {/* =====================================
          ALTERNATING BUSINESS VERTICALS
         ===================================== */}

      <div className="mx-auto max-w-[1400px] px-6 pt-16 md:px-14 md:pt-24">

        <div className="space-y-14 md:space-y-20">

          {verticals.map((item, index) => {
            const detail = content[item.name];

            if (!detail) return null;

            const reversed = index % 2 === 1;

            return (
              <div
                key={item.name}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  item.name === "ImageCraft"
                    ? "rounded-[14px] bg-[#F0EEE7] px-6 py-12 md:px-10 md:py-14"
                    : ""
                }`}
              >

                {/* IMAGE */}
               
{/* IMAGE — REDUCED HEIGHT & ENHANCED SHADOW */}

{/* IMAGE — INDIVIDUAL HEIGHT CONTROL */}
<div
  className={`${
    reversed ? "lg:order-2" : "lg:order-1"
  } ${
    item.name === "ImageCraft"
      ? "lg:self-stretch lg:[&>*]:h-full"
      : ""
  }`}
>
  <Reveal>
    <Link
      href={item.href}
      className={`group relative block overflow-hidden rounded-[12px] bg-[#173F46] shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)] ${
        item.name === "ImageCraft" ? "lg:h-full" : ""
      }`}
    >
      <div
        className={
          item.name === "ImageCraft"
            ? "aspect-[3/4] w-full overflow-hidden lg:aspect-auto lg:h-full"
            : "aspect-square w-full overflow-hidden"
        }
      >
        <div className="h-full w-full transition-transform duration-1000 ease-out group-hover:scale-[1.035]">
          <Photo
            src={item.image}
            alt={`${item.name} services`}
            className={`h-full w-full object-cover ${
              item.name === "ImageCraft"
                ? "object-top"
                : "object-center"
            }`}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </Link>
  </Reveal>
</div>


                {/* CONTENT */}
                <div
                  className={
                    reversed
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                >
                  <Reveal delay={0.1}>
                    <div className="max-w-[560px]">

                      {/* EYEBROW */}
                      <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-[#397666]" />

                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#397666]">
                          0{index + 1} / {detail.eyebrow}
                        </p>
                      </div>

                      {/* BRAND NAME */}
                      <p className="mt-3 font-[family-name:var(--font-playfair)] text-[28px] font-semibold text-[#15383B]">
                        {item.name}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-2 text-justify text-[16px] leading-[1.8] text-[#5E6F69]">
                          {detail.description}
                      </p>
                        {/* SERVICES — NO BORDER, COMPACT SPACING */}
                        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                          {detail.services.map((service) => (
                            <div
                              key={service}
                              className="flex items-start gap-3">
                              <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#397666]" />
                              <span className="text-[15px] font-semibold leading-[1.6] text-[#294F47]">
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>


                
                      
                      {/* CTA — OCEAN BLUE / FOREST GREEN HOVER */}
                      <div className="mt-6">
                        <Link
                          href={item.href}
                          className="group inline-flex min-h-[52px] items-center justify-between gap-8 rounded-[3px] bg-[#087F9D] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#176B5C] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                        >
                          Explore {item.name}

                          <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>


                    </div>
                  </Reveal>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 

 /* =========================================
    SECTION 04 — INFRASTRUCTURE
    ========================================= 

function Infrastructure() {
//   return (
//     <section
//       id="infrastructure"
//       className="overflow-hidden bg-[#F0F1ED] px-6 py-24 md:px-14 md:py-28"
//     >
//       <div className="mx-auto max-w-[1400px]">
//         <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
//           <div>
//             <SectionTitle
//               eyebrow="03 / INFRASTRUCTURE & OPERATIONAL STRENGTH"
//               title={
//                 <>
//                   Asset-Backed Infrastructure
//                   <br />
//                   <em className="text-[#347364]">
//                     Financial Resilience
//                   </em>
//                 </>
//               }
//               description="Open Horizon operates on an asset-backed business model supported by company-owned offices, warehouses and substantial investment in professional equipment and advanced production technology.

//                   Our lean fixed-cost structure, experienced teams and established specialist networks strengthen operational independence, commercial competitiveness and our capacity to execute assignments of varying scale and complexity."
//             />

//             <Reveal delay={0.2} className="mt-9">
//               <EditorialLink href="/infrastructure">
//                 Explore Our Infrastructure
//               </EditorialLink>
//             </Reveal>
//           </div>
//                <Reveal>
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     transition={{ duration: 0.7, ease: 'easeOut' }}
//     className="relative h-[450px] w-full bg-transparent md:h-[600px] lg:h-[650px]"
//   >
//     <Image
//       src="/images/infrastructure-collage.png"
//       alt="Luxury hotel, wedding events and corporate meeting infrastructure"
//       fill
//       priority
//       sizes="(max-width: 1024px) 100vw, 60vw"
//       className="object-contain"
//     />
//   </motion.div>
 </Reveal>
//         </div>

//         <div className="mt-16 grid gap-x-10 border-t border-[#CED8D2] md:grid-cols-2">
//           {strengths.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <Reveal
//                 key={item.title}
//                 delay={(index % 2) * 0.1}
//               >
//                 <motion.div
//                   whileHover={{ x: 6 }}
//                   transition={{ duration: 0.3 }}
//                   className="group flex min-h-[180px] gap-5 border-b border-[#CED8D2] py-8"
//                 >
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#BDD2C6] text-[#347969] transition-colors group-hover:bg-[#276B5C] group-hover:text-white">
//                     <Icon size={22} strokeWidth={1.5} />
//                   </div>

//                   <div>
//                     <h3 className="font-[family-name:var(--font-playfair)] text-[25px] font-medium tracking-[-0.035em] text-[#17373C]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 max-w-[520px] text-[14px] leading-[1.9] text-[#63767A]">
//                       {item.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
} */

/* =========================================
   SECTION 05 — BRAND ASSOCIATIONS
   ========================================= */

/* =========================================
   SECTION 04 — OUR CLIENTELE
   ========================================= */


/* =========================================
   SECTION 04 — PROFESSIONAL ENGAGEMENTS
   ========================================= */

function Associations() {
  const organisations = [...new Set(engagements)];

  return (
    <section
      id="associations"
      className="overflow-hidden bg-[#FAF8F3] pt-16 pb-20 md:pt-20 md:pb-24">

      {/* CENTERED INTRO */}

      <div className="mx-auto max-w-[1400px] px-6 md:px-14">
        <Reveal>
          <div className="mx-auto max-w-[850px] text-center">

            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#397666]" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#397666]">
                OUR CLIENTELE
              </p>

              <span className="h-px w-8 bg-[#397666]" />
            </div>

            {/* HEADING */}
            <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-[clamp(36px,4vw,48px)] font-medium leading-[1.15] tracking-[-0.035em] text-[#15383B]">
              Trusted Across Industries.
              <br />
             
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.8] text-[#647579]">
              Our professional engagements span organisations across financial services, media, education, hospitality and diverse corporate sectors, reflecting our extensive industry relationships and professional expertise.
            </p>

          </div>
        </Reveal>
      </div>

      
{/* OUR CLIENTELE — REFINED CAROUSEL */}
<div className="relative mt-9 overflow-hidden bg-[#F2F5F1] py-8 md:mt-10 md:py-10">

  <style>{`
    @keyframes clienteleMove {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .clientele-track {
      display: flex;
      width: max-content;
      animation: clienteleMove 45s linear infinite;
    }

    .clientele-viewport:hover .clientele-track {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .clientele-track {
        animation: none;
      }

      .clientele-viewport {
        overflow-x: auto;
      }
    }
  `}</style>

  <div className="clientele-viewport overflow-hidden py-3">

    <div className="clientele-track">

      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 gap-5 pr-5"
        >
          {organisations.map((name) => (
            <div
              key={name}
              className="group relative flex h-[122px] w-[250px] shrink-0 flex-col justify-center overflow-hidden rounded-[10px] border border-[#DCE5DF] bg-white px-7 shadow-[0_6px_20px_rgba(18,58,49,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#91B9A8] hover:shadow-[0_15px_32px_rgba(18,58,49,0.15)]"
            >

              {/* ACCENT LINE */}
              <span className="mb-4 h-[2px] w-7 bg-[#087F9D] transition-all duration-300 group-hover:w-14 group-hover:bg-[#176B5C]" />

              {/* CLIENT NAME */}
              <h3 className="font-sans text-[17px] font-semibold leading-[1.4] tracking-[-0.015em] text-[#173E40] transition-colors duration-300 group-hover:text-[#176B5C]">
                {name}
              </h3>

            </div>
          ))}
        </div>
      ))}

    </div>
  </div>
</div>

    </section>
  );
}


/* =========================================
   SECTION 05 — CORPORATE CREDENTIALS
   ========================================= */


/* =========================================
   SECTION 05 — CORPORATE CREDENTIALS
   TWO COMPACT CARDS — NO MEDAL
   ========================================= */

function Credentials() {
  const credentials = [
    {
      number: "01",
      badge: "/images/hero/msme-badge.png",
      category: "CORPORATE REGISTRATION",
      title: "MSME",
      subtitle: "Micro, Small & Medium Enterprises",
      description:
        "Our MSME registration forms part of our formal corporate documentation and reflects our participation in India's recognised enterprise framework.",
    },
    {
      number: "02",
      badge: "/images/hero/ministry-tourism-badge.png",
      category: "TOURISM CREDENTIAL",
      title: "Ministry of Tourism",
      subtitle: "Government of India",
      description:
        "Our tourism-sector credentials form part of our institutional documentation, supporting our professional presence in the travel and hospitality industry.",
    },
  ];

  return (
    <section  id="credentials" className="relative isolate overflow-hidden bg-[#F8F6F0] px-6 pt-14 pb-10 md:px-14 xl:min-h-[500px] xl:pt-14 xl:pb-10">

      {/* CORPORATE BACKGROUND */}
      
{/* CORPORATE BACKGROUND WITH SOFT BLUE EDGES */}
<div
  className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat xl:bg-[length:100%_100%]"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(185, 218, 240, 0.48) 0%,
        rgba(215, 235, 248, 0.20) 18%,
        transparent 35%,
        transparent 65%,
        rgba(215, 235, 248, 0.20) 82%,
        rgba(185, 218, 240, 0.48) 100%
      ),
      url('/images/hero/corporate-background-450.png')
    `,
  }}
/>


      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* CENTERED INTRO */}
        <div className="mx-auto max-w-[780px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#397666]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#397666]">
             COMPANY CERTIFICATIONS
            </p>

            <span className="h-px w-7 bg-[#397666]" />
          </div>

          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-[clamp(30px,3vw,38px)] font-medium leading-[1.15] text-[#15383B]">
            Government Registrations
          </h2>
           <p className="mx-auto mt-3 max-w-[690px] text-[16px] leading-[1.65] text-[#647579]">
            Our corporate registrations and institutional credentials
            reflect our commitment to responsible business practices,
            professionalism and transparency.
          </p>
          

        
        </div>

        {/* TWO SMALL CREDENTIAL CARDS */}
        
        <div className="mx-auto mt-5 mb-8 grid max-w-[800px] gap-5 md:grid-cols-2">


          {credentials.map((item) => (
            <article
              key={item.number}
              className="group relative flex min-h-[205px] flex-col rounded-[12px] border border-[#E2CEAB] bg-white p-5 shadow-[0_8px_24px_rgba(71,59,38,0.11)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C49A51] hover:shadow-[0_16px_32px_rgba(71,59,38,0.19)]"
            >
              {/* TOP BADGE + NUMBER */}
              <div className="flex items-start justify-between">
                
<Image
  src={item.badge}
  alt={`${item.title} decorative badge`}
  width={1086}
  height={1448}
  className="h-[85px] w-[72px] object-contain transition-transform duration-500 group-hover:scale-110"
  sizes="72px"
/>


                <span className="font-[family-name:var(--font-playfair)] text-[23px] italic text-[#BD9452]">
                  {item.number}
                </span>
              </div>

              {/* CATEGORY */}
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#397666]">
                {item.category}
              </p>

              {/* TITLE */}
              <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-[25px] font-medium text-[#15383B]">
                {item.title}
              </h3>

              {/* SUBTITLE */}
              <p className="mt-1 text-[13px] font-medium text-[#397666]">
                {item.subtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-2 text-justify text-[16px] leading-[1.6] text-[#5E706A]">
                {item.description}
              </p>

            </article>
          ))}
        </div>

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
          src={images.strategic}
          alt="Premium corporate hospitality interior"
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D26]/95 via-[#072630]/80 to-[#072630]/30" />

      <div className="relative mx-auto grid min-h-[600px] w-[90%] max-w-[1400px] items-center gap-10 py-24 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Reveal>
            <Eyebrow light>
           STRATEGIC PARTNERSHIPS
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
      {/* <Ecosystem /> */}
       {/* <Infrastructure />  */}
      <BusinessVerticals />
      <Associations />
      <Credentials />
      <Partnerships />
    </main>
  );
}
