import { createContext, useState } from "react";

// Declare renamed variable using react function createContext.
export const LanguageToggleContext = createContext();

// Purpose of the language toggle provider is to allow components to render conditionally in English or French based on the language state.
const LanguageToggleProvider = ({ children }) => {
  // Language state is either a string of "en" for English or "fr" for French.
  const [language, setLanguage] = useState("fr");

  // Function sets language to French.
  const handleFrench = (e) => {
    setLanguage("fr");
  };

  // Function sets language to English.
  const handleEnglish = (e) => {
    setLanguage("en");
  };

  return (
    // Children equals App.
    <LanguageToggleContext.Provider
      // Language state and helper functions are passed down through the provider as values.
      value={{ language, handleEnglish, handleFrench }}
    >
      {children}
    </LanguageToggleContext.Provider>
  );
};

export default LanguageToggleProvider;
