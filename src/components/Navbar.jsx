import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
            S
          </div>

          <div>
            <h1 className="text-xl font-bold text-primary">
              StackSage AI
            </h1>

            <p className="text-xs text-gray-500">
              AI Spend Optimizer
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/features"
            className="text-gray-600 hover:text-black transition"
          >
            Features
          </Link>

          <Link
            to="/pricing"
            className="text-gray-600 hover:text-black transition"
          >
            Pricing
          </Link>

          <Link
            to="/reviews"
            className="text-gray-600 hover:text-black transition"
          >
            Reviews
          </Link>

          <Link
            to="/faq"
            className="text-gray-600 hover:text-black transition"
          >
            FAQ
          </Link>

          <button className="bg-accent hover:scale-105 transition text-white px-6 py-3 rounded-2xl shadow-lg">
            Run Audit
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-5"
        >

          <Link
            to="/features"
            className="block text-lg text-gray-700"
          >
            Features
          </Link>

          <Link
            to="/pricing"
            className="block text-lg text-gray-700"
          >
            Pricing
          </Link>

          <Link
            to="/reviews"
            className="block text-lg text-gray-700"
          >
            Reviews
          </Link>

          <Link
            to="/faq"
            className="block text-lg text-gray-700"
          >
            FAQ
          </Link>

          <button className="w-full bg-accent text-white py-4 rounded-2xl font-semibold">
            Run Free Audit
          </button>
        </motion.div>
      )}
    </header>
  );
}