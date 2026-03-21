import BlogPage from "@/components/blog/BlogPage";
import Navbar from "@/components/Navbar";
import { getBlogPosts } from "@/sanity/blog/getPosts";
import React from "react";

const page = async () => {
  const posts = await getBlogPosts();
  return (
    <div>
      <Navbar />
      <div>
        <BlogPage posts={posts} />
      </div>
    </div>
  );
};

export default page;
