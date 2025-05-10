import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use environment variable for API URL
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-0">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
          >
            {product.image_url && (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-56 object-cover mb-4 rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white truncate">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                ₹{product.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 truncate">
                {product.description}
              </p>
              {product.category && (
                <p className="text-xs text-blue-500 mt-3">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
