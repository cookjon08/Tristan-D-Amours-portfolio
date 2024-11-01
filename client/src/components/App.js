import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import Contact from "./Contact";
import Nav from "./Nav";
import PublishedWork from "./PublishedWork";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Container>
          <Nav />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/publishedwork" element={<PublishedWork />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
