import Link from "next/link";
import LegalPageLayout, { LegalSection } from "../_components/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy | Open Horizon",
  description:
    "Learn how Open Horizon may receive, use and protect information submitted through its corporate website and enquiries.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacy & Responsibility"
      title="Privacy Policy"
      introduction="We value confidentiality, transparent communication and responsible handling of the information shared with us through our website and business enquiries."
      updated="14 November 2026"
    >
      <LegalSection number={1} id="scope" title="Who We Are and Scope of This Policy">
        <p>
          This policy relates to the corporate website of <strong>Open Horizon Commercials Private Limited</strong>
          (referred to as “Open Horizon”, “we”, “us” or “our”). It explains how information may be handled when
          visitors browse the website, contact our team or make enquiries about our services.
        </p>
        <p>
          Open Horizon operates an integrated business ecosystem with three specialist verticals: MAGNUM,
          ImageCraft and GetSetGo. Their separately operated websites or service-specific arrangements may
          be governed by additional privacy notices or terms.
        </p>
      </LegalSection>

      <LegalSection number={2} id="information" title="Information You Share With Us">
        <p>When you contact us or submit a business enquiry, we may receive information such as:</p>
        <ul className="ml-5 list-disc space-y-1.5 pl-1">
          <li>Your name, organisation and professional role, where provided.</li>
          <li>Email address, telephone number and preferred contact method.</li>
          <li>Event, travel, hospitality, photography or project requirements you choose to describe.</li>
          <li>Messages, attachments and correspondence shared during an enquiry.</li>
        </ul>
        <p>Please avoid sending sensitive personal information unless it is necessary and specifically requested for an agreed purpose.</p>
      </LegalSection>

      <LegalSection number={3} id="technical" title="Technical Information, Cookies and Analytics">
        <p>
          Depending on the website's hosting and configuration, standard technical records may include
          browser type, device information, approximate network location, requested pages, access times
          and IP-related connection data. Such information may be used for security, troubleshooting and
          improving website performance.
        </p>
        <p>
          Cookies or similar technologies may be involved where enabled by the website or integrated
          services. Any optional analytics, advertising or tracking tools should be disclosed here if
          they are activated. Please contact us for information about the technologies in use on the
          published website.
        </p>
      </LegalSection>

      <LegalSection number={4} id="purpose" title="How Information May Be Used">
        <p>Information received through our website and business communications may be used to:</p>
        <ul className="ml-5 list-disc space-y-1.5 pl-1">
          <li>Respond to questions and assess relevant service requirements.</li>
          <li>Develop proposals, coordinate consultations and provide requested information.</li>
          <li>Connect an enquiry with the appropriate Open Horizon business vertical or team.</li>
          <li>Coordinate agreed business services with relevant partners and service providers.</li>
          <li>Maintain correspondence, resolve concerns and support legitimate operational needs.</li>
          <li>Protect the website and meet applicable legal obligations.</li>
        </ul>
        <p>We do not treat an initial enquiry as consent to unrelated marketing communications.</p>
      </LegalSection>

      <LegalSection number={5} id="sharing" title="Sharing and Service Coordination">
        <p>
          Where relevant to your request, information may be shared with authorised members of our team,
          an appropriate Open Horizon vertical, or service providers involved in preparing or delivering
          the requested service—for example, event production, hospitality, travel or visual production
          partners. We seek to limit such sharing to information reasonably required for the purpose.
        </p>
        <p>
          Information may also be disclosed where required by applicable law or a valid legal process.
          We do not represent that every third-party service provider operates under identical privacy
          practices; their own policies may apply when you interact with them directly.
        </p>
      </LegalSection>

      <LegalSection number={6} id="retention-security" title="Retention and Security">
        <p>
          We aim to retain information only for as long as reasonably necessary for the relevant enquiry,
          business relationship, operational requirement or applicable legal obligation. Actual retention
          periods can vary depending on the category of information and the nature of the engagement.
        </p>
        <p>
          We recognise the importance of appropriate organisational and technical precautions. No online
          communication or storage method can be guaranteed to be completely secure; visitors should use
          appropriate care when transmitting confidential information.
        </p>
      </LegalSection>

      <LegalSection number={7} id="choices" title="Your Choices and Requests">
        <p>
          Subject to applicable law, you may contact us to request information about personal data you
          have provided, seek correction or deletion where appropriate, withdraw a consent previously
          provided, or raise a privacy-related concern. We may need to verify a request before responding
          and may be required to retain certain records under applicable law.
        </p>
        <p>
          For these requests, write to <a href="mailto:care@openhorizon.co.in">care@openhorizon.co.in</a>
          with the subject line “Privacy Request”.
        </p>
      </LegalSection>

      <LegalSection number={8} id="external-sites" title="External Websites and Business Verticals">
        <p>
          Our site may contain links to other websites, including those of our specialist businesses
          or third-party providers. When you follow such links, the privacy terms of the destination
          website may apply. Please review those notices before sharing information.
        </p>
      </LegalSection>

      <LegalSection number={9} id="changes-contact" title="Updates and Contact Details">
        <p>
          We may revise this policy to reflect changes to website features, operational processes or
          applicable requirements. The date above identifies the version presented on this page.
        </p>
        <p>
          <strong>Open Horizon Commercials Private Limited</strong><br />
          17/6 New Rohtak Road (Opp. Street No. 10),<br />
          Anand Parbat Industrial Area, New Delhi – 110005, India.<br />
          Email: <a href="mailto:care@openhorizon.co.in">care@openhorizon.co.in</a>
        </p>
        <p>For general service queries, see our <Link href="/contact">Contact page</Link>.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
