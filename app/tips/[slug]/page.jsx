import BlogContent from "@/components/BlogContent";
import Navbar from "@/components/Navbar";
import { getBlogPost, getBlogPosts } from "@/sanity/blog/getPosts";
import React from "react";
import Link from "next/link";
import getImageURL from "@/libs/sanity";

const page = async ({ params }) => {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const allPosts = await getBlogPosts();

  // Filter out the current post and limit to 4 other posts
  const otherPosts = allPosts
    .filter((p) => p.slug.current !== slug)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content Column */}
          <article className="lg:col-span-8">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-neutral-900 leading-tight">
                {post.title}
              </h1>
              {post.image && (
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50 mb-10 aspect-video">
                  <img
                    src={getImageURL(post.image.asset)}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>

            <div className="prose prose-lg prose-neutral prose-headings:font-serif prose-p:text-neutral-600 prose-img:rounded-3xl max-w-none">
              <BlogContent value={post.body} />
            </div>
          </article>

          {/* Sidebar Column (Top on small, Right on large) */}
          <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-10 lg:pt-0 lg:pl-12">
            <div className="sticky top-28">
              <h2 className="text-2xl font-bold mb-8 font-serif text-neutral-900">
                Other Blog Posts
              </h2>
              <div className="space-y-8">
                {otherPosts.map((other) => (
                  <Link
                    key={other.slug.current}
                    href={`/tips/${other.slug.current}`}
                    className="group flex gap-5 items-start"
                  >
                    <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-neutral-50 shadow-sm">
                      {other.image && (
                        <img
                          src={getImageURL(other.image.asset)}
                          alt={other.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg leading-snug text-neutral-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {other.title}
                      </h3>
                      <div className="inline-flex items-center text-sm font-medium text-blue-600 mt-2 hover:translate-x-1 transition-transform duration-300">
                        Read Story
                        <svg
                          className="w-4 h-4 ml-1"
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
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter or CTA placeholder for premium feel */}
              <div className="mt-12 p-8 bg-neutral-900 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-3">Travel Sri Lanka</h4>
                <p className="text-neutral-400 text-sm mb-6">
                  Get the latest travel tips and destination guides delivered to
                  your inbox.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-neutral-800 border-none rounded-xl py-3 px-4 text-sm focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  />
                  <button className="absolute right-2 top-2 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-neutral-200 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default page;
