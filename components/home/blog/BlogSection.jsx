import getImageURL from "@/libs/sanity";
import Link from "next/link";
import React from "react";

const BlogSection = ({ posts }) => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-neutral-900">
              Latest from our Blog
            </h2>
            <p className="text-neutral-500 max-w-2xl">
              Discover travel tips, destination guides, and stories from across
              the beautiful island of Sri Lanka.
            </p>
          </div>
          <Link
            href="/tips"
            className="hidden md:inline-flex items-center text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition"
          >
            View All Posts
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.slug.current}
              className="group bg-white rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/50"
            >
              <div className="aspect-4/3 overflow-hidden">
                {post.image && (
                  <img
                    src={getImageURL(post.image.asset)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-serif text-neutral-900 group-hover:text-blue-600 transition duration-300 line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-neutral-500 line-clamp-3 text-sm mb-6 leading-relaxed">
                  {post.body?.[1]?.children?.map((c) => c.text).join("") ||
                    post.body?.[0]?.children?.map((c) => c.text).join("")}
                </p>

                <Link
                  href={`/tips/${post.slug.current}`}
                  className="inline-flex items-center text-sm font-bold text-neutral-900 group-hover:text-blue-600 transition duration-300"
                >
                  Read Story
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/tips"
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition"
          >
            View All Posts
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
