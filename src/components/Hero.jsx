import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-28 text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto"
      >
        You’re Probably
        <span className="text-accent">
          {" "}Overpaying{" "}
        </span>
        for AI Tools
      </motion.h1>

      <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
        StackSage audits your AI subscriptions
        and instantly reveals where your team
        can save money.
      </p>

      <button className="mt-10 bg-accent text-white px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transition">
        Run Free Audit
      </button>

      <div className="mt-14 flex justify-center gap-10 text-gray-500 flex-wrap">
        <p>Trusted by 1200+ startups</p>
        <p>Average savings: $320/mo</p>
        <p>5 min audit</p>
      </div>
    </section>
  );
}