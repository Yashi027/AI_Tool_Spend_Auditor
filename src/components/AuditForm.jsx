import { useState } from "react";

export default function AuditForm({ onSubmit }) {
  const [tools, setTools] = useState([
    {
      name: "",
      plan: "",
      spend: "",
      teamSize: 1,
      primaryUse: "",
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
        primaryUse: "",
      },
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="grid md:grid-cols-5 gap-4 mb-6"
        >
          <input
            placeholder="Tool"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
          />

          <input
            placeholder="Plan"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              handleChange(index, "plan", e.target.value)
            }
          />

          <input
            placeholder="Monthly Spend"
            type="number"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              handleChange(index, "price", Number(e.target.value))
            }
          />

          <input
            placeholder="Team Size"
            type="number"
            className="border p-3 rounded-xl"
            onChange={(e) =>
              handleChange(index, "teamSize", Number(e.target.value))
            }
          />

          <select
            className="border p-3 rounded-xl"
            onChange={(e) =>
              handleChange(index, "primaryUse", e.target.value)
            }
          >
            <option>Coding</option>
            <option>Writing</option>
            <option>Research</option>
            <option>Design</option>
          </select>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          onClick={addTool}
          className="bg-gray-200 px-5 py-3 rounded-xl"
        >
          Add Tool
        </button>

        <button
          onClick={() => onSubmit(tools)}
          className="bg-accent text-white px-6 py-3 rounded-xl"
        >
          Generate Audit
        </button>
      </div>
    </div>
  );
}