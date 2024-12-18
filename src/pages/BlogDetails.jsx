import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL
const BlogDetails = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
  
    axios.get(`${API_URL}/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the blog details:", error);
        setError("Failed to fetch blog details.");
      });
  }, [id]);


  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios.delete(`${API_URL}/${id}`)
        .then(() => {
          alert("Blog deleted successfully!");
          navigate("/"); 
        })
        .catch((error) => {
          console.error("Error deleting the blog:", error);
          setError("There was an error deleting the blog.");
        });
    }
  };

  if (!blog) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-600 mb-4">By {blog.author}</p>
      <p>{blog.content}</p>

      <div className="mt-6 flex space-x-4">
        <Link to={`/edit/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit Blog
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
