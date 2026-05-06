"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Upload } from "lucide-react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CATEGORIES = ["Blogs", "Legal Updates", "Industry Guides", "Case Studies", "Compliance News"];

export default function CreateResource() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    category: CATEGORIES[0],
    thumbnail: "",
    featured: false,
    isPublished: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleContentChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      if (res.ok) {
        const data = await res.json();
        setFormData((prev) => ({ ...prev, thumbnail: data.url }));
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      alert("An error occurred during upload");
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        alert(data.error || "Failed to create resource");
      }
    } catch (error) {
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-blue-600 mb-8">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl shadow-blue-900/5">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Create New Resource</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Title *</label>
                <input
                  required
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Slug (Optional)</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="auto-generated-if-empty"
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                >
                  {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Thumbnail URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                  <label className="flex items-center justify-center shrink-0 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors rounded-xl text-sm font-semibold cursor-pointer">
                    {isUploading ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} className="mr-2" />}
                    {isUploading ? "Uploading..." : "Upload"}
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploading} />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Short Description *</label>
              <textarea
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 text-zinc-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Content (Rich Text) *</label>
              <div className="bg-white text-zinc-900 rounded-xl overflow-hidden border border-zinc-200">
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  value={formData.content}
                  onChange={handleContentChange}
                  className="h-64 mb-12"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Featured Resource</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleChange}
                  className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Publish Immediately</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.title || !formData.content}
              className="mt-4 flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 ml-auto"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              Save Resource
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
