import { createContext, useState } from "react";

export const LanguageToggleContext = createContext();

const LanguageToggleProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const handleFrench = (e) => {
    setLanguage("fr");
  };

  const handleEnglish = (e) => {
    setLanguage("en");
  };

  return (
    <LanguageToggleContext.Provider
      value={{ language, handleEnglish, handleFrench }}
    >
      {children}
    </LanguageToggleContext.Provider>
  );
};

export default LanguageToggleProvider;
