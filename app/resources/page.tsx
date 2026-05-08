"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ChevronRight, FileText, PlayCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = ["All", "Blogs", "Legal Updates", "Industry Guides", "Case Studies", "Compliance News"];

function ResourcesContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") || "All";
  
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [resources, setResources] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setActiveCategory(defaultCategory);
  }, [defaultCategory]);

  useEffect(() => {
    const fetchResources = async () => {
      setIsLoading(true);
      try {
        const url = `/api/resources?category=${activeCategory}&search=${searchQuery}`;
        const res = await fetch(url);
        const data = await res.json();
        setResources(Array.isArray(data) ? data : []);

        if (activeCategory === "All" || activeCategory === "YouTube") {
          const vRes = await fetch("/api/videos");
          const vData = await vRes.json();
          setVideos(Array.isArray(vData) ? vData : []);
        }
      } catch (error) {
        console.error("Failed to fetch resources");
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce search
    const timer = setTimeout(() => {
      fetchResources();
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-20 dark:bg-black">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-12 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Insights & Knowledge
          </span>
          <h1 className="mt-6 font-outfit text-4xl font-extrabold text-zinc-900 md:text-6xl dark:text-white">
            Bizmint <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Resources</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Expert insights, legal updates, and comprehensive guides to help you navigate business compliance.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="relative flex items-center w-full shadow-lg rounded-2xl bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 p-2">
            <Search className="ml-4 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Search resources, articles, updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent px-4 py-3 outline-none text-zinc-800 dark:text-white placeholder:text-zinc-400"
            />
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-blue-300 hover:text-blue-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setActiveCategory("YouTube")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === "YouTube"
                ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                : "bg-white text-zinc-600 border border-zinc-200 hover:border-red-300 hover:text-red-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-red-400"
            }`}
          >
            <PlayCircle size={16} /> YouTube Channel
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-6 lg:px-12 mx-auto max-w-7xl">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Render Resources */}
            {activeCategory !== "YouTube" && resources.map((resource, idx) => (
              <motion.div
                key={resource._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {resource.thumbnail ? (
                    <img src={resource.thumbnail} alt={resource.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FileText className="text-zinc-300 dark:text-zinc-700" size={48} />
                    </div>
                  )}
                  {resource.featured && (
                    <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {new Date(resource.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6 flex-1">
                    {resource.description}
                  </p>
                  <Link href={`/resources/${resource.slug}`} className="flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
                    Read Article <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Render Videos */}
            {(activeCategory === "YouTube" || activeCategory === "All") && videos.map((video, idx) => (
              <motion.div
                key={video._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 overflow-hidden hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {video.thumbnail ? (
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <PlayCircle className="text-zinc-300 dark:text-zinc-700" size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 text-white rounded-full p-4 shadow-lg shadow-red-900/50">
                      <PlayCircle size={32} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      <PlayCircle size={14} /> YouTube
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : new Date(video.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6 flex-1">
                    {video.description}
                  </p>
                  <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 py-3 font-semibold text-zinc-900 dark:text-white hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors">
                    Watch Now
                  </a>
                </div>
              </motion.div>
            ))}

            {!isLoading && resources.length === 0 && videos.length === 0 && (
              <div className="col-span-full py-20 text-center text-zinc-500">
                No resources found matching your criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-50 pt-32 pb-20 dark:bg-black flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <ResourcesContent />
    </Suspense>
  );
}
