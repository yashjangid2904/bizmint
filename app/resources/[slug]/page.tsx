"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";

export default function ResourceSlugPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [resource, setResource] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await fetch(`/api/resources/${slug}`);
        if (!res.ok) {
          router.push("/resources");
          return;
        }
        const data = await res.json();
        setResource(data);
      } catch (error) {
        router.push("/resources");
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchResource();
  }, [slug, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!resource) return null;

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-20 dark:bg-black overflow-x-hidden max-w-full">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link 
          href="/resources" 
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Resources
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Tag size={12} /> {resource.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-zinc-500">
              <Calendar size={14} /> {new Date(resource.createdAt).toLocaleDateString()}
            </span>
          </div>

          <h1 className="font-outfit text-4xl font-extrabold text-zinc-900 md:text-5xl dark:text-white mb-8">
            {resource.title}
          </h1>

          {resource.thumbnail && (
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl mb-12 shadow-2xl shadow-blue-900/10 border border-zinc-200 dark:border-zinc-800">
              <img src={resource.thumbnail} alt={resource.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div 
            className="prose prose-lg prose-zinc dark:prose-invert max-w-none prose-headings:font-outfit prose-a:text-blue-600 hover:prose-a:text-blue-500 break-words overflow-hidden"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(resource.content) }}
          />
        </motion.div>
      </div>
    </div>
  );
}
