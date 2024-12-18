import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogList from "../components/BlogList";  
const API_URL = process.env.REACT_APP_API_URL
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios.get(`${API_URL}`)
      .then(response => {
        setBlogs(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);  
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; 
  }

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bghome.jpg')" }}>
  
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-6 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to BlogPlanet</h1>
        <h3 className="text-3xl font-thin mb-3">Upload Your Thoughts</h3>
        {blogs.length === 0 ? (
          <p>No blogs available. Start writing!</p>
        ) : (
          <BlogList blogs={blogs} />  
        )}
      </div>
    </div>
  );
};

export default Home;
