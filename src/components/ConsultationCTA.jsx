export default function ConsultationCTA({
  savings,
}) {
  if (savings < 100) return null;

  return (
    <div className="max-w-6xl mx-auto mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-10 shadow-2xl">

      <h2 className="text-5xl font-bold leading-tight">
        You Could Save
        <br />
        ${savings * 12}/Year
      </h2>

      <p className="mt-5 text-xl text-purple-100 max-w-2xl">
        Our consultants can optimize your
        entire AI stack and reduce costs
        dramatically.
      </p>

      <a
        href="https://calendly.com"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
      >
        Book Credex Consultation
      </a>
    </div>
  );
}