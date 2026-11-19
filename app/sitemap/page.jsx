import Link from "next/link";
import LegalPageLayout from "../_components/LegalPageLayout";

export const metadata = {
  title: "Sitemap | Open Horizon",
  description:
    "Explore Open Horizon's company information, specialist businesses, corporate capabilities and website policies.",
  alternates: { canonical: "/sitemap" },
};

const groups = [
  {
    number: "01",
    title: "Corporate Overview",
    summary: "Understand our enterprise platform, direction and team.",
    links: [
      { label: "Homepage", href: "/", detail: "Open Horizon at a glance" },
      { label: "Who We Are", href: "/who-we-are", detail: "Our identity and ecosystem" },
      { label: "What We Do", href: "/what-we-do", detail: "Integrated service capabilities" },
      { label: "Our Team", href: "/our-team", detail: "People and professional expertise" },
    ],
  },
  {
    number: "02",
    title: "Approach & Capabilities",
    summary: "Explore our infrastructure, values and working relationships.",
    links: [
      { label: "Infrastructure", href: "/infrastructure", detail: "Resources and capabilities" },
      { label: "Sustainability", href: "/sustainability", detail: "Responsible operations" },
      { label: "Business Verticals", href: "/#business-verticals", detail: "Our connected ecosystem" },
      { label: "Corporate Credentials", href: "/#credentials", detail: "Registrations and credentials" },
      { label: "Strategic Partnerships", href: "/#partnerships", detail: "Relationship-led coordination" },
    ],
  },
  {
    number: "03",
    title: "Specialist Businesses",
    summary: "Visit the dedicated websites of our business verticals.",
    links: [
      { label: "MAGNUM", href: "https://magnumevents.in", detail: "Event management and production", external: true },
      { label: "ImageCraft", href: "https://imgcraft.in", detail: "Photography and visual production", external: true },
      { label: "GetSetGo", href: "https://getsetgo.in", detail: "Travel, corporate travel and MICE", external: true },
    ],
  },
  {
    number: "04",
    title: "Contact & Website Information",
    summary: "Find our contact details and relevant website notices.",
    links: [
      { label: "Contact Us", href: "/contact", detail: "Corporate enquiries" },
      { label: "Privacy Policy", href: "/privacy-policy", detail: "Information-handling notice" },
      { label: "Disclaimer", href: "/disclaimer", detail: "Website and service information" },
      { label: "Sitemap", href: "/sitemap", detail: "All important pages" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <LegalPageLayout
      eyebrow="Website Directory"
      title="Explore Open Horizon"
      introduction="Find the information, capabilities and specialist services within the Open Horizon enterprise platform."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.number}
            className="group rounded-[14px] border border-[#DCE7E3] bg-white p-6 shadow-[0_12px_32px_rgba(10,55,53,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D3C9] hover:shadow-[0_17px_36px_rgba(10,55,53,0.09)] md:p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-[family-name:var(--font-playfair)] text-[27px] font-medium leading-[1.2] tracking-[-0.025em] text-[#103C3E]">
                {group.title}
              </h2>
              <span className="font-[family-name:var(--font-playfair)] text-[25px] italic text-[#C29A58]">
                {group.number}
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-[1.75] text-[#6B8079]">{group.summary}</p>
            <div className="mt-5 h-px bg-[#E2EAE6]" />
            <ul className="mt-3 space-y-1">
              {group.links.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 rounded-md py-2.5 transition-colors hover:text-[#087F9D]"
                    >
                      <span>
                        <span className="block text-[14px] font-semibold text-[#254B46]">{item.label}</span>
                        <span className="mt-0.5 block text-[12px] text-[#748780]">{item.detail}</span>
                      </span>
                      <span aria-hidden="true" className="text-[#397666]">↗</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-start justify-between gap-3 rounded-md py-2.5 transition-colors hover:text-[#087F9D]"
                    >
                      <span>
                        <span className="block text-[14px] font-semibold text-[#254B46]">{item.label}</span>
                        <span className="mt-0.5 block text-[12px] text-[#748780]">{item.detail}</span>
                      </span>
                      <span aria-hidden="true" className="text-[#397666]">↗</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-8 text-[13px] leading-[1.8] text-[#6A8078]">
        Looking for a specific service or partnership opportunity? Contact us at{" "}
        <a href="mailto:care@openhorizon.co.in" className="font-medium text-[#087F9D] underline underline-offset-4">
          care@openhorizon.co.in
        </a>.
      </p>
    </LegalPageLayout>
  );
}
