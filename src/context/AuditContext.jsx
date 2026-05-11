import { createContext, useState } from "react";

export const AuditContext = createContext();

export const AuditProvider = ({ children }) => {
  const [report, setReport] = useState(null);

  return (
    <AuditContext.Provider value={{ report, setReport }}>
      {children}
    </AuditContext.Provider>
  );
};