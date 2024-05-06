const BlogCard = ({ blog, theme }) => {
  return (
    <div className={`blog-card ${theme}`}>
      <img src={blog.image} alt="" />

      <p>{blog.title}</p>
    </div>
  );
};
export default BlogCard;
