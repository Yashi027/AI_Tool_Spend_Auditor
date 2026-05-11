import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AuditForm from "../components/AuditForm";
import ResultsCard from "../components/ResultsCard";
import EmailGate from "../components/EmailGate";
import ConsultationCTA from "../components/ConsultationCTA";
import SharePanel from "../components/SharePanel";

import { useState } from "react";
import { calculateSavings } from "../utils/calculateSavings";
import { nanoid } from "nanoid";

export default function Home() {
  const [results, setResults] = useState(null);
  const [reportId, setReportId] = useState("");

  const handleAudit = (tools) => {
    const audit = calculateSavings(tools);

    setResults(audit);

    setReportId(nanoid(8));
  };

  return (
    <div>
        <Navbar/>
      <Hero />

      <div className="px-6 pb-20">
        <AuditForm onSubmit={handleAudit} />

        {results && (
          <>
            <ResultsCard results={results} />

            <EmailGate />

            <ConsultationCTA
              savings={results.monthlySavings}
            />

            <SharePanel reportId={reportId} />
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
}