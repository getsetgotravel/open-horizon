// Optional: generates https://openhorizon.co.in/sitemap.xml for search engines.
// Keep ONLY routes that actually exist on the deployed website.
const baseUrl = "https://openhorizon.co.in";

export default function sitemap() {
  const routes = [
    "",
    "/who-we-are",
    "/what-we-do",
    "/infrastructure",
    "/sustainability",
    "/our-team",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/sitemap",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
