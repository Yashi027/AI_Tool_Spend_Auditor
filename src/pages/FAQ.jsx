export default function FAQ() {
  const faqs = [
    {
      question: "How does StackSage work?",
      answer:
        "We analyze your AI tool subscriptions, compare them against smarter alternatives, and identify where your team can reduce monthly spending.",
    },

    {
      question: "Is there a free plan?",
      answer:
        "Yes. You can run a complete AI stack audit for free without entering payment information.",
    },

    {
      question: "What AI tools are supported?",
      answer:
        "StackSage currently supports popular AI products including ChatGPT, Claude, Cursor, Midjourney, GitHub Copilot, Gemini, Notion AI, Jasper, and more.",
    },

    {
      question: "How accurate are the savings estimates?",
      answer:
        "Savings estimates are based on current pricing models, usage patterns, and comparable alternatives used by similar teams.",
    },

    {
      question: "Can I audit multiple tools at once?",
      answer:
        "Absolutely. You can add multiple AI subscriptions and analyze your entire stack in one report.",
    },

    {
      question: "Do I need to create an account?",
      answer:
        "No account is required to generate an instant audit. An email is only needed if you want to save or share your report.",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-16">
          Everything you need to know about StackSage AI,
          audits, pricing optimization, and consultations.
        </p>

        <div className="space-y-8">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-4">
                {faq.question}
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}