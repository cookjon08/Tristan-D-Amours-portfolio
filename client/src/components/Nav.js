import StyledNavLink from "./StyledNavLink";
import styled from "styled-components";
import { useContext } from "react";
import { LanguageToggleContext } from "./LanguageToggleProvider";

const Nav = () => {
  const { handleFrench, handleEnglish } = useContext(LanguageToggleContext);
  return (
    <>
      <StyledNav>
        <StyledLine>
          <StyledNavLink
            link={"/"}
            englishContent={"Tristan D'Amours"}
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
  box-shadow: 15px 15px black;
  font-variant: small-caps;
  list-style-type: none;
  margin: 0 30px 0 0;
  max-width: 25%;
  padding: 48px;
  @media (max-width: 768px) {
    margin: 0 0 30px;
    max-width: 100%;
  }
`;

const StyledLine = styled.li`
  border-bottom: 2.5px solid #108c43;
  display: box;
  font-size: 35px;
  padding: 8px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
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
