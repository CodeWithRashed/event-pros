import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBlog } from "../Hooks/fetchBlogs";
import {BiSearchAlt2} from 'react-icons/bi'
import { Helmet } from "react-helmet";

const SingleBlog = () => {
  const id = useParams();
  const [blog, setBlog] = useState([]);
  const [allBlogs, setAllBlogs] = useState([])

  useEffect(() => {
    fetchBlog().then((blogs) => {
      setAllBlogs(blogs.blogPosts)
      let filterBlog = blogs.blogPosts.filter((blog) => blog.id == id.id);
      setBlog(filterBlog);
    });
  }, [id]);

  return (
    <div className="p-[5%]">
      <Helmet>
        <title>EventPros - Blog</title>
      </Helmet>
      <div className="blog-container grid lg:grid-cols-3 gap-8">
       
        <div className="blog-post lg:order-2 col-span-2 ">
          <div className="image">
            <img src={`${blog[0]?.image}`} alt="" />
          </div>
          <h1 className="text-2xl mt-5">{blog[0]?.title}</h1>
          <p className="mb-5"> by - {blog[0]?.author}</p>
          <p>{blog[0]?.content}</p>
        </div>
        <div className="sidebar col-span-2 lg:col-span-1 flex flex-col gap-5 justify-center lg:justify-normal lg:order-1 mt-10 mb-10 lg:mt-0 ">
          <div className="search w-full relative">
            <input placeholder="Search here..." className="w-full h-12 px-3 py-2 border-2 border-color-secondary outline-color-primary" type="text" />
            <p className=" absolute bg-color-secondary rounded-full p-2 text-xl flex justify-center items-center text-[#fff] right-2 bottom-[6px]"><BiSearchAlt2></BiSearchAlt2></p>
          </div>
          <div>
            <div><h1 className="text-2xl mb-4">Latest Post</h1></div>
            <div className="space-y-3">
              {
                allBlogs.map((oneBlog)=>(
                  <ul  key={oneBlog.id}>
                   <Link className="hover:text-color-secondary transition-all ease-in-out" to={`/blogs/${oneBlog.id}`}><li>{oneBlog?.title}</li></Link> 
                  </ul>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
