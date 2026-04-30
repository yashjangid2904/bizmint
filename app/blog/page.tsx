"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  BookOpen,
  Search
} from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Understanding the New MCA Guidelines for 2024",
    excerpt: "The Ministry of Corporate Affairs has introduced several changes to the annual filing process. Here's what you need to know.",
    date: "April 28, 2024",
    author: "Prateek Sharma",
    category: "Regulation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Top 5 Tax Planning Strategies for Startups",
    excerpt: "Optimize your tax liabilities and improve cash flow with these expert-verified strategies designed specifically for high-growth startups.",
    date: "April 22, 2024",
    author: "Neha Gupta",
    category: "Taxation",
    image: "https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=2022",
  },
  {
    title: "The Future of Digital Compliance in India",
    excerpt: "How AI and blockchain are reshaping the way businesses handle statutory filings and audit trails in the modern era.",
    date: "April 15, 2024",
    author: "Vikram Malhotra",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
  }
];

const BlogPage = () => {
  return (
    <div className="relative min-h-screen bg-white pt-32 pb-20 dark:bg-[#030014]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl"
          >
            Insights & <span className="text-blue-600">Updates</span>
          </motion.h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Expert analysis on regulatory changes, business strategies, and 
            the latest news from the world of compliance and finance.
          </p>

          {/* Categories / Search Bar */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
             <div className="flex flex-wrap items-center justify-center gap-2">
                {["All", "Regulation", "Taxation", "Technology", "Advisory"].map((cat) => (
                  <button 
                    key={cat}
                    className="px-6 py-2 rounded-full text-sm font-bold border border-zinc-100 bg-white hover:bg-zinc-50 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                  >
                    {cat}
                  </button>
                ))}
             </div>
             <div className="relative w-full max-w-xs">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  className="w-full h-10 pl-10 pr-4 rounded-full border border-zinc-100 bg-zinc-50/50 focus:outline-none dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-white"
                />
             </div>
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative group overflow-hidden rounded-[3rem] bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800 p-8 lg:p-12 mb-20"
        >
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video overflow-hidden rounded-[2rem]">
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                  alt="Featured Post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>
              <div>
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full dark:bg-blue-900/30">Editor's Choice</span>
                    <span className="text-xs text-zinc-400 font-bold">8 min read</span>
                 </div>
                 <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-blue-600 transition-colors">The Ultimate Guide to Foreign Direct Investment (FDI) in India</h2>
                 <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    A comprehensive look at the changing FDI landscape, reporting requirements under FEMA, 
                    and the benefits for international enterprises expanding into the Indian market.
                 </p>
                 <Link href="#" className="inline-flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
                    Read Article <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                 </Link>
              </div>
           </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-32">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="aspect-video overflow-hidden">
                 <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
              </div>
              <div className="p-8">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-900/30">
                       {post.category}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400">{post.date}</span>
                 </div>
                 <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                 </h3>
                 <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                 </p>
                 <div className="flex items-center justify-between border-t border-zinc-50 pt-6 dark:border-zinc-900">
                    <div className="flex items-center gap-2">
                       <div className="h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                          <User size={14} />
                       </div>
                       <span className="text-xs font-bold text-zinc-500">{post.author}</span>
                    </div>
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                       Read <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center">
           <Link
             href="#"
             className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-zinc-100 px-10 text-lg font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
           >
             Load More Articles
           </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
