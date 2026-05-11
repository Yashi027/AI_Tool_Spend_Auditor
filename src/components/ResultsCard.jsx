import { motion } from "framer-motion";

export default function ResultsCard({ results }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-3xl p-8 shadow-xl mt-10"
    >
      <h2 className="text-3xl font-bold">
        Your AI Spend Audit
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 rounded-2xl bg-gray-50">
          <p className="text-gray-500">Current Spend</p>
          <h3 className="text-4xl font-bold">
            ${results.monthlySpend}
          </h3>
        </div>

        <div className="p-6 rounded-2xl bg-green-50">
          <p className="text-gray-500">Potential Savings</p>
          <h3 className="text-4xl font-bold text-green-600">
            ${results.monthlySavings}
          </h3>
        </div>

        <div className="p-6 rounded-2xl bg-purple-50">
          <p className="text-gray-500">Annual Savings</p>
          <h3 className="text-4xl font-bold text-purple-600">
            ${results.annualSavings}
          </h3>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">
          Recommendations
        </h3>

        {results.recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-5 mb-4"
          >
            <p className="font-semibold">
              Switch from {rec.current} → {rec.recommended}
            </p>

            <p className="text-green-600 mt-2">
              Save ${rec.savings}/month
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}