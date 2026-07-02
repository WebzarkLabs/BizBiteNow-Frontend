import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/sellers",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("sellerToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getMyProfile = () => API.get("/me");

export const updateProfile = (sellerId, data) =>
  API.put(`/update/${sellerId}`, data);

export const deleteProfile = (sellerId) =>
  API.delete(`/delete/${sellerId}`);