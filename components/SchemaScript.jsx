import { site } from '../data/site';

export default function SchemaScript() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Open Horizon',
    url: site.url,
    description: site.description,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
