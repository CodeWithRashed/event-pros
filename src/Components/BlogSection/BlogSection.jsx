import Blogs from "./Blogs";
import SectionTitle from "../Title/SectionTitle";
import { fetchBlog } from "../../Hooks/fetchBlogs";
import { useEffect } from "react";
import { useState } from "react";

const BlogSection = () => {
    const [blogData, setBlogData] = useState([])
  useEffect(() => {
    fetchBlog().then((data) => setBlogData(data.blogPosts.slice(0,3)));
  }, []);

  return (
    <div className="p-[5%] bg-[#fff]">
      <SectionTitle
      subtitle="Blog feed"
      title="Our Latest Blog"
      ></SectionTitle>
      <Blogs blogData={blogData}></Blogs>
    </div>
  );
};

export default BlogSection;
