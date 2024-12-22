import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import Contact from "./Contact";
import Nav from "./Nav";
import PublishedWork from "./PublishedWork";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const App = () => {
  const { language } = useContext(LanguageToggleContext);

  return (
    <>
      <GlobalStyles />
      <Container className="container">
        <Sidebar className="sidebar" />
        <Router>
          <Nav className="nav-bar" />
          {
            <BackToTop
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              {language === "en" ? "Back to top ^" : "Haut de page ^"}
            </BackToTop>
          }
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/publishedwork" element={<PublishedWork />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
        <Sidebar />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Sidebar = styled.div`
  width: 15%;
  @media (max-width: 821px) {
    width: 0%;
  }
  @media (min-width: 822px) and (max-width: 1280px) {
    width: 5%;
  }
`;

const BackToTop = styled.button`
  background-color: aliceblue;
  border: 2.5px solid rgb(1, 4, 51);
  border-radius: 12.5px;
  color: rgb(1, 4, 51);
  font-size: 25px;
  font-weight: bold;
  font-variant: small-caps;
  margin-left: 10px;
  opacity: 0.75;
  padding: 10px;
  position: fixed;
  top: 92.5%;
  @media (max-width: 768px) {
    font-size: 12.5px;
    margin-left: 0px;
    opacity: 0.5;
    top: 95%;
  }
`;
