import portraitArmsCrossed from "../assets/portraitArmsCrossed.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <img
        alt="'Tristan D'Amours smiling"
        src={portraitArmsCrossed}
        style={{
          maxHeight: "750px",
          border: "5px solid gold",
          borderRadius: "250px",
          backgroundColor: "skyblue",
        }}
      />
      <p
        style={{
          fontSize: "25px",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        My name is Tristan, and I am a bilingual Montreal native. <br />{" "}
        Formerly a sports reporter for publications such as Canadian Press and
        Sportsnet, I now work for CF Montreal's media relations department.
      </p>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  flexflow: row nowrap;
  align-content: center;
  align-items: center;
  border: 5px solid gold;
  border-radius: 125px;
  background-color: #108c43;
  margin-left: 25px;
  padding: 20px;
  max-width: 60%;
`;
