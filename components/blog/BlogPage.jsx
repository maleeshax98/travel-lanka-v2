import getImageURL from "@/libs/sanity";
import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";

const BlogPage = ({ posts }) => {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section>
      <Navbar />
      <div className="bg-white text-neutral-950 min-h-screen px-6 md:px-16 py-10">
        {/* HERO / FEATURED */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Featured Post</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {featured.title}
            </h1>
            <p className="text-neutral-400 mb-6">
              {featured.body?.[1]?.children?.map((c) => c.text).join("")}
            </p>
            <Link href={`/tips/${featured.slug.current}`}>
              <button className="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition">
                Read More
              </button>
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={getImageURL(featured.image.asset)}
              alt={featured.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* GRID POSTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <div
              key={post.slug.current}
              className="group bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={getImageURL(post.image.asset)}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 ">{post.title}</h2>

                <p className="text-sm text-neutral-400 line-clamp-3">
                  {post.body?.[1]?.children?.map((c) => c.text).join("")}
                </p>

                <div className="mt-4">
                  <Link href={`/tips/${post.slug.current}`}>
                    <button className="text-sm underline underline-offset-4 hover:text-neutral-300">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

// ===== Usage Example =====
// import BlogPage from './BlogPage'
// <BlogPage posts={yourSanityData} />
