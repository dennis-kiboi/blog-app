import BlogList from "../components/BlogList"

const Home = ({ blogs, theme }) => {
  
  return (
    <div className="page-container">
      <h1>Welcome to my Blog</h1>
      <BlogList blogs={blogs} theme={theme}/>
    </div>
  )
}
export default Home