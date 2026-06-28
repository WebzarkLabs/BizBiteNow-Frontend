export const dummyOrders = [
  {
    id: 1,
    customerName: "Rahul Sharma",
    phone: "9876543210",
    address: "Borivali West, Mumbai",
    total: 5000,
    status: "NEW",
    paymentMethod: "COD",
    createdAt: "2026-06-28T10:30:00",

    items: [
      {
        productId: 101,
        quantity: 1,
        product: {
          name: "Silk Saree",
          price: 5000,
          mrp: 7000,
          sellingPrice: 5000,
          unit: "1 pcs",
          description: "Black Silk Saree",
          imageUrl:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
          categoryId: 101,
          categoryName: "Saree",
          extraDetails: {
            Fabric: "Silk",
            Type: "Women Wear",
          },
        },
      },
    ],
  },

  {
    id: 2,
    customerName: "Priya Verma",
    phone: "9988776655",
    address: "Andheri East, Mumbai",
    total: 2500,
    status: "NEW",
    paymentMethod: "Online",
    createdAt: "2026-06-28T11:15:00",

    items: [
      {
        productId: 102,
        quantity: 1,
        product: {
          name: "Cotton Kurti",
          price: 2500,
          mrp: 3200,
          sellingPrice: 2500,
          unit: "1 pcs",
          description: "Blue Printed Cotton Kurti",
          imageUrl:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
          categoryId: 102,
          categoryName: "Kurti",
          extraDetails: {
            Fabric: "Cotton",
            Type: "Women Wear",
          },
        },
      },
    ],
  },

  {
    id: 3,
    customerName: "Ankit Singh",
    phone: "9123456789",
    address: "Malad West, Mumbai",
    total: 7200,
    status: "DELIVERED",
    paymentMethod: "COD",
    createdAt: "2026-06-28T09:20:00",

    items: [
      {
        productId: 103,
        quantity: 2,
        product: {
          name: "Men's Blazer",
          price: 3600,
          mrp: 4500,
          sellingPrice: 3600,
          unit: "1 pcs",
          description: "Slim Fit Black Blazer",
          imageUrl:
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600",
          categoryId: 103,
          categoryName: "Blazer",
          extraDetails: {
            Fabric: "Polyester",
            Type: "Men Wear",
          },
        },
      },
    ],
  },

  {
    id: 4,
    customerName: "Sneha Patil",
    phone: "9001122334",
    address: "Thane West, Mumbai",
    total: 1800,
    status: "DELIVERED",
    paymentMethod: "Online",
    createdAt: "2026-06-28T08:40:00",

    items: [
      {
        productId: 104,
        quantity: 2,
        product: {
          name: "Women's T-Shirt",
          price: 900,
          mrp: 1200,
          sellingPrice: 900,
          unit: "1 pcs",
          description: "Oversized Cotton T-Shirt",
          imageUrl:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
          categoryId: 104,
          categoryName: "T-Shirts",
          extraDetails: {
            Fabric: "Cotton",
            Type: "Women Wear",
          },
        },
      },
    ],
  },

  {
    id: 5,
    customerName: "Vikram Joshi",
    phone: "9870011223",
    address: "Powai, Mumbai",
    total: 6400,
    status: "NEW",
    paymentMethod: "COD",
    createdAt: "2026-06-28T12:00:00",

    items: [
      {
        productId: 105,
        quantity: 1,
        product: {
          name: "Leather Jacket",
          price: 6400,
          mrp: 7800,
          sellingPrice: 6400,
          unit: "1 pcs",
          description: "Premium Brown Leather Jacket",
          imageUrl:
            "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
          categoryId: 105,
          categoryName: "Jackets",
          extraDetails: {
            Fabric: "Leather",
            Type: "Men Wear",
          },
        },
      },
    ],
  },
];