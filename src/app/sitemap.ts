import type { MetadataRoute } from "next";
import { categories, products } from "@/content/catalog";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/catalog", "/about", "/promo", "/contacts"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...categories.map((c) => ({ url: `${site.url}/catalog/${c.slug}` })),
    ...products.map((p) => ({ url: `${site.url}/catalog/${p.category}/${p.slug}` })),
  ];
}
