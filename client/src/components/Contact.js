import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const { language } = useContext(LanguageToggleContext);
  return (
    <Container>
      <Email>
        {language === "en" ? "email: " : "courriel: "} <br />
        <StyledSpan>tristanldamours@gmail.com</StyledSpan>
      </Email>
      <StyledImage
        alt="Tristan D'Amours using a cellphone"
        src={require("../assets/photos/tristanCellphone.jpg")}
      />
      <SubContainer>
        <Header>
          {language === "en" ? "How to follow me: " : "Comment me suivre: "}
        </Header>
        <Section>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "48px" }}
            color="aliceblue"
            aria-hidden="true"
          />
          <Link
            href="https://www.instagram.com/tristandamours/"
            target="_blank"
          >
            tristandamours
          </Link>
        </Section>
        <Section>
          <FontAwesomeIcon
            icon={faMedium}
            style={{ fontSize: "48px" }}
            color="aliceblue"
            aria-hidden="true"
          />
          <Link href="https://medium.com/tristandamours" target="_blank">
            Tristan D'Amour's Notepad
          </Link>
        </Section>
        <Section>
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ fontSize: "48px" }}
            color="aliceblue"
            aria-hidden="true"
          />
          <Link href="https://www.x.com/tristandamours/" target="_blank">
            @tristandamours
          </Link>
        </Section>
      </SubContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 20px 20px black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  max-width: 50%;
  padding: 16px;
  @media (max-width: 768px) {
    box-shadow: 10px 10px black;
    flex-flow: column nowrap;
    max-width: 100%;
    padding: 4px;
  }
  @media (min-width: 777px) and (max-width: 1280px) {
    max-width: 75%;
  }
`;

const SubContainer = styled.div`
  border: 2.5px solid skyblue;
  border-radius: 50px;
  box-shadow: 15px 15px black;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  max-width: 50%;
  margin-bottom: 50px;
  min-height: 500px;
  min-width: 85%;
  padding: 16px;
  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
    max-width: 75%;
    padding: 8px;
  }
`;

const Email = styled.div`
  border: 2.5px solid black;
  border-radius: 25px;
  box-shadow: 15px 15px black;
  color: skyblue;
  font-size: 50px;
  padding: 24px;
  @media (max-width: 768px) {
    box-shadow: 7.5px 7.5px black;
    font-size: 25px;
    margin-top: 25px;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  color: aliceblue;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Header = styled.div`
  border: 2.5px solid black;
  border-radius: 25px;
  box-shadow: 10px 10px black;
  color: gold;
  font-size: 32px;
  padding: 24px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    box-shadow: 5px 5px black;
  }
  @media (min-width: 770px) and (max-width: 1424px) {
    margin: 15px;
  }
`;

const Section = styled.div`
  border: 2.5px solid gold;
  border-radius: 25px;
  box-shadow: 10px 10px black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  min-width: 75%;
  padding: 16px;
  @media (max-width: 768px) {
    box-shadow: 5px 5px black;
    min-width: 95%;
    margin: 5px;
  }
`;

const Link = styled.a`
  color: aliceblue;
  font-size: 28px;
  max-width: 80%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    margin: 2.5px;
  }
`;

const StyledImage = styled.img`
  background-color: gold;
  border: 15px dashed #108c43;
  border-radius: 50px;
  box-shadow: 15px 15px black;
  margin: 50px;
  max-width: 50%;
  @media (max-width: 768px) {
    border: 7.5px dashed #108c43;
    box-shadow: 7.5px 7.5px black;
    margin: 25px;
    max-width: 85%;
  }
`;
