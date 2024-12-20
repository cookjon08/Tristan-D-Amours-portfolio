import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  background-color: rgb(1, 4, 51);
  margin: 50px 0 100px 0;
}

 @media (max-width: 768px) {
    :root {
      margin-top: 10px;
    }
  }

li :hover {
  background-color: skyblue;
}

html {
  scroll-behavior: smooth;
}
`;

export default GlobalStyles;
