
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ;

export const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data.blogs;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.blog;
};

export const createBlog = async (blogData) => {
  const response = await axios.post(API_URL, blogData);
  return response.data;
};

export const updateBlog = async (id, blogData) => {
  const response = await axios.put(`${API_URL}/${id}`, blogData);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
