import { Routes, Route } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
