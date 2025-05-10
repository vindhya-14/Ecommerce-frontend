import React, { useState } from "react";
import axios from "axios";

const ProductSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use environment variable for API URL
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/products`,
        formData
      );
      alert("✅ Product submitted!");
      setFormData({
        name: "",
        price: "",
        description: "",
        image_url: "",
        category: "",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("❌ Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Add a New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Wireless Mouse"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. 499"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief product description"
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Image URL (optional)
          </label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="e.g. https://example.com/product.jpg"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Category (optional)
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Electronics"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default ProductSubmission;
