import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "../LanguageToggleProvider";

const StyledContent = ({ englishTitle, frenchTitle }) => {
  const { language } = useContext(LanguageToggleContext);
  return (
    <>
      {language === "en" ? (
        <Title>{englishTitle}</Title>
      ) : (
        <Title>{frenchTitle}</Title>
      )}
    </>
  );
};

export default StyledContent;

const Title = styled.div`
  color: aliceblue;
  font-size: 22px;
  max-width: 80%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
    max-width: 90%;
    margin: 5px;
  }
`;
