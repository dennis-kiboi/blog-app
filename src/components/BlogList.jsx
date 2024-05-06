import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs, theme }) => {
  const blogList = blogs.map(blog => {
    return (
      <Link to={`/blogs/${blog.id}`} key={blog.id}>
        <BlogCard  blog={blog} theme={theme} />
      </Link>
    );
  });

  return <div className="blog-list">{blogList}</div>;
};
export default BlogList;
