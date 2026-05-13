import { useState } from "react";
import { Mail } from "lucide-react";

export default function EmailGate() {
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    setSaved(true);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-3xl p-8 shadow-lg">

      <div className="flex items-center gap-3">
        <Mail />

        <h2 className="text-3xl font-bold">
          Save Your Audit Report
        </h2>
      </div>

      <p className="text-gray-500 mt-3">
        Get this audit delivered to your inbox.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-6">

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="flex-1 border p-4 rounded-2xl"
        />

        <button
          onClick={handleSave}
          className="bg-black text-white px-8 py-4 rounded-2xl"
        >
          Save Report
        </button>
      </div>

      {saved && (
        <p className="text-green-600 mt-4">
          Report saved successfully.
        </p>
      )}
    </div>
  );
}