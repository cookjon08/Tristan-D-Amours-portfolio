import StyledNavLink from "./StyledNavLink";
import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const Nav = () => {
  // Import two functions (sets language state english or french) to help facilitate the language toggle button.
  const { handleFrench, handleEnglish } = useContext(LanguageToggleContext);
  return (
    <>
      <StyledNav>
        <StyledLine>
          <StyledNavLink
            link={"/"}
            englishContent={"Tristan With Love"}
            frenchContent={"Tristan D'Amours"}
          />
        </StyledLine>
        <StyledLine>
          <StyledNavLink
            link={"/about"}
            englishContent={"About me"}
            frenchContent={"À propos de moi"}
          />
        </StyledLine>
        <StyledLine>
          <StyledNavLink
            link={"/publishedwork"}
            englishContent={"Writing"}
            frenchContent={"Rédaction"}
          />
        </StyledLine>
        <StyledLine>
          <StyledNavLink
            link={"/contact"}
            englishContent={"Contact"}
            frenchContent={"Contact"}
          />
        </StyledLine>
        <ToggleContainer>
          <ToggleButton onClick={handleEnglish}>EN</ToggleButton>
          <ToggleButton onClick={handleFrench}>FR</ToggleButton>
        </ToggleContainer>
      </StyledNav>
    </>
  );
};

export default Nav;

const StyledNav = styled.ul`
  border: 5px solid skyblue;
  border-radius: 50px;
  box-shadow: 20px 20px black;
  font-variant: small-caps;
  list-style-type: none;
  margin: 0 30px 0 0;
  width: 25%;
  padding: 32px;
  @media (max-width: 768px) {
    box-shadow: 10px 10px black;
    margin: 0 0 30px;
    width: 75%;
  }
  @media (min-width: 769px) and (max-width: 1664px) {
    margin: 0 0 40px;
    max-width: 100%;
  }
`;

const StyledLine = styled.li`
  border-bottom: 1px solid skyblue;
  display: box;
  font-size: 45px;
  padding: 8px;
  text-align: right;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
`;

const ToggleButton = styled.button`
  background-color: rgb(1, 4, 51);
  border-radius: 5px;
  box-shadow: 7.5px 7.5px black;
  color: AliceBlue;
  font-size: 25px;
  margin-top: 25px;
  padding: 16px;
  @media (max-width: 768px) {
    font-size: 12.5px;
  }
`;
