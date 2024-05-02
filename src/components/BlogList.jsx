import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  const blogList = blogs.map(blog => {
    return <BlogCard key={blog.id} blog={blog} />;
  });

  return (
    <div className="blog-list">
      {blogList}
    </div>
  );
};
export default BlogList;
