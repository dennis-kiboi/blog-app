import { Routes, Route } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import { useEffect, useState, useContext } from "react";
import BlogPost from "../pages/BlogPost";
import { AppContext } from "../context/appContext";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const { theme } = useContext(AppContext);

  return (
    <div className={`app-container ${theme}`}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogPost blogs={blogs} />} />
      </Routes>
    </div>
  );
};
export default App;
