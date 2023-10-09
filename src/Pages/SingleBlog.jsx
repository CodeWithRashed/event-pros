import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../Hooks/fetchBlogs";

const SingleBlog = () => {
  const id = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchBlog().then((blogs) => {
      let filterBlog = blogs.blogPosts.filter((blog) => blog.id == id.id);
      setBlog(filterBlog);
    });
  }, [id]);
  console.log(blog[0]?.id);
  return (
    <div className="p-[5%]">
      <div className="blog-container grid lg:grid-cols-3 ">
       
        <div className="blog-post lg:order-2 col-span-2 ">
          <div className="image">
            <img src={`${blog[0]?.image}`} alt="" />
          </div>
          <h1 className="text-2xl mt-5">{blog[0]?.title}</h1>
          <p className="mb-5"> by - {blog[0]?.author}</p>
          <p>{blog[0]?.content}</p>
        </div>
        <div className="sidebar lg:order-1 mt-10 mb-10 lg:mt-0 ">
          <h1>This is sidebar</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
