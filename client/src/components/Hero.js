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
      <PageTitle>
        {language === "fr" ? "TRISTAN D'AMOURS" : "TRISTAN WITH LOVE"}
      </PageTitle>
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
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(1, 4, 51);
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 50px 50px black;
  max-width: 50%;
  padding: 28px;
  @media (max-width: 768px) {
    box-shadow: 10px 10px black;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    max-width: 100%;
    margin-left: 0;
    padding: 14px;
  }
  @media (min-width: 769px) and (max-width: 1664px) {
    max-width: 75%;
  }
`;

const PageTitle = styled.div`
  background-color: gold;
  border: 10px double #108c43;
  border-radius: 25px;
  box-shadow: 15px 15px black;
  color: #108c43;
  font-size: 40px;
  font-weight: bold;
  opacity: .9;
  padding: 28px;
  text-align: center;
  width: 35%;
  @media (max-width: 540px) {
    border: 5px double #108c43;
    box-shadow: 7.5px 7.5px black;
    font-size: 25px;
    margin: 15px 0 25px;
    padding: 14px;
    width: 75%;
  }
  @media (min-width: 377px) and (max-width: 768px) {
    
  }
  @media (min-width: 769px) and (max-width: 1023px) {
   
  }
     @media (min-width: 769px) and (max-width: 1023px) {
`;
const StyledImage = styled.img`
  border: 5px solid gold;
  border-radius: 100px;
  box-shadow: 15px 15px black;
  background-color: skyblue;
  margin: 50px 0 25px;
  max-height: 500px;
  text-align: center;
  @media (max-width: 767px) {
    border: 2.55px solid gold;
    box-shadow: 5px 5px black;
    margin: 15px 0 10px;
    max-height: 260px;
  }
  @media (min-width: 777px) and (max-width: 905px) {
    height: 250px;
  }
`;

const StyledParagraph = styled.p`
  background-color: #108c43;
  border: 5px solid gold;
  border-radius: 25px;
  box-shadow: 15px 15px black;
  color: AliceBlue;
  font-size: 24px;
  margin: 25px 0 50px 0;
  max-width: 60%;
  min-height: 180px;
  padding: 24px;
  text-align: left;
  @media (max-width: 460px) {
    border: 2.5px solid gold;
    box-shadow: 10px 10px black;
    font-size: 20px;
    margin: 0 0 30px;
    max-width: 65%;
  }
`;
