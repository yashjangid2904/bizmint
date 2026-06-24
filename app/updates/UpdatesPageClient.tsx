"use client";

import React, { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  RefreshCw, 
  X, 
  ExternalLink, 
  Link2,
  Mail,
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Info,
  Clock,
  BookOpen
} from "lucide-react";
import DOMPurify from "isomorphic-dompurify";

interface UpdateItem {
  _id: string;
  title: string;
  link: string;
  date: string;
  sourceType: "Press Release" | "Notification" | "Draft";
  content: string;
  fetchedAt: string;
}

const getSnippet = (html: string) => {
  if (!html) return "";
  const clean = html.replace(/<[^>]*>/g, "");
  const normalized = clean.replace(/\s+/g, " ").trim();
  return normalized.length > 150 ? normalized.substring(0, 150) + "..." : normalized;
};

const formatDateYMD = (dateStr: string) => {
  try {
    const d = new Date(dateStr);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const r = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${r}`;
  } catch {
    return dateStr;
  }
};

function UpdatesContent() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [sourceType, setSourceType] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  
  // Data States
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshStats, setRefreshStats] = useState<{
    show: boolean;
    pressReleases: number;
    notifications: number;
    drafts: number;
  } | null>(null);

  // Modal State
  const [selectedUpdate, setSelectedUpdate] = useState<UpdateItem | null>(null);



  const limit = 9; // 9 updates per page

  // Fetch Updates function
  const fetchUpdates = async () => {
    setIsLoading(true);
    try {
      let url = `/api/updates?limit=${limit}&page=${page}&sourceType=${sourceType}&search=${encodeURIComponent(searchQuery)}`;
      if (fromDate) url += `&fromDate=${fromDate}`;
      if (toDate) url += `&toDate=${toDate}`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      
      setUpdates(data.updates || []);
      setTotal(data.total || 0);
      setTotalPages(data.pages || 1);
    } catch (err) {
      console.error("Failed to load updates:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch updates when query options or page change
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUpdates();
    }, 300);

    return () => clearTimeout(timer);
  }, [page, sourceType, searchQuery, fromDate, toDate]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [sourceType, searchQuery, fromDate, toDate]);

  // Handle Manual Refresh
  const handleRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setRefreshStats(null);
    try {
      const res = await fetch("/api/updates/refresh", {
        method: "POST",
      });
      if (!res.ok) throw new Error("Refresh failed");
      const data = await res.json();
      
      if (data.success && data.stats) {
        setRefreshStats({
          show: true,
          pressReleases: data.stats.pressReleases || 0,
          notifications: data.stats.notifications || 0,
          drafts: data.stats.drafts || 0,
        });
        
        // Hide stats popup after 5 seconds
        setTimeout(() => {
          setRefreshStats(prev => prev ? { ...prev, show: false } : null);
        }, 6000);
      }
      
      // Reload current list
      fetchUpdates();
    } catch (err) {
      console.error("Error refreshing updates:", err);
      alert("Failed to refresh updates. Please try again.");
    } finally {
      setIsRefreshing(false);
    }
  };

  // Helper to format Date
  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  // Helper to get Category Badge classes
  const getBadgeStyle = (type: UpdateItem["sourceType"]) => {
    switch (type) {
      case "Press Release":
        return "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50";
      case "Notification":
        return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50";
      case "Draft":
        return "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50";
      default:
        return "bg-zinc-50 text-zinc-700 border-zinc-100 dark:bg-zinc-900/20 dark:text-zinc-400 dark:border-zinc-800/50";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-32 pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-[30%] right-[5%] w-[25rem] h-[25rem] bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100/55 dark:border-blue-900/50 mb-4 select-none">
              <Clock size={12} className="animate-pulse" /> Live Tracking
            </span>
            <h1 className="font-outfit text-4xl font-extrabold text-zinc-900 md:text-5xl lg:text-6xl dark:text-white tracking-tight">
              Regulatory <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Updates</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              Real-time, cleaned regulatory notifications, press releases, and drafts fetched directly from the Reserve Bank of India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm transition-all shadow-md active:scale-98 ${
                isRefreshing
                  ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 cursor-not-allowed"
                  : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-blue-500/5 hover:shadow-lg"
              }`}
            >
              <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
              {isRefreshing ? "Syncing Regulatory Updates..." : "Refresh Regulatory Data"}
            </button>
          </motion.div>
        </div>

        {/* Refresh Results Toast / Card */}
        <AnimatePresence>
          {refreshStats && refreshStats.show && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 rounded-2xl p-4 mb-8 flex items-start gap-3 shadow-sm overflow-hidden"
            >
              <Info className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" size={18} />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">Sync Completed Successfully!</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400/90 mt-1">
                  Fetched and analyzed updates. Added: <span className="font-semibold">{refreshStats.pressReleases} Press Releases</span>, <span className="font-semibold">{refreshStats.notifications} Notifications</span>, and <span className="font-semibold">{refreshStats.drafts} Drafts</span>.
                </p>
              </div>
              <button 
                onClick={() => setRefreshStats(prev => prev ? { ...prev, show: false } : null)}
                className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-white"
              >
                <X size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Section */}
        <div className="bg-white dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-6 mb-10 shadow-sm">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen size={16} className="text-blue-500" /> Filter & Search Updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Search */}
            <div className="md:col-span-5 relative">
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Search Title</label>
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 text-zinc-400" size={16} />
                <input
                  type="text"
                  placeholder="Search updates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Source Type */}
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Source Type</label>
              <select
                value={sourceType}
                onChange={(e) => setSourceType(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-xl px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-300 outline-none focus:border-blue-500 transition-colors"
              >
                <option value="All">All Sources</option>
                <option value="Press Release">Press Releases</option>
                <option value="Notification">Notifications</option>
                <option value="Draft">Drafts</option>
              </select>
            </div>

            {/* From Date */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">From Date</label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-3.5 text-zinc-400 pointer-events-none" size={14} />
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-xl pl-9 pr-3 py-2.5 text-sm text-zinc-800 dark:text-zinc-300 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* To Date */}
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">To Date</label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-3.5 text-zinc-400 pointer-events-none" size={14} />
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-xl pl-9 pr-3 py-2.5 text-sm text-zinc-800 dark:text-zinc-300 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
          
          {/* Quick Clear Filters */}
          {(searchQuery || sourceType !== "All" || fromDate || toDate) && (
            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSourceType("All");
                  setFromDate("");
                  setToDate("");
                }}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            Showing <span className="text-zinc-900 dark:text-white">{updates.length}</span> of <span className="text-zinc-900 dark:text-white">{total}</span> updates
          </p>
        </div>

        {/* Updates Grid */}
        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-32 gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400" />
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Fetching latest regulatory data...</p>
          </div>
        ) : updates.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-zinc-900/40 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
            <FileText className="mx-auto text-zinc-300 dark:text-zinc-700 mb-4" size={48} />
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-1">No Updates Found</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
              We couldn&apos;t find any updates matching your search query or filters. Try adjusting your search criteria.
            </p>
          </div>
        ) : (
          <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {updates.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 p-6 cursor-pointer"
                  onClick={() => setSelectedUpdate(item)}
                >
                  <div className="flex flex-col flex-1">
                    {/* Top Row: Badges & Direct link */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 rounded px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                          RBI
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                          {item.sourceType === "Press Release" ? "General" : item.sourceType}
                        </span>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        title="View Official Link"
                      >
                        <Link2 size={16} className="rotate-[135deg] hover:scale-105 transition-transform" />
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] font-extrabold text-zinc-900 dark:text-white leading-snug line-clamp-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed line-clamp-2">
                      {getSnippet(item.content)}
                    </p>

                    {/* Metadata lines */}
                    <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                      <div>
                        <span className="font-semibold text-zinc-500 dark:text-zinc-400">Date:</span> {formatDateYMD(item.date)}
                      </div>
                      <div>
                        <span className="font-semibold text-zinc-500 dark:text-zinc-400">Applies to:</span> Banks, NBFCs, FIs
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-zinc-500 dark:text-zinc-400">Official Link:</span>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1"
                        >
                          View Document <ExternalLink size={12} className="shrink-0" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Impact badge */}
                  <span className="inline-block bg-orange-50 text-orange-700 dark:bg-orange-950/20 dark:text-orange-400 border border-orange-100 dark:border-orange-900/50 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide w-fit mt-5 select-none">
                    High Impact
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 border-t border-zinc-200/60 dark:border-zinc-800/40 pt-8">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 select-none">
                  Page <span className="text-zinc-900 dark:text-white font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Details Slide-over Drawer / Overlay Modal */}
      <AnimatePresence>
        {selectedUpdate && (
          <div className="fixed inset-0 z-[150] flex items-center justify-end overflow-hidden">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedUpdate(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl h-full bg-white dark:bg-zinc-950 shadow-2xl flex flex-col z-10 border-l border-zinc-200 dark:border-zinc-800"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/30">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getBadgeStyle(selectedUpdate.sourceType)}`}>
                    {selectedUpdate.sourceType}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                    <Calendar size={12} /> {formatDate(selectedUpdate.date)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedUpdate(null)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable HTML content) */}
              <div className="flex-1 overflow-y-auto px-8 py-8 overscroll-contain">
                <h2 className="font-outfit text-2xl font-bold text-zinc-900 dark:text-white leading-tight mb-8">
                  {selectedUpdate.title}
                </h2>

                {/* Sanitized Document content */}
                <div 
                  className="prose prose-base prose-zinc dark:prose-invert max-w-none prose-headings:font-outfit prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline break-words"
                  dangerouslySetInnerHTML={{ 
                    __html: DOMPurify.sanitize(selectedUpdate.content) 
                  }}
                />
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/30">
                <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                  Document scraped & verified at {formatDate(selectedUpdate.fetchedAt)}
                </span>
                <a
                  href={selectedUpdate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-md shadow-blue-500/10"
                >
                  View on RBI Website <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


    </div>
  );
}

export default function UpdatesPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400" />
      </div>
    }>
      <UpdatesContent />
    </Suspense>
  );
}
