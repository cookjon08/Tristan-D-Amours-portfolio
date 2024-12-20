import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const Hero = () => {
  const { language } = useContext(LanguageToggleContext);

  return (
    <Container className="container">
      <StyledImage
        alt="Tristan D'Amours smiling, arms crossed"
        src={require("../assets/photos/portraitArmsCrossed.png")}
      />
      <StyledParagraph>
        {language === "en"
          ? "Welcome! My name is Tristan, and I am a bilingual native of Montreal. I formerly plied my trade as a sports reporter for publications such as Canadian Press and Sportsnet. I now work as a communications manager for Major League Soccer team CF Montreal."
          : "Bienvenue, je m'appelle Tristan ! Je suis né et j'ai grandi à Montréal. J'ai exercé mon métier de journaliste sportif pour des publications telles que la Presse Canadienne et Sportsnet. Je travaille maintenant comme gestionnaire des communications pour l'équipe de Major League Soccer, le CF Montréal."}
      </StyledParagraph>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  max-height: 50%;
  background-color: rgb(1, 4, 51);
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 20px 20px black;
  max-width: 50%;
  padding: 8px;
  @media (max-width: 768px) {
    box-shadow: 10px 10px black;
    max-height: 100%;
    max-width: 100%;
    margin-left: 0;
  }
  @media (min-width: 771px) and (max-width: 1664px) {
    max-width: 75%;
  }
`;

const StyledImage = styled.img`
  margin: 25px 0;
  border: 7.5px solid gold;
  border-radius: 100px;
  box-shadow: 15px 15px black;
  background-color: skyblue;
  max-height: 500px;
  text-align: center;
  @media (max-width: 767px) {
    border: 5px solid gold;
    box-shadow: 5px 5px black;
    max-height: 260px;
  }
  @media (min-width: 777px) and (max-width: 905px) {
    height: 250px;
  }
`;

const StyledParagraph = styled.p`
  background-color: #108c43;
  border: 2.5px solid gold;
  border-radius: 25px;
  box-shadow: 15px 15px black;
  color: AliceBlue;
  font-size: 24px;
  margin: 5px 0 50px 0;
  max-width: 60%;
  min-height: 180px;
  padding: 24px;
  text-align: center;
  @media (max-width: 460px) {
    box-shadow: 10px 10px black;
    margin: 0 0 30px;
    max-width: 65%;
  }
`;
