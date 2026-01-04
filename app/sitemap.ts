import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ippan.org";
  const routes = ["", "/mission", "/programs", "/governance", "/transparency", "/resources", "/contact"];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
