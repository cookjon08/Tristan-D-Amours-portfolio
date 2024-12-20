import { useContext, useState } from "react";
import styled from "styled-components";
import Articles from "./Articles";
import { LanguageToggleContext } from "./LanguageToggleProvider";
import {
  canadianPress,
  freelance,
  theLink,
  sportsnet,
  mlssoccer,
} from "../assets/data/articles";

const PublishedWorks = () => {
  const { language } = useContext(LanguageToggleContext);
  const [publication, setPublication] = useState("cp");

  const handleSelect = (e) => {
    setPublication(e.target.value);
  };

  return (
    <Container>
      <SelectContainer>
        <SelectLabel>
          {language === "en"
            ? "Select a publication: "
            : "Sélectionner une publication: "}
        </SelectLabel>
        <SelectBar onClick={handleSelect} id="publicationSelect">
          <option value="cp">Canadian Press</option>
          <option value="free">Freelance</option>
          <option value="link">The Link</option>
          <option value="mlssoccer">mlssoccer.com</option>
          <option value="sportsnet">Sportsnet</option>
        </SelectBar>
      </SelectContainer>
      <SubContainer>
        {publication === "cp" ? (
          canadianPress.map((article) => {
            return <Articles article={article} />;
          })
        ) : (
          <></>
        )}
        {publication === "free" ? (
          freelance.map((article) => {
            return <Articles article={article} />;
          })
        ) : (
          <></>
        )}
        {publication === "link" ? (
          theLink.map((article) => {
            return <Articles article={article} />;
          })
        ) : (
          <></>
        )}
        {publication === "sportsnet" ? (
          sportsnet.map((article) => {
            return <Articles article={article} />;
          })
        ) : (
          <></>
        )}
        {publication === "mlssoccer" ? (
          mlssoccer.map((article) => {
            return <Articles article={article} />;
          })
        ) : (
          <></>
        )}
      </SubContainer>
    </Container>
  );
};

export default PublishedWorks;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 20px 20px black;
  max-width: 50%;
  padding: 16px;
  @media (max-width: 768px) {
    box-shadow: 7.5px 7.5px black;
    flex-flow: column nowrap;
    margin-left: 0;
    max-width: 100%;
    padding: 0;
  }
  @media (min-width: 777px) and (max-width: 1280px) {
    max-width: 75%;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  text-align: center;
  @media (max-width: 767px) {
    align-items: center;
    flex-flow: column nowrap;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  border: 2.5px solid black;
  border-radius: 25px;
  box-shadow: 10px 10px black;
  padding: 16px;
  @media (max-width: 768px) {
    align-items: center;
    flex-flow: column nowrap;
    margin: 15px;
    padding: 8px;
  }
`;

const SelectBar = styled.select`
  background-color: AliceBlue;
  border-radius: 12.5px;
  color: rgb(1, 4, 51);
  font-size: 25px;
  font-variant: small-caps;
  padding: 5px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }
`;

const SelectLabel = styled.label`
  color: gold;
  font-size: 30px;
  font-variant: small-caps;
  margin-right: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
