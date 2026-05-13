import { useState } from "react";
import Hero from "../components/Hero";
import AuditForm from "../components/AuditForm";
import ResultsCard from "../components/ResultsCard";
import EmailGate from "../components/EmailGate";
import SharePanel from "../components/SharePanel";
import ConsultationCTA from "../components/ConsultationCTA";

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const toolRecommendations = {
    "ChatGPT Team": {
      recommended: "ChatGPT Plus",
      savings: 20,
    },

    "Cursor Pro": {
      recommended: "GitHub Copilot",
      savings: 10,
    },

    "Claude Team": {
      recommended: "Claude Pro",
      savings: 25,
    },

    "Midjourney Standard": {
      recommended: "DALL·E",
      savings: 15,
    },
  };

  const handleAudit = (tools) => {
    setLoading(true);

    setTimeout(() => {
      let monthlySpend = 0;
      let monthlySavings = 0;

      const recommendations = [];

      tools.forEach((tool) => {
        monthlySpend += Number(tool.spend || 0);

        const rec = toolRecommendations[tool.name];

        if (rec) {
          monthlySavings += rec.savings;

          recommendations.push({
            current: tool.name,
            recommended: rec.recommended,
            savings: rec.savings,
          });
        }
      });

      setResults({
        monthlySpend,
        monthlySavings,
        annualSavings: monthlySavings * 12,
        recommendations,
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Hero />

      <div className="px-6 pb-20">

        <AuditForm
          onSubmit={handleAudit}
          loading={loading}
        />

        {results && (
          <>
            <ResultsCard results={results} />

            <EmailGate />

            <SharePanel reportId="report-123" />

            <ConsultationCTA
              savings={results.monthlySavings}
            />
          </>
        )}
      </div>
    </div>
  );
}