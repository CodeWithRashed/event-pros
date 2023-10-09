import { useEffect, useState } from "react";
import Blogs from "../Components/BlogSection/Blogs"
import SectionTitle from "../Components/Title/SectionTitle"
import { fetchBlog } from "../Hooks/fetchBlogs";
import PageHeader from "../Components/PageHeader/PageHeader";

const BlogsPage = () => {
  const [blogData, setBlogData] = useState([])
  useEffect(() => {
    fetchBlog().then((data) => setBlogData(data.blogPosts));
  }, []);

  return (
    <div>
      <PageHeader title="Blogs"></PageHeader>
    <div className="p-[5%] bg-[#fff] mb-10">
      <SectionTitle
      subtitle="Blog feed"
      title="Our Latest Blog"
      ></SectionTitle>
      <Blogs blogData={blogData}></Blogs>
    </div>
    </div>
  )
}

export default BlogsPage
