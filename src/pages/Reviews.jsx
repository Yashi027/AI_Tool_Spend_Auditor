export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Finance Manager, NovaTech",
      review:
        "This platform helped us optimize our monthly operational expenses while improving overall productivity. The dashboard is intuitive, fast, and extremely reliable.",
    },
    {
      name: "David Lee",
      role: "Founder, BrightLabs",
      review:
        "The analytics system is incredibly detailed and easy to understand. The user interface feels modern, professional, and smooth across all devices.",
    },
    {
      name: "Emily Carter",
      role: "Operations Head, VisionCorp",
      review:
        "We were impressed by the seamless experience and excellent customer support. The platform has become an essential part of our workflow.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Testimonials
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            What Our Clients Say
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Trusted by businesses and professionals worldwide for delivering
            reliable performance, powerful analytics, and a seamless user
            experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="flex text-yellow-400 text-xl mb-5">
                ★★★★★
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}