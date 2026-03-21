// components/BlogGrid.tsx
import React from "react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import getImageURL from "@/libs/sanity";

const BlogGrid = ({ posts }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Technical Insights
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Exploring the intersection of code and design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug.current}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Image Container with Aspect Ratio to prevent Layout Shift */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                {post.image && (
                  <img
                    src={getImageURL(post.image.asset)}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Summary: Extracting the first paragraph from the PortableText body */}
                  <div className="mt-3 text-slate-600 line-clamp-3 text-sm leading-relaxed">
                    <PortableText value={post.body} />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Testing Phase
                  </span>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
