import api from "../api/axios";

export const getOrders = async () => {
  const { data } = await api.get("/orders/my-orders");
  return data;
};

export const getOrderDetails = async (id) => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
};

export const updateOrderStatus = async (id, status) => {
  const { data } = await api.patch(`/orders/${id}/status`, {
    status,
  });
  return data;
};

export const cancelOrder = async (id) => {
  const { data } = await api.post(`/orders/${id}/cancel`);
  return data;
};

export const placeOrder = async (orderData) => {
  const { data } = await api.post("/orders/placeOrder", orderData);
  return data;
};