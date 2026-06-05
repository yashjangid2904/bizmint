import type { Metadata } from "next";
import { ALL_SERVICES } from "@/lib/services-data";
import ServicePageClient from "./ServicePageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Try to find a specific service
  const service = ALL_SERVICES.flatMap((cat) => cat.services).find((s) => {
    const derivedSlug = s.slug || s.href.split("/").pop();
    return derivedSlug === slug;
  });

  // Try to find a category
  const category = ALL_SERVICES.find((cat) => cat.slug === slug);

  if (service) {
    return {
      title: service.metaTitle || `${service.name} | Bizmint LLP`,
      description: service.metaDescription || service.description,
      alternates: {
        canonical: `https://bizmint.in/services/${slug}`,
      },
      openGraph: {
        title: service.metaTitle || `${service.name} | Bizmint LLP`,
        description: service.metaDescription || service.description,
        url: `https://bizmint.in/services/${slug}`,
        type: "website",
      },
    };
  }

  if (category) {
    return {
      title: `${category.title} Services`,
      description: category.description,
      alternates: {
        canonical: `https://bizmint.in/services/${slug}`,
      },
      openGraph: {
        title: `${category.title} Services | Bizmint LLP`,
        description: category.description,
        url: `https://bizmint.in/services/${slug}`,
      },
    };
  }

  return {
    title: "Service Not Found",
    description: "The requested service page could not be found.",
  };
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];

  ALL_SERVICES.forEach((cat) => {
    // Category slug
    slugs.push({ slug: cat.slug });

    // Individual service slugs
    cat.services.forEach((s) => {
      const serviceSlug = s.slug || s.href.split("/").pop();
      if (serviceSlug) {
        slugs.push({ slug: serviceSlug });
      }
    });
  });

  return slugs;
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}
