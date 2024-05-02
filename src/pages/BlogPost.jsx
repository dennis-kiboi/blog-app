import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const BlogPost = ({ blogs }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data));
  }, []);

  console.log(blog)

  return (
    <div>
      <h2>{blog.title}</h2>
      <img src={blog.image} alt="" />
      <article>
        {blog.body}
      </article>
    </div>
  );
};
export default BlogPost;
