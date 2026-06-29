import { motion } from "framer-motion";
const Products = () => {
  return (

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
    <div>
      Products
    </div>
    </motion.div>
  );
};
export default Products;