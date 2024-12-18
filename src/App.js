import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
  
      <Navbar />

      <div className="container mx-auto p-4">
        <Routes>
    
          <Route path="/" element={<Home />} />

         
          <Route path="/blogs/:id" element={<BlogDetails />} />

         
          <Route path="/create" element={<CreateBlog />} />

          
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </div>

      
      <Footer />
    </Router>
  );
};

export default App;
