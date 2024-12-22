import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const About = () => {
  const { language } = useContext(LanguageToggleContext);

  return (
    <>
      <Container>
        <Banner>{language === "fr" ? "À PROPOS DE MOI" : "ABOUT ME"}</Banner>
        <StyledImage
          alt="Tristan D'Amours standing on the sideline, intently"
          src={require("../assets/photos/sideline.png")}
        />
        <SubContainer>
          <Header>
            {language === "en"
              ? "Professional Experience"
              : "Expérience Professionnelle"}
          </Header>
          <Title>
            {language === "en"
              ? "Communications manager — CF Montréal (Aug. 2023 - Present)"
              : "Gestionnaire des communications — CF Montréal (août 2023 - aujourd'hui)"}
          </Title>
          ;
          <Title>
            {language === "en"
              ? "Content coordinator — Laval Rocket (June 2023 - Aug. 2023)"
              : "Coordonnateur de contenu — Laval Rocket (juin 2023 - août 2023)"}
          </Title>
          ;
          <Title>
            {language === "en"
              ? "Associate editor — Sportsnet (Jan. 2022 - June 2023)"
              : "Rédacteur en chef adjoint — Sportsnet (janvier 2022 - juin 2023)"}
          </Title>
          ;
          <Title>
            {language === "en"
              ? "Freelance journalist/editor (Sept. 2018 - June 2023)"
              : "Journaliste/rédacteur indépendant (sept. 2018 - juin 2023)"}
          </Title>
          ;{" "}
          <Title>
            {language === "en"
              ? "Broadcaster — McGill University (Sept. 2021 - Oct. 2022)"
              : "Radiodiffuseur — Université McGill (sept. 2021 - oct. 2022)"}
          </Title>
          ;{" "}
          <Title>
            {language === "en"
              ? "Montreal correspondent — Pro Soccer USA (Feb. 2019 - April 2020)"
              : "Correspondant à Montréal — Pro Soccer USA (février 2019 - avril 2020)"}
          </Title>
          ;{" "}
          <Title>
            {language === "en"
              ? "Staff writer — SBI Soccer (Feb. 2016 - Feb. 2018)"
              : "Rédacteur — SBI Soccer (Fév. 2016 - Fév. 2018)"}
          </Title>
          ;
        </SubContainer>
        <Banner>{language === "fr" ? "À PROPOS DE MOI" : "ABOUT ME"}</Banner>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 50px 50px black;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  max-width: 50%;
  padding: 28px;
  @media (max-width: 768px) {
    box-shadow: 25px 25px black;
    flex-flow: column-reverse;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1664px) {
    max-width: 75%;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: space-evenly;
  gap: 5px;
  border: 2.5px solid black;
  border-radius: 50px;
  box-shadow: 15px 15px;
  padding: 24px;
  margin: 50px 0 50px;
  max-width: 50%;
  @media (max-width: 540px) {
    box-shadow: 7.5px 7.5px black;
    margin: 25px 0 25px;
    max-width: 75%;
  }
`;

const Banner = styled.div`
  background-color: skyblue;
  border: 15px double #108c43;
  border-radius: 50px;
  box-shadow: 15px 15px #108c43;
  color: #108c43;
  font-size: 50px;
  font-weight: bold;
  max-height: 25%;
  opacity: 0.25;
  padding: 28px;
  text-align: right;
  width: 100%;
  @media (max-width: 768px) {
    border: 5px double #108c43;
    box-shadow: 7.5px 7.5px #108c43;
    font-size: 30px;
    padding: 14px;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  background-color: #108c43;
  border: 15px dashed gold;
  border-radius: 50px;
  box-shadow: 15px 15px black;
  margin: 50px 0 50px;
  @media (max-width: 540px) {
    border: 7.5px dashed gold;
    box-shadow: 7.5px 7.5px black;
    margin: 25px 0 25px;
    width: 75%;
  }
`;

const Header = styled.div`
  color: skyblue;
  font-size: 26px;
  margin-bottom: 15px;
  text-align: right;
  @media (max-width: 767px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Title = styled.div`
  color: aliceblue;
  font-size: 24px;
  max-width: 80%;
  text-align: right;
  @media (max-width: 767px) {
    font-size: 22px;
    max-width: 100%;
    padding: 5px;
    text-align: center;
  }
`;
