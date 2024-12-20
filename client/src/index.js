import ReactDOM from "react-dom/client";
import App from "./components/App";
import LanguageToggleProvider from "./components/LanguageToggleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LanguageToggleProvider>
    <App />
  </LanguageToggleProvider>
);
