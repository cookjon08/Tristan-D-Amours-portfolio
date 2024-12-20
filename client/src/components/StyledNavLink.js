import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const StyledNavLink = ({ englishContent, frenchContent, link }) => {
  const { language } = useContext(LanguageToggleContext);
  return (
    <>
      {language === "en" ? (
        <NavLink
          key="hero"
          to={link}
          style={({ isActive }) => {
            return {
              textDecorationLine: "none",
              color: isActive ? "gold" : "aliceblue",
            };
          }}
        >
          {englishContent}
        </NavLink>
      ) : (
        <NavLink
          key="hero"
          to={link}
          style={({ isActive }) => {
            return {
              textDecorationLine: "none",
              color: isActive ? "gold" : "aliceblue",
            };
          }}
        >
          {frenchContent}
        </NavLink>
      )}
    </>
  );
};

export default StyledNavLink;
