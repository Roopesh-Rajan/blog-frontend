import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL
const EditBlog = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    
    axios.get(`${API_URL}/${id}`)
      .then((response) => {
        const { title, content, author } = response.data;
        setTitle(title);
        setContent(content);
        setAuthor(author);
      })
      .catch((error) => {
        console.error("Error fetching the blog:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = { title, content, author };

    try {
      await axios.put(`${API_URL}/${id}`, updatedBlog);
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error("Error updating the blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full p-3 border border-gray-300 rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        className="w-full p-3 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className="w-full p-3 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
        Update Blog
      </button>
    </form>
  );
};

export default EditBlog;
