import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";
import SectionTitle from "../../components/ui/SectionTitle";
import chickenburger from "../../assets/Chickenburger.png";
import vegpizza from "../../assets/Vegpizza.png";
import coffee from "../../assets/Coldcoffee.png";
import { Plus, Pencil, Trash2 } from "lucide-react";

const Products = () => {
  // Temporary data
  const initialProducts = [
    {
      id: 1,
      name: "Chicken Burger",
      category: "Fast Food",
      price: 199,
      image: chickenburger,
    },
    {
      id: 2,
      name: "Cold Coffee",
      category: "Beverages",
      price: 149,
      image: coffee,
    },
    {
      id: 3,
      name: "Veg Pizza",
      category: "Pizza",
      price: 299,
      image: vegpizza,
    },
  ];
  const [products, setProducts] = useState(initialProducts);
  const [preview, setPreview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });
  const handleSave = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price
    ) {
      return;
    }

    const newProduct = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: formData.name,
      category: formData.category,
      price: formData.price,
      image: preview || formData.image,
    };

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? newProduct : p
        )
      );
    } else {
      setProducts([...products, newProduct]);
    }

    setShowModal(false);

    setEditingProduct(null);

    setPreview("");

    setFormData({
      name: "",
      category: "",
      price: "",
      image: "",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <SectionTitle
        title="Products"
        subtitle="Manage your menu items."
        action={
          <Button
            className="flex items-center gap-2"
            onClick={() => {
              setEditingProduct(null);

              setFormData({
                name: "",
                category: "",
                price: "",
                image: "",
              });

              setPreview("");

              setShowModal(true);
            }}
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add Product</span>
          </Button>
        }
      />

      {products.length === 0 ? (
        <Card className="py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No Products Yet
          </h2>

          <p className="mt-2 text-gray-500">
            Add your first product to start selling.
          </p>

          <Button className="mt-6">
            Add Product
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden p-0"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {product.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>

                  <Badge color="green">
                    Available
                  </Badge>
                </div>

                <h3 className="mt-5 text-3xl font-bold text-[#1A4D2E]">
                  ₹{product.price}
                </h3>

                <div className="mt-6 flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 flex items-center justify-center gap-2"
                    onClick={() => {
                      setEditingProduct(product);

                      setFormData({
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        image: product.image,
                      });

                      setPreview(product.image);

                      setShowModal(true);
                    }}
                  >
                    <Pencil size={16} />
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    className="flex items-center justify-center px-4"
                    onClick={() => {
                      if (window.confirm(`Delete "${product.name}"?`)) {
                        setProducts(products.filter((p) => p.id !== product.id));
                      }
                    }}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <Card
            hover={false}
            className="w-full max-w-md"
          >
            <h2 className="text-2xl font-bold">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>

            <div className="mt-6 space-y-4">
              <Input
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <Input
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  })
                }
              />

              <Input
                type="number"
                placeholder="₹ Price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
              />
              <input
                type="file"
                accept="image/*"
                className="w-full rounded-xl border border-gray-200 p-3"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (!file) return;

                  setFormData({
                    ...formData,
                    image: file,
                  });

                  setPreview(URL.createObjectURL(file));
                }}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-40 w-full rounded-xl object-cover"
                />
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>

              <Button
                onClick={handleSave}
              >
                {editingProduct ? "Save Changes" : "Add Product"}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </motion.div>
  );
};

export default Products;