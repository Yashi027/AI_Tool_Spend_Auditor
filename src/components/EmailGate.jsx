export default function EmailGate() {
  return (
    <div className="bg-primary text-white rounded-3xl p-10 mt-10">
      <h2 className="text-3xl font-bold">
        Want the Full Optimization Report?
      </h2>

      <p className="mt-3 text-gray-300">
        Get a detailed PDF breakdown delivered instantly.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <input
          type="email"
          placeholder="you@company.com"
          className="flex-1 p-4 rounded-xl text-black"
        />

        <button className="bg-accent px-6 py-4 rounded-xl">
          Send Report
        </button>
      </div>
    </div>
  );
}