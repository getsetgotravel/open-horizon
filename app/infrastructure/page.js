
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = {
  hero: "/images/hero/infrastructure.png",
  office: "/images/hero/INFRASTRUCTURE2.png",
  physical:"/images/hero/physical.png",
  studio: "/images/hero/Imagecraft-vertical.png",
  professional:"/images/hero/business.png",
  intelligent:"/images/hero/intelligent.png",
  financial:"/images/hero/financial.png",
  executive: "/images/hero/infrastructure.png",
  events: "/images/hero/magnum-vertical.png",
  travel: "/images/hero/getsetgo verticals.png",
  Sustainable:"/images/hero/Sustainable.png"
};

const headingClass =
  "font-[family-name:var(--font-playfair)] text-[30px] md:text-[36px] font-medium leading-[1.2] tracking-[-0.035em]";

const bodyClass = "text-[15px] md:text-[16px] leading-[1.9]";
const ease = [0.22, 1, 0.36, 1];

// =========================================
// SHARED COMPONENTS
// =========================================

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.7,
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
          light ? "bg-[#A4D2C5]" : "bg-[#2F7768]"
        }`}
      />

      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
          light ? "text-[#D5EAE4]" : "text-[#367264]"
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
          className={`${headingClass} mt-5 ${
            light ? "text-white" : "text-[#17373C]"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.15}>
          <p
            className={`${bodyClass} mt-5 max-w-[710px] md:text-justify ${
              light ? "text-white/75" : "text-[#617478]"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-[54px] items-center justify-between gap-8 bg-[#087F9D] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#176B5C] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </Link>
  );
}

function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#173D43] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 hover:scale-[1.025]"
      />
    </div>
  );
}

// =========================================
// SECTION 03–07 DATA
// =========================================

const editorialSections = [
  
{
  id: "physical-resources",
  eyebrow: "PHYSICAL INFRASTRUCTURE & OPERATIONAL RESOURCES",
  title: "Infrastructure Excellence",

  image: images.physical,

  alt: "Corporate offices and operational infrastructure",

  description: (
    <>
      Our{" "}
      <strong className="font-bold text-[#087F9D]">
        company-owned offices, warehouses and production
        resources
      </strong>{" "}
      form the physical backbone of our operations.
      These facilities support corporate administration,
      business planning, inventory management, equipment
      maintenance and logistical coordination across
      our business verticals.

      <span className="mt-5 block">
        Considerable investments in{" "}
        <strong className="font-bold text-[#087F9D]">
          professional photography and cinematography
          systems, production equipment, lighting and
          audio-visual technology
        </strong>{" "}
        provide our businesses with ready access to
        essential infrastructure and specialised
        operational resources.
      </span>

      <span className="mt-5 block">
        Systematic maintenance, organised storage and
        planned deployment help us maintain equipment
        readiness, improve operational efficiency
        and maximise returns on capital investment.
      </span>
    </>
  ),

  nextId: "human-capital",
  nextText: "Our Professional Network",
},


{
  id: "human-capital",
  eyebrow: "HUMAN CAPITAL & PROFESSIONAL NETWORK",
  title: "Professional Excellence",
  image: images.professional,

  alt: "Professional team collaborating in a modern workplace",

  description: (
    <>
      
      <span className="mt-5 block">
        Open Horizon is supported by{" "}
        <strong className="font-bold text-[#087F9D]">
          50+ experienced professionals
        </strong>
        , bringing together expertise across business
        management, hospitality, events, travel,
        photography, entertainment, creative disciplines,
        technology and commercial operations.
      </span>


      <span className="mt-5 block">
        Our capabilities extend through an established
        network of{" "}
        <strong className="font-bold text-[#087F9D]">
          1,000+ trusted associates
        </strong>
        , including regular freelancers, technical
        specialists, creative professionals, consultants
        and service providers.
      </span>

      <span className="mt-5 block">
        This combination of in-house expertise and
        specialised external resources provides access
        to a broad talent pool, enabling us to assemble
        teams suited to the requirements, complexity
        and scale of individual assignments.
      </span>
    </>
  ),

  nextId: "technology",
  nextText: "Technology & Innovation",
},



{
  id: "technology",
  eyebrow: "TECHNOLOGY & MIND–MACHINE SYNERGY",
  title: "Intelligent Innovation",

  image:images.intelligent,
  alt: "Advanced digital technology and artificial intelligence",

  description: (
    <>
     We recognise the growing importance
      of{" "}
      <strong className="font-bold text-[#087F9D]">
        artificial intelligence, automation, digital platforms
        and advanced production technologies
      </strong>{" "}
      in improving business efficiency and strengthening
      professional capabilities.

      <span className="mt-2 block">
        Our approach is guided by the concept of{" "}
        <strong className="font-bold text-[#087F9D]">
          Mind–Machine Synergy
        </strong>
        , bringing together human intelligence, experience
        and judgement with the speed, precision and
        efficiency of technology.
      
        We embrace AI-enabled tools and digital systems
        to support business planning, information management,
        creative development, communication and
        operational coordination.
      </span>

      <span className="mt-5 block">
        Clearly defined{" "}
        <strong className="font-bold text-[#087F9D]">
          Standard Operating Procedures (SOPs)
        </strong>{" "}
        and structured workflows further strengthen
        consistency, accountability and coordination
        between teams and business associates.
      </span>
    </>
  ),

  nextId: "financial-resilience",
  nextText: "Financial Resilience",
},



{
  id: "financial-resilience",
  eyebrow: "FINANCIAL RESILIENCE",
  title: "Financial Resilience",
  accent: "",

  image:images.financial,
    
  alt: "Corporate financial planning and performance analysis",

  description: (
    <>
      

      <span className="mt-1 block">
        Financial prudence is integral to our
      infrastructure strategy. Our{" "}
        <strong className="font-bold text-[#087F9D]">
          ownership-led model
        </strong>
        , combined with disciplined capital allocation
        and responsible expenditure, provides a strong
        foundation for long-term financial stability.
        A{" "}
        <strong className="font-bold text-[#087F9D]">
          lean fixed-cost structure
        </strong>{" "}
        enables us to maintain commercial flexibility
        while directing resources towards business
        development, technological advancement and
        the expansion of our professional capabilities.
      </span>

      <span className="mt-2 block">
        We place emphasis on optimising asset utilisation,
        coordinating resource deployment and achieving
        greater operational efficiency across our
        business verticals.
      </span>

      <span className="mt-2 block">
        Our financial approach combines careful planning,
        commercial discipline and a long-term perspective,
        with a consistent focus on{" "}
        <strong className="font-bold text-[#087F9D]">
          maximising value for every rupee invested.
        </strong>
      </span>
    </>
  ),

  nextId: "sustainable-assets",
  nextText: "Sustainable Asset Management",
},

{
  id: "sustainable-assets",
  eyebrow: "SUSTAINABLE ASSET MANAGEMENT",
  title: "Sustainable Asset Management",
  accent: "",

  image:images.Sustainable,

  alt: "Green architecture and sustainable infrastructure",

  description: (
    <>
      Responsible resource management forms an integral part
      of our business culture. Our emphasis on{" "}
      <strong className="font-bold text-[#087F9D]">
        high-quality, durable and reusable assets
      </strong>{" "}
      supports efficient utilisation over extended
      operational lifecycles. Regular maintenance,
      systematic inventory management and planned
      deployment help preserve asset value while
      improving resource efficiency.

      <span className="mt-5 block">
        We encourage responsible sourcing, efficient
        logistics, optimum use of available equipment
        and technology-led planning to minimise material
        consumption, reduce operational waste and
        lower our carbon footprint.
      </span>
    </>
  ),

  additional: (
    <>
      These practices reflect our commitment to combining{" "}
      <strong className="font-bold text-[#087F9D]">
        commercial efficiency with environmental responsibility
      </strong>
      , ensuring that sustainable thinking remains part
      of our everyday operations and future investment decisions.
    </>
  ),

  nextId: "integrated-capabilities",
  nextText: "Integrated Capabilities",
},

];

// =========================================
// INFRASTRUCTURE PAGE
// =========================================

export default function InfrastructurePage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#F8F7F3] font-[family-name:var(--font-inter)]">

      {/* =====================================
          SECTION 01 — CINEMATIC HERO
          ===================================== */}

      <section className="relative isolate h-[100svh] min-h-[690px] overflow-hidden bg-[#09262F] text-white">

        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Open Horizon corporate infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* DARK GRADIENT */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(3,26,33,0.70) 0%,
                rgba(3,26,33,0.65) 25%,
                rgba(3,26,33,0.45) 50%,
                rgba(3,26,33,0.25) 75%,
                rgba(3,26,33,0.10) 100%
              )
            `,
          }}
        />

        <div className="relative z-10 mx-auto flex h-full w-[90%] max-w-[1440px] items-end pb-[115px] md:pb-[135px]">

          <div className="max-w-[850px]">
            <Reveal>

              <Eyebrow light>
                INFRASTRUCTURE & CAPABILITIES
              </Eyebrow>

              <h1 className={`${headingClass} mt-7 text-white`}>
                The Strength Behind Our Operations
              </h1>

              <p className="mt-7 max-w-[650px] text-[15px] leading-[1.9] text-white/85 md:text-[17px]">
                A strong, asset-backed foundation bringing
                together company-owned infrastructure,
                specialist resources, experienced professionals
                and advanced technology.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <PrimaryButton href="#our-foundation">
                  Explore Infrastructure
                </PrimaryButton>

                <Link
                  href="#integrated-capabilities"
                  className="inline-flex min-h-[54px] items-center border border-white/60 px-7 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-[#17383D]"
                >
                  Our Capabilities
                </Link>

              </div>

            </Reveal>
          </div>

        </div>
      </section>

      {/* =====================================
          SECTION 02 — CORPORATE FOUNDATION
          EXISTING DESIGN UNCHANGED
          ===================================== */}

      <section
        id="our-foundation"
        className="bg-white px-6 py-20 md:px-14 md:py-28"
      >
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* LEFT — CONTENT */}
          <div>

            <SectionTitle
              eyebrow="OUR CORPORATE FOUNDATION"
              title={<>Asset-Backed Strength</>}
              description={
                <>
                  Open Horizon operates on a{" "}
                  <strong className="font-bold text-[#087F9D]">
                    strong, asset-backed business model
                  </strong>
                  , supported by substantial capital investments
                  in company-owned offices, warehouses,
                  professional production resources and advanced
                  technology. This infrastructure provides
                  a stable foundation for our diversified operations.
                </>
              }
            />

            <Reveal delay={0.18}>
              <p
                className={`${bodyClass} mt-5 text-[#617478] md:text-justify`}
              >
                Backed by{" "}
                <strong className="font-bold text-[#087F9D]">
                  50+ experienced professionals
                </strong>{" "}
                and an extensive network of{" "}
                <strong className="font-bold text-[#087F9D]">
                  1,000+ trusted associates
                </strong>
                , Open Horizon combines physical infrastructure,
                specialist expertise and professional relationships
                to deliver dependable execution and lasting value.
              </p>

             

            </Reveal>

          </div>

          {/* RIGHT — IMAGE */}
          <Reveal>
            <div className="relative group">

              <div className="overflow-hidden rounded-[16px] shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-shadow duration-500 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)]">

                <Photo
                  src={images.office}
                  alt="Premium corporate conference room"
                  className="h-[350px] md:h-[490px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

              {/* BOTTOM TEXT PANEL */}
              <div className="absolute -bottom-5 left-0 rounded-[10px] bg-[#2E8B7D] px-7 py-6 text-white shadow-[0_6px_18px_rgba(0,0,0,0.12)] md:-left-6">

                <p className="font-[family-name:var(--font-playfair)] text-[30px] italic leading-[1.3]">
                  Built for the long term.
                </p>

              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================
          SECTION 03–07
          SAME 50/50 STRUCTURE AS SECTION 02
          ===================================== */}

      {editorialSections.map((item, index) => {
        const imageLeft = index % 2 === 0;

        return (
          <section
            key={item.id}
            id={item.id}
            className={`scroll-mt-24 px-6 py-20 sm:px-8 md:px-14 md:py-28 ${
              index % 2 === 0
                ? "bg-[#FAF9F5]"
                : "bg-white"
            }`}
          >

            {/* EQUAL LEFT & RIGHT MARGINS */}
            <div className="mx-auto grid w-full max-w-[1400px] items-stretch gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

              {/* TEXT — FIRST ON MOBILE */}
              <Reveal
                delay={0.1}
                className={`flex h-full items-center ${
                  imageLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="w-full py-2 lg:py-6">

                  {/* SAME SECTION TITLE STYLE */}
                  <SectionTitle
                    eyebrow={item.eyebrow}
                    title={
                      <>
                        {item.title}{" "}
                        <span className="text-[#367264]">
                          {item.accent}
                        </span>
                      </>
                    }
                    description={item.description}
                  />

                  {/* SECOND PARAGRAPH */}
                  <Reveal delay={0.18}>

                    <p
                      className={`${bodyClass} mt-5 text-[#617478] md:text-justify`}
                    >
                      {item.additional}
                    </p>

                    

                  </Reveal>

                </div>
              </Reveal>

              {/* LARGE FULL-HEIGHT IMAGE */}
              <Reveal
                className={`h-full ${
                  imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="group relative h-[340px] overflow-hidden rounded-[16px] bg-[#DDE7E3] shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-shadow duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] sm:h-[420px] lg:h-full lg:min-h-[490px]">

                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.045]"
                  />

                </div>
              </Reveal>

            </div>

          </section>
        );
      })}

      {/* =====================================
          SECTION 08 — INTEGRATED CAPABILITIES
          SAME 50/50 STRUCTURE
          ===================================== */}

      <section
        id="integrated-capabilities"
        className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 md:px-14 md:py-28"
      >
        <div className="mx-auto grid w-full max-w-[1400px] items-stretch gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* LEFT — CONTENT */}
          <Reveal className="flex h-full items-center">

            <div className="w-full py-2 lg:py-6">

              <SectionTitle
                eyebrow="Business Scalability"
                title={
                  <>
                    Integrated Capabilities{" "}
                   
                  </>
                }
                description={
                  <>
                    Open Horizon brings together{" "}
                    <strong className="font-bold text-[#087F9D]">
                      MAGNUM, ImageCraft and GetSetGo
                    </strong>{" "}
                    within a common corporate foundation.
                    Shared infrastructure, technology,
                    professional networks and centralised
                    management support coordinated operations
                    while preserving each business's
                    specialised identity.
                  </>
                }
              />

              <Reveal delay={0.18}>

                <p
                  className={`${bodyClass} mt-5 text-[#617478] md:text-justify`}
                >
                  Our integrated operating model supports
                  resource flexibility, collaboration and
                  business scalability across corporate services,
                  event production, visual media and travel.
                </p>

              </Reveal>

            </div>

          </Reveal>

          {/* RIGHT — FULL-HEIGHT BUSINESS IMAGE */}
          <Reveal className="h-full">

            <div className="group relative h-[340px] overflow-hidden rounded-[16px] bg-[#173D43] shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-shadow duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] sm:h-[420px] lg:h-full lg:min-h-[490px]">

              <div className="grid h-full grid-cols-3 gap-[2px]">

                {[
                  {
                    name: "MAGNUM",
                    image: images.events,
                  },
                  {
                    name: "ImageCraft",
                    image: images.studio,
                  },
                  {
                    name: "GetSetGo",
                    image: images.travel,
                  },
                ].map((brand) => (

                  <div
                    key={brand.name}
                    className="group/brand relative h-full min-w-0 overflow-hidden"
                  >

                    <Image
                      src={brand.image}
                      alt={`${brand.name} business`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 18vw"
                      className="object-cover transition-transform duration-700 group-hover/brand:scale-[1.06]"
                    />

                    {/* BOTTOM GRADIENT */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031E25]/90 via-transparent to-transparent" />

                    {/* BRAND NAME */}
                    <p className="absolute bottom-6 left-1 right-1 break-words text-center font-[family-name:var(--font-playfair)] text-[15px] font-medium text-white sm:text-[20px] lg:text-[24px]">
                      {brand.name}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>
      </section>

    
{/* SECTION 09 — CLOSING STATEMENT */}

<section className="relative overflow-hidden bg-gradient-to-r from-[#17473D] via-[#236655] to-[#32816C] px-6 py-14 text-center text-white md:py-20">

  <Reveal className="mx-auto max-w-[1000px]">

    <div className="mx-auto h-px w-16 bg-[#A7D6C7]" />

    <h2 className="mx-auto mt-7 max-w-[950px] font-[family-name:var(--font-playfair)] text-[30px] font-normal leading-[1.28] tracking-[-0.025em] text-white md:text-[38px]">
      Our infrastructure is a long-term investment
      in the strength, independence and future
      of Open Horizon.
    </h2>

    <p className="mx-auto mt-6 max-w-[760px] font-[family-name:var(--font-inter)] text-[15px] font-normal leading-[1.85] tracking-[0.005em] text-[#E1F0EA] md:text-[17px]">
      Creating lasting value for our businesses,
      clients and professional partners.
    </p>

    <div className="mx-auto mt-7 h-px w-16 bg-[#A7D6C7]" />

  </Reveal>

</section>


    </main>
  );
}
