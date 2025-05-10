import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductSubmission from "./components/ProductSubmission";
import MyProducts from "./components/MyProducts";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-400 dark:bg-gray-900 text-gray-800 dark:text-white">
        <header className="bg-yellow-500 dark:bg-gray-800 shadow-md py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-3xl font-extrabold text-blue-600">
              Mini E-Commerce
            </h1>
            <nav className="mt-3 sm:mt-0 space-x-4">
              <Link
                to="/"
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                to="/submit"
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                Add Product
              </Link>
              <Link
                to="/products"
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                My Products
              </Link>
            </nav>
          </div>
        </header>

        <main className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<ProductSubmission />} />
              <Route path="/products" element={<MyProducts />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
