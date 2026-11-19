import Link from "next/link";

export function LegalSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-[#DDE7E2] py-7 first:pt-0 last:border-0">
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="mt-1 shrink-0 font-[family-name:var(--font-playfair)] text-[20px] italic text-[#B58C4D]">
          {String(number).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(23px,2.25vw,30px)] font-medium leading-[1.25] tracking-[-0.025em] text-[#103C3E]">
            {title}
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-[1.9] text-[#516762] [&_a]:font-medium [&_a]:text-[#087F9D] [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-[#244B47]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LegalPageLayout({ eyebrow, title, introduction, updated, children }) {
  return (
    <main className="min-h-screen bg-[#FBFAF7] text-[#15383B]">
      {/* No header/footer here: use the site's existing root layout. */}
      <section
        className="relative isolate overflow-hidden border-b border-[#DCE7E4]"
        style={{
          background:
            "linear-gradient(113deg, #F9F7F1 0%, #F2F7F5 52%, #EAF4F6 100%)",
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-40 h-[460px] w-[460px] rounded-full border border-[#98C1B6]/30" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-24 h-[330px] w-[330px] rounded-full border border-[#BDA06A]/20" />
        <div className="relative mx-auto w-[90%] max-w-[1280px] py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#657E79]">
            <Link href="/" className="transition-colors hover:text-[#087F9D]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#176B5C]">{title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#397666]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#397666]">{eyebrow}</p>
          </div>
          <h1 className="mt-5 max-w-[900px] font-[family-name:var(--font-playfair)] text-[clamp(38px,5vw,62px)] font-medium leading-[1.1] tracking-[-0.035em] text-[#103B3D]">
            {title}
          </h1>
          <p className="mt-5 max-w-[830px] text-[16px] leading-[1.85] text-[#526D68]">{introduction}</p>
          {updated && <p className="mt-5 text-[12px] font-medium text-[#71857E]">Last updated: {updated}</p>}
        </div>
      </section>

      <div className="mx-auto grid w-[90%] max-w-[1280px] gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_275px] lg:gap-16">
        <article className="min-w-0">{children}</article>

        <aside className="lg:pt-1" aria-label="Legal information and contact">
          <div className="sticky top-28 overflow-hidden rounded-[14px] border border-[#DFE9E5] bg-white p-6 shadow-[0_15px_35px_rgba(10,55,53,0.05)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#397666]">Website Information</p>
            <div className="mt-5 grid gap-3 text-[14px] text-[#284E48]">
              <Link href="/privacy-policy" className="transition-colors hover:text-[#087F9D]">Privacy Policy</Link>
              <Link href="/disclaimer" className="transition-colors hover:text-[#087F9D]">Disclaimer</Link>
              <Link href="/sitemap" className="transition-colors hover:text-[#087F9D]">Sitemap</Link>
            </div>
            <div className="my-6 h-px bg-[#E2EAE6]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#397666]">Corporate Contact</p>
            <p className="mt-3 text-[14px] font-semibold leading-[1.6] text-[#15383B]">Open Horizon Commercials Private Limited</p>
            <a href="mailto:care@openhorizon.co.in" className="mt-3 block break-all text-[13px] text-[#087F9D] hover:underline">care@openhorizon.co.in</a>
            <p className="mt-3 text-[12px] leading-[1.7] text-[#69817A]">
              17/6 New Rohtak Road, Anand Parbat Industrial Area, New Delhi – 110005, India
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
