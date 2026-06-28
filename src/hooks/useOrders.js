import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
  cancelOrder,
} from "../services/order.js";
import { dummyOrders } from "../data/ordersData.js";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getOrders();

      if (data && data.length > 0) {
        setOrders(data);
      } else {
        setOrders(dummyOrders);
      }
    } catch (err) {
      console.error(err);

      // using dummy data
      setOrders(dummyOrders);

      // Optional while developing
      // setError("Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  // Mark order as delivered
  const markAsDelivered = async (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "DELIVERED" } : order,
      ),
    );
    try {
      await updateOrderStatus(id, "DELIVERED");

      // The above code will come here when backend is fully ready

      // Later replace the above with:
      // await fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  // Cancel order
  const handleCancelOrder = async (id) => {
    try {
      await cancelOrder(id);
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    loading,
    error,
    fetchOrders,
    markAsDelivered,
    handleCancelOrder,
  };
};

export default useOrders;
