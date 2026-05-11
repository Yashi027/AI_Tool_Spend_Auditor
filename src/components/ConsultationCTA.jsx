export default function ConsultationCTA({ savings }) {
  if (savings < 100) return null;

  return (
    <div className="mt-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-10">
      <h2 className="text-4xl font-bold">
        You Could Save ${savings * 12}/Year
      </h2>

      <p className="mt-4 text-lg">
        Our consultants can optimize your entire AI stack.
      </p>

      <button className="mt-6 bg-white text-black px-6 py-4 rounded-2xl font-semibold">
        Book Credex Consultation
      </button>
    </div>
  );
}