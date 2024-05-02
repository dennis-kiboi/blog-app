const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt="" />

      <p>{blog.title}</p>
    </div>
  );
};
export default BlogCard;
