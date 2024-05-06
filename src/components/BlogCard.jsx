import { useContext } from "react";
import { AppContext } from "../context/appContext"

const BlogCard = ({ blog }) => {
  const { theme } = useContext(AppContext);

  return (
    <div className={`blog-card ${theme}`}>
      <img src={blog.image} alt="" />

      <p>{blog.title}</p>
    </div>
  );
};
export default BlogCard;
