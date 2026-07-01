import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});

export const registerSeller = (sellerData) =>
  API.post("/registerSeller", sellerData);

export const verifyOTP = (email, otp) =>
  API.post("/verify-otp", {
    email,
    otp,
  });

export const loginSeller = (loginData) =>
  API.post("/loginSeller", loginData);