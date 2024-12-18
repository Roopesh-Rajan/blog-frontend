import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="space-y-6">
      {blogs.length === 0 ? (
        <p>No blogs available. Start writing!</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white p-6 shadow-md rounded-lg transition transform hover:scale-105 duration-200 ease-in-out"
          >
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.content.substring(0, 150)}...</p>
            <Link
              to={`/blogs/${blog._id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
