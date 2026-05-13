import { useState } from "react";
import { Plus } from "lucide-react";

export default function AuditForm({
  onSubmit,
  loading,
}) {
  const [error, setError] = useState("");

  const [tools, setTools] = useState([
    {
      name: "",
      plan: "",
      spend: "",
      teamSize: 1,
      primaryUse: "Coding",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...tools];
    updated[index][field] = value;
    setTools(updated);
  };

  const addTool = () => {
    setTools([
      ...tools,
      {
        name: "",
        plan: "",
        spend: "",
        teamSize: 1,
        primaryUse: "Coding",
      },
    ]);
  };

  const validate = () => {
    for (const tool of tools) {
      if (
        !tool.name ||
        !tool.plan ||
        !tool.spend
      ) {
        setError("Please fill all fields");
        return false;
      }

      if (tool.spend < 0) {
        setError("Spend cannot be negative");
        return false;
      }
    }

    setError("");
    return true;
  };

  const submitAudit = () => {
    if (!validate()) return;

    onSubmit(tools);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100">

      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          AI Stack Audit
        </h2>

        <p className="text-gray-500 mt-3">
          Enter the AI tools your team pays for.
        </p>
      </div>

      {tools.map((tool, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 mb-6"
        >

          <select
            className="border p-4 rounded-2xl"
            value={tool.name}
            onChange={(e) =>
              handleChange(
                index,
                "name",
                e.target.value
              )
            }
          >
            <option value="">
              Select Tool
            </option>

            <option>ChatGPT Team</option>
            <option>Cursor Pro</option>
            <option>Claude Team</option>
            <option>Midjourney Standard</option>
          </select>

          <input
            placeholder="Plan"
            className="border p-4 rounded-2xl"
            value={tool.plan}
            onChange={(e) =>
              handleChange(
                index,
                "plan",
                e.target.value
              )
            }
          />

          <input
            placeholder="Monthly Spend"
            type="number"
            className="border p-4 rounded-2xl"
            value={tool.spend}
            onChange={(e) =>
              handleChange(
                index,
                "spend",
                Number(e.target.value)
              )
            }
          />

          <input
            placeholder="Team Size"
            type="number"
            className="border p-4 rounded-2xl"
            value={tool.teamSize}
            onChange={(e) =>
              handleChange(
                index,
                "teamSize",
                Number(e.target.value)
              )
            }
          />

          <select
            className="border p-4 rounded-2xl"
            value={tool.primaryUse}
            onChange={(e) =>
              handleChange(
                index,
                "primaryUse",
                e.target.value
              )
            }
          >
            <option>Coding</option>
            <option>Writing</option>
            <option>Research</option>
            <option>Design</option>
          </select>
        </div>
      ))}

      {error && (
        <p className="text-red-500 mb-6">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-4">

        <button
          onClick={addTool}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition px-6 py-4 rounded-2xl"
        >
          <Plus size={18} />
          Add Tool
        </button>

        <button
          disabled={loading}
          onClick={submitAudit}
          className="bg-accent text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition disabled:opacity-50"
        >
          {loading
            ? "Analyzing..."
            : "Generate Audit"}
        </button>
      </div>
    </div>
  );
}