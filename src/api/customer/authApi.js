// Mock customer auth API
// All functions return Promises — swap with real axios calls later without touching UI

const STORAGE_KEYS = {
  TOKEN: "customerToken",
  USER: "customerUser",
};

// POST /api/customer/register
export const registerCustomer = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { name, email, phone, password } = data;

      if (!name || !email || !phone || !password) {
        return reject({ message: "All fields are required" });
      }

      const user = {
        id: "cust_" + Date.now(),
        name,
        email,
        phone,
      };

      const token = "mock_token_" + Date.now();

      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));

      resolve({ token, user });
    }, 800);
  });
};

// POST /api/customer/login
export const loginCustomer = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { email, password } = data;

      if (!email || !password) {
        return reject({ message: "Email and password are required" });
      }

      // Mock validation — any valid email + password works
      if (!email.includes("@") || password.length < 4) {
        return reject({ message: "Invalid email or password" });
      }

      const user = {
        id: "cust_" + Date.now(),
        name: email.split("@")[0],
        email,
        phone: "",
      };

      const token = "mock_token_" + Date.now();

      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));

      resolve({ token, user });
    }, 800);
  });
};

// GET /api/customer/me
export const getMyProfile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
      const userRaw = localStorage.getItem(STORAGE_KEYS.USER);

      if (!token || !userRaw) {
        return reject({ message: "Not authenticated" });
      }

      try {
        const user = JSON.parse(userRaw);
        resolve(user);
      } catch {
        reject({ message: "Invalid session data" });
      }
    }, 400);
  });
};

// POST /api/customer/logout
export const logoutCustomer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      resolve({ success: true });
    }, 300);
  });
};

// Helper — check if customer is logged in (synchronous, no API call)
export const isCustomerLoggedIn = () => {
  return !!localStorage.getItem(STORAGE_KEYS.TOKEN);
};
