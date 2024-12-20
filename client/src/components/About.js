import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const About = () => {
  const { language } = useContext(LanguageToggleContext);

  return (
    <>
      <Container>
        <div className="border" style={{ width: ".25%" }}></div>
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
        <div className="border" style={{ width: ".25%" }}></div>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 20px 20px black;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  max-width: 50%;
  padding: 8px;
  @media (max-width: 1800px) {
    flex-flow: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0;
    max-width: 100%;
  }
`;

const SubContainer = styled.div`
  border: 2.5px solid black;
  border-radius: 50px;
  box-shadow: 15px 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px;
  padding: 16px;
  @media (max-width: 1800px) {
    box-shadow: 7.5px 7.5px black;
    gap: 10px;
    margin: 12.5px;
    max-width: 90%;
    padding: 8px;
  }
  @media (min-width: 773px) and (max-width: 1565px) {
    gap: 5px;
    margin: 20px 0;
  }
`;

const StyledImage = styled.img`
  background-color: #108c43;
  border: 15px dashed gold;
  border-radius: 50px;
  box-shadow: 15px 15px black;
  margin: 50px 25px;
  @media (max-width: 768px) {
    border: 5px dashed gold;
    box-shadow: 7.5px 7.5px black;
    margin: 15px 0;
    width: 55%;
  }
`;

const Header = styled.div`
  color: skyblue;
  font-size: 28px;
  margin: 15px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 770px) and (max-width: 1424px) {
    margin: 15px;
  }
`;

const Title = styled.div`
  color: aliceblue;
  font-size: 22px;
  max-width: 80%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
    margin: 5px;
  }
`;
