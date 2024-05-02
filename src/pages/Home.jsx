import BlogList from "../components/BlogList"

const Home = ({ blogs }) => {
  
  return (
    <div className="page-container">
      <h1>Welcome to my Blog</h1>
      <BlogList blogs={blogs}/>
    </div>
  )
}
export default Home