import styled from "styled-components";

const Articles = ({ article }) => {
  return (
    <StyledList>
      <StyledContent>
        <StyledLink key={article.header} href={article.link} target="_blank">
          {article.header}
        </StyledLink>
        <StyledDate>{article.date}</StyledDate>
      </StyledContent>
    </StyledList>
  );
};

export default Articles;

const StyledList = styled.ul`
  display: flex;
  flex-flow: column no wrap;
  justify-content: space-evenly;
  background-color: #108c43;
  border: 2.5px solid gold;
  border-radius: 25px;
  box-shadow: 15px 15px;
  list-style-type: none;
  max-width: 25%;
  min-height: 275px;
  min-width: 275px;
  padding: 24px;
  @media (max-width: 460px) {
    box-shadow: 5px 5px;
  }
  @media (max-width: 835px) {
    display: flex;
    justify-content: center;
    padding: 12px;
  }
  @media (min-width: 1440px) and (max-width: 1530px) {
    padding: 16px;
  }
`;

const StyledContent = styled.li`
  border-bottom: 7.5px dotted skyblue;
  display: box;
  font-size: 25px;
  font-variant: small-caps;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 75%;
  }
`;

const StyledLink = styled.a`
  color: aliceblue;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const StyledDate = styled.div`
  color: black;
  font-size: 24px;
  font-style: italic;
  margin: 15px 0 5px 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
