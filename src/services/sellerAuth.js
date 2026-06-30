import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
});

export const sendOTP = (email) =>
  API.post("/verify-otp", { email });

export const verifyOTP = (email, otp) =>
  API.post("/verify-otp", {
    email,
    otp,
  });

// export const registerSeller = (sellerData) =>
//   API.post("/seller/register", sellerData);
export const registerSeller = (sellerData) =>
  API.post("/registerSeller", sellerData);

export const loginSeller = (loginData) =>
  API.post("/loginSeller", loginData);