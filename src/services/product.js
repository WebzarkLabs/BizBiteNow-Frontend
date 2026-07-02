const BASE_URL = "http://localhost:8080/api/products";

export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/allProducts`);
  return res.json();
};

export const addProduct = async (formData) => {
  const res = await fetch(`${BASE_URL}/addProduct`, {
    method: "POST",
    body: formData,
  });
  return res.json();
};

export const updateProduct = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/updateProduct/${id}`, {
    method: "PUT",
    body: formData,
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/deleteProduct/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const searchProduct = async (name) => {
  const res = await fetch(`${BASE_URL}/product/${name}`);
  return res.json();
};