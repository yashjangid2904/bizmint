"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Video, FileText, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"resources" | "videos">("resources");
  const [resources, setResources] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const router = useRouter();

  const fetchData = async () => {
    try {
      if (activeTab === "resources") {
        const res = await fetch("/api/resources");
        const data = await res.json();
        setResources(Array.isArray(data) ? data : []);
      } else {
        const res = await fetch("/api/videos");
        const data = await res.json();
        setVideos(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this?")) return;
    
    try {
      const endpoint = activeTab === "resources" ? `/api/resources/${id}` : `/api/videos/${id}`;
      await fetch(endpoint, { method: "DELETE" });
      fetchData();
    } catch (error) {
      alert("Failed to delete");
    }
  };

  const handleLogout = () => {
    document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12 px-6 lg:px-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 flex flex-col gap-2">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2 px-4">Admin Panel</h2>
          <button
            onClick={() => setActiveTab("resources")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              activeTab === "resources" ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            }`}
          >
            <FileText size={18} /> Resources
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              activeTab === "videos" ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400" : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            }`}
          >
            <Video size={18} /> YouTube Videos
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <LayoutDashboard size={24} className="text-blue-600" />
            {activeTab === "resources" ? "Manage Resources" : "Manage Videos"}
          </h1>
          <Link
            href={`/admin/dashboard/create-${activeTab === "resources" ? "resource" : "video"}`}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            <Plus size={18} /> Add New
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-500">
                <th className="pb-4 pl-4">Title</th>
                {activeTab === "resources" && <th className="pb-4">Category</th>}
                <th className="pb-4">Status</th>
                <th className="pb-4 text-right pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === "resources" ? resources : videos).map((item) => (
                <tr key={item._id} className="border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="py-4 pl-4 font-medium text-zinc-900 dark:text-white">
                    {item.title}
                  </td>
                  {activeTab === "resources" && (
                    <td className="py-4 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.category}
                    </td>
                  )}
                  <td className="py-4">
                    {activeTab === "resources" ? (
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${item.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {item.isPublished ? 'Published' : 'Draft'}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Video</span>
                    )}
                  </td>
                  <td className="py-4 text-right pr-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleDelete(item._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {(activeTab === "resources" ? resources : videos).length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-zinc-500">
                    No items found. Click "Add New" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
