
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const menuGroups = [
  {
    title: 'OPEN HORIZON',
    links: [
      ['Home', '/'],
      ['Who We Are', '/who-we-are'],
      ['What We Do', '/what-we-do'],
      ['Infrastructure', '/infrastructure'],
      ['Sustainability', '/sustainability'],
      ['Our Team', '/our-team'],
    ],
  },
  {
    title: 'OUR ECOSYSTEM',
    links: [
      ['MAGNUM', '/magnum'],
      ['ImageCraft', '/imagecraft'],
      ['GetSetGo', '/getsetgo'],
    ],
  },
  {
    title: 'CONNECT',
    links: [
      ['Experience & Associations', '/experience'],
      ['Contact Us', '/contact'],
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 45);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solidHeader = scrolled;

  return (
    <>
      <header
  className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
    solidHeader
      ? 'border-b border-[#DFE6E0]/80 bg-[#F8F7F3]/95 shadow-[0_5px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent'
  }`}
>
        <div className="mx-auto flex h-[76px] w-[90%] max-w-[1500px] items-center justify-between md:h-[92px]">
         <Link
  href="/"
  aria-label="Open Horizon Home"
  onClick={() => setOpen(false)}
  className="relative flex h-[68px] w-[220px] shrink-0 items-center md:h-[78px] md:w-[250px]"
>
  <span
    className={`absolute left-0 top-0 h-full bg-white transition-all duration-500 ${
      solidHeader ? 'w-0' : 'w-[180px] md:w-[235px]'
    }`}
  />

  <Image
    src="/logos/open-horizon-logo.png"
    alt="Open Horizon — Infinite Possibilities"
    fill
    priority
    sizes="(max-width: 768px) 235px, 280px"
    className="object-contain object-left"
  />
</Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open site navigation"
            aria-expanded={open}
            aria-controls="open-horizon-menu"
            className={`group flex items-center gap-5 border-0 bg-transparent p-3 transition-colors duration-300 ${
              solidHeader
                ? 'text-[#163D3C]'
                : 'text-white'
            }`}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">
              Menu
            </span>

            <span className="flex w-[28px] flex-col items-end gap-[6px]">
              <span className="h-[1.5px] w-[28px] bg-current transition-all duration-300 group-hover:w-[19px]" />
              <span className="h-[1.5px] w-[19px] bg-current transition-all duration-300 group-hover:w-[28px]" />
              <span className="h-[1.5px] w-[24px] bg-current transition-all duration-300 group-hover:w-[15px]" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="open-horizon-menu"
            className="fixed inset-0 z-[200]"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu backdrop"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-[#061D23]/75"
            />

            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-0 flex h-full w-full max-w-[780px] flex-col overflow-y-auto bg-[#F8F7F3] px-7 py-9 shadow-2xl md:px-16 md:py-12"
            >
              <div className="flex items-center justify-between border-b border-[#D9E2DB] pb-7">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#277564]">
                  EXPLORE OPEN HORIZON
                </span>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD9D0] text-[#1C463C] transition hover:bg-[#1C463C] hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="grid gap-10 py-11 md:grid-cols-2">
                {menuGroups.map((group, index) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.09,
                    }}
                  >
                    <p className="mb-5 text-[11px] font-semibold tracking-[0.18em] text-[#1686A0]">
                      {group.title}
                    </p>

                    {group.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between gap-3 border-b border-[#E0E7E0] py-3 text-[#15353C] transition-colors hover:text-[#087F9E]"
                      >
                        <span className="font-[family-name:var(--font-playfair)] text-[24px] font-medium tracking-[-0.035em]">
                          {label}
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </Link>
                    ))}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto border-t border-[#D9E2DB] pt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A8A82]">
                Infinite Possibilities · New Delhi, India
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
