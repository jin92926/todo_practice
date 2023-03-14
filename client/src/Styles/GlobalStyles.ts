import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import variables from "./GlobalVariables";
import { Theme } from "./Theme";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
${reset}

:root {
  ${variables}
  font-family: 'Gamja Flower', cursive;

}

html {
  scroll-behavior: smooth;
}
body {
  background-color: ${({ theme }) => theme.colors.background_color};
  color: ${({ theme }) => theme.colors.text_color};
  transition-property: background-color, color;
  transition-duration: .5s;
}
button {
  font-family : inherit;
  font-size: 2em;
}
`;

export default GlobalStyle;
