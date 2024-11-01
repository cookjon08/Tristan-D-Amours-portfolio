import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav
        style={{
          border: "5px solid",
          borderRadius: "25px",
          color: "white",
          height: "500px",
          width: "250px",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink
          key="hero"
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "gold" : "#108c43",
              textDecoration: "none",
              fontSize: "40px",
            };
          }}
        >
          Tristan D'Amours
        </NavLink>
        <NavLink
          key="about"
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? "gold" : "skyblue",
              textDecoration: "none",
              fontSize: "35px",
            };
          }}
        >
          About{" "}
        </NavLink>
        <NavLink
          key="publishedWork"
          to="/publishedwork"
          style={({ isActive }) => {
            return {
              color: isActive ? "gold" : "skyblue",
              textDecoration: "none",
              fontSize: "35px",
            };
          }}
        >
          Published Work{" "}
        </NavLink>
        <NavLink
          key="contact"
          to="/contact"
          style={({ isActive }) => {
            return {
              color: isActive ? "gold" : "skyblue",
              textDecoration: "none",
              fontSize: "35px",
            };
          }}
        >
          Contact{" "}
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
