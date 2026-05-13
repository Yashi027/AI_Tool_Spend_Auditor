import {
  Brain,
  BarChart3,
  DollarSign,
  ShieldCheck,
  Zap,
  LayoutDashboard,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain size={36} />,
      title: "AI Audit",
      description:
        "Analyze and monitor your AI tool spending with intelligent automation and real-time reports.",
    },
    {
      icon: <BarChart3 size={36} />,
      title: "Smart Insights",
      description:
        "Receive actionable recommendations to optimize costs and improve productivity.",
    },
    {
      icon: <DollarSign size={36} />,
      title: "Cost Tracking",
      description:
        "Track subscriptions, monthly usage, and expenses across all AI platforms.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Enterprise Security",
      description:
        "Protect your business data with advanced security and compliance standards.",
    },
    {
      icon: <Zap size={36} />,
      title: "Real-Time Analytics",
      description:
        "Monitor live reports and instant insights with powerful analytics tools.",
    },
    {
      icon: <LayoutDashboard size={36} />,
      title: "Unified Dashboard",
      description:
        "Manage all your AI tools and reports from one centralized dashboard.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Powerful Features for Smarter AI Management
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Everything you need to analyze, optimize, and manage your AI tool
            ecosystem efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}