import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold leading-tight"
      >
        You’re Probably
        <span className="text-accent"> Overpaying </span>
        for AI Tools
      </motion.h1>

      <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
        StackSage audits your AI subscriptions and shows exactly
        where to save money instantly.
      </p>

      <button className="mt-10 bg-accent text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition">
        Run Free Audit
      </button>
    </section>
  );
}