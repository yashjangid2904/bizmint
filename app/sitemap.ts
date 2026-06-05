import type { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/lib/services-data";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";

const BASE_URL = "https://bizmint.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/integrations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/tutorials`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/schedule-call`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/changelog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Dynamic service category pages
  const categoryRoutes: MetadataRoute.Sitemap = ALL_SERVICES.map((category) => ({
    url: `${BASE_URL}/services/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic individual service pages
  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES.flatMap((category) =>
    category.services.map((service) => {
      const slug = service.slug || service.href.split("/").pop()!;
      return {
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    })
  );

  // Dynamic resource guides and templates
  let resourceRoutes: MetadataRoute.Sitemap = [];
  try {
    await dbConnect();
    const resources = await Resource.find({ isPublished: true }).select("slug updatedAt");
    resourceRoutes = resources.map((resource) => ({
      url: `${BASE_URL}/resources/${resource.slug}`,
      lastModified: resource.updatedAt || now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch resources for sitemap:", error);
  }

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes, ...resourceRoutes];
}
