"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Youtube } from "lucide-react";

export default function CreateVideo() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    youtubeUrl: "",
    thumbnail: "",
    featured: false,
    publishedAt: new Date().toISOString().slice(0, 16),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        alert(data.error || "Failed to create video");
      }
    } catch (error) {
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to extract thumbnail from YouTube URL
  const extractThumbnail = () => {
    const url = formData.youtubeUrl;
    const match = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
    if (match && match[1]) {
      const videoId = match[1];
      setFormData(prev => ({ ...prev, thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` }));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 mb-8">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl shadow-red-900/5">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            <Youtube className="text-red-600" /> Create YouTube Link
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Video Title *</label>
              <input
                required
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">YouTube URL *</label>
                <div className="flex gap-2">
                  <input
                    required
                    type="url"
                    name="youtubeUrl"
                    value={formData.youtubeUrl}
                    onChange={handleChange}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={extractThumbnail}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-sm font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    Extract Thumbnail
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Thumbnail URL</label>
                <input
                  type="text"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="Will be auto-extracted"
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {formData.thumbnail && (
              <div className="rounded-xl overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-800">
                <img src={formData.thumbnail} alt="Thumbnail preview" className="w-full h-full object-cover" />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Published At</label>
                <input
                  type="datetime-local"
                  name="publishedAt"
                  value={formData.publishedAt}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center gap-2 cursor-pointer mt-6">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Featured Video</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.title || !formData.youtubeUrl}
              className="mt-4 flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all disabled:opacity-50 ml-auto"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Save Video
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
