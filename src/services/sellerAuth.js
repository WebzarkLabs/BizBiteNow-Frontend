import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const sendOTP = (email) =>
  API.post("/seller/send-otp", { email });

export const verifyOTP = (email, otp) =>
  API.post("/seller/verify-otp", {
    email,
    otp,
  });

export const registerSeller = (sellerData) =>
  API.post("/seller/register", sellerData);