import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, content, author };

    try {
      await axios.post(`${API_URL}`, newBlog);
      navigate("/");
    } catch (error) {
      console.error("Error creating blog", error);
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
        Create Blog
      </button>
    </form>
  );
};

export default CreateBlog;
