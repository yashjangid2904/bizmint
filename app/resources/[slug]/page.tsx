import type { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import Resource from "@/models/Resource";
import ResourceSlugPageClient from "./ResourceSlugPageClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    await dbConnect();
    const query = slug.match(/^[0-9a-fA-F]{24}$/) 
      ? { _id: slug } 
      : { slug: slug };
      
    const resource = await Resource.findOne(query);

    if (resource) {
      return {
        title: `${resource.title} | Bizmint LLP`,
        description: resource.description || `Read our guide/template on "${resource.title}".`,
        alternates: {
          canonical: `https://bizmint.in/resources/${slug}`,
        },
        openGraph: {
          title: `${resource.title} | Bizmint LLP`,
          description: resource.description || `Read our guide/template on "${resource.title}".`,
          url: `https://bizmint.in/resources/${slug}`,
          type: "article",
          images: resource.thumbnail ? [{ url: resource.thumbnail }] : [],
        },
      };
    }
  } catch (error) {
    console.error("Failed to generate metadata for resource:", error);
  }

  return {
    title: "Resource | Bizmint LLP",
    description: "Read this compliance guide, business template, or resource from Bizmint LLP.",
    alternates: {
      canonical: `https://bizmint.in/resources/${slug}`,
    },
  };
}

export default function ResourceSlugPage() {
  return <ResourceSlugPageClient />;
}
