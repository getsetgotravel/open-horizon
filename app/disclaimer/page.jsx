import Link from "next/link";
import LegalPageLayout, { LegalSection } from "../components/LegalPageLayout";

export const metadata = {
  title: "Disclaimer | Open Horizon",
  description:
    "Website disclaimer for Open Horizon Commercials Private Limited, its corporate information and specialist business verticals.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      eyebrow="Corporate Information"
      title="Website Disclaimer"
      introduction="Important information regarding the use of this website, the services presented by Open Horizon and its specialist businesses."
      updated="14 November 2026"
    >
      <LegalSection number={1} id="corporate-identity" title="Corporate Identity">
        <p>
          This website presents Open Horizon, operated by <strong>Open Horizon Commercials Private Limited</strong>,
          an integrated enterprise platform encompassing event management and production, photography and visual
          production, and travel and MICE-related services.
        </p>
        <p>
          Open Horizon brings together three specialist business verticals: <strong>MAGNUM</strong> (event management
          and production), <strong>ImageCraft</strong> (photography and visual production) and <strong>GetSetGo</strong>
          (travel, corporate travel and MICE).
        </p>
      </LegalSection>

      <LegalSection number={2} id="general-information" title="General Information">
        <p>
          The content of this website is intended to provide a general corporate overview. We endeavour to keep
          descriptions clear and accurate, but website information may be revised as services, resources,
          partnerships or operating arrangements evolve.
        </p>
        <p>
          Nothing on this website should be interpreted as a binding commercial proposal, contractual guarantee,
          professional advisory opinion or representation that any particular service will be available at a
          specified time, price or location.
        </p>
      </LegalSection>

      <LegalSection number={3} id="services" title="Services and Business Capabilities">
        <p>
          References to corporate events, live experiences, hospitality, visual production, travel, MICE and
          related activities describe the capabilities and service areas of Open Horizon and its specialist
          verticals. Actual deliverables, timelines, fees and responsibilities depend on the individual brief,
          confirmed scope, supplier availability and mutually agreed commercial terms.
        </p>
        <p>
          Photographs, illustrations, venue imagery, renderings and project examples may be presented for
          information or visual context; they should not be taken as a promise that identical venues, personnel,
          equipment, experiences or outcomes are available for every engagement.
        </p>
      </LegalSection>

      <LegalSection number={4} id="enquiries" title="Enquiries, Quotations and Confirmations">
        <p>
          A website enquiry, email, telephone conversation or initial proposal does not, by itself, constitute
          a confirmed booking or service agreement. Confirmations are subject to written acceptance, applicable
          payment terms, availability and the conditions communicated for the relevant assignment.
        </p>
        <p>
          Travel arrangements, hotel services, airline schedules, visas, event venues, equipment and other
          third-party services may also be subject to separate supplier terms and requirements.
        </p>
      </LegalSection>

      <LegalSection number={5} id="relationships" title="Associations and Institutional References">
        <p>
          References to professional associations, hospitality partners, clients, experience, registrations
          or credentials should be read in their stated context. The nature, scope and status of any specific
          engagement or recognition may vary over time.
        </p>
        <p>
          The appearance of a third-party name, mark or reference does not necessarily imply an exclusive
          relationship, sponsorship or endorsement of this website.
        </p>
      </LegalSection>

      <LegalSection number={6} id="external-links" title="Third-Party Websites">
        <p>
          This website may link to the independent websites of MAGNUM, ImageCraft, GetSetGo, hospitality
          providers or other third parties. External websites have their own content, terms and privacy
          practices. Open Horizon does not control the availability or accuracy of independently operated
          third-party websites.
        </p>
      </LegalSection>

      <LegalSection number={7} id="intellectual-property" title="Intellectual Property">
        <p>
          Unless otherwise stated, the content, layout, text and original materials on this website are
          associated with Open Horizon or their respective rights holders. Logos, photographs and third-party
          trademarks remain the property of their respective owners. Unauthorised reproduction, redistribution
          or commercial reuse may infringe applicable rights.
        </p>
      </LegalSection>

      <LegalSection number={8} id="availability" title="Website Availability and Responsibility">
        <p>
          We aim to maintain a reliable and useful website; however, uninterrupted availability or freedom
          from technical errors cannot be guaranteed. To the extent permitted by applicable law, Open Horizon
          is not responsible for losses arising solely from reliance on outdated website information,
          temporary site interruptions or externally managed links.
        </p>
        <p>Nothing in this disclaimer excludes rights or responsibilities that cannot lawfully be excluded.</p>
      </LegalSection>

      <LegalSection number={9} id="contact" title="Updates and Contact">
        <p>
          We may update this disclaimer when appropriate. For clarification about a service, statement or
          corporate detail, please visit our <Link href="/contact">Contact page</Link> or email
          {" "}<a href="mailto:care@openhorizon.co.in">care@openhorizon.co.in</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
