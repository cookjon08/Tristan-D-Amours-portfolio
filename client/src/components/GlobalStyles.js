import { createGlobalStyle } from "styled-components";
import keyframes from "styled-components";
const fadeIn = keyframes`
from { opacity: 0 } to {opacity: 1}
`;

const GlobalStyles = createGlobalStyle`
:root {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  margin-top: 10vh;
  background-color: rgb(1, 4, 51);
}
`;

export default GlobalStyles;
