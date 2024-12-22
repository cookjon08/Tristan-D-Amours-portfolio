import ReactDOM from "react-dom/client";
import App from "./components/App";
// Render the language (English or French) context higher than the app, so that all components can access it.
import LanguageToggleProvider from "./components/LanguageToggleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LanguageToggleProvider>
    <App />
  </LanguageToggleProvider>
);
