import { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: billing === "monthly" ? "$0" : "$0",
      description: "Perfect for individuals getting started.",
      features: [
        "Basic analytics",
        "Up to 3 projects",
        "Community support",
        "Limited integrations",
      ],
      button: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: billing === "monthly" ? "$29" : "$290",
      description: "Best for growing teams and professionals.",
      features: [
        "Advanced analytics",
        "Unlimited projects",
        "Priority support",
        "AI-powered insights",
      ],
      button: "Get Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced solutions for large organizations.",
      features: [
        "Custom integrations",
        "Dedicated manager",
        "24/7 premium support",
        "Enterprise-grade security",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Pricing Plans
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Simple & Transparent Pricing
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Choose the perfect plan for your business. Scale confidently with
            flexible pricing designed for startups, teams, and enterprises.
          </p>

          <div className="flex justify-center mt-10">
            <div className="bg-white border border-gray-200 rounded-full p-1 shadow-sm flex">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  billing === "monthly"
                    ? "bg-black text-white"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  billing === "yearly"
                    ? "bg-black text-white"
                    : "text-gray-600"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-black shadow-xl scale-105"
                  : "border-gray-200 shadow-sm"
              }`}
            >

              {plan.popular && (
                <div className="absolute top-5 right-5 bg-black text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h2 className="text-3xl font-bold text-gray-900">
                {plan.name}
              </h2>

              <p className="text-gray-500 mt-3">
                {plan.description}
              </p>

              <div className="mt-8 mb-8">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="text-gray-500 ml-2">
                    / {billing === "monthly" ? "month" : "year"}
                  </span>
                )}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700"
                  >
                    <span className="text-green-500 mr-3 text-lg">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-2xl font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900">
            Need a custom solution?
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our enterprise team can help you build a tailored solution with
            dedicated infrastructure, onboarding, and premium support.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition">
            Schedule a Demo
          </button>
        </div>

      </div>
    </section>
  );
}