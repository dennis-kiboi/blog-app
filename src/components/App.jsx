import { Routes, Route } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import BlogPost from "../pages/BlogPost";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <>
      <NavBar theme={theme} />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogPost blogs={blogs} />} />
      </Routes>
    </>
  );
};
export default App;
