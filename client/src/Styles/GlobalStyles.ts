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
  /* // 부드럽게 켜지지만 새로고침 했을 때 깜박거리는 현상이 있음
  transition-duration: .5s; */
}

button {
  font-family : inherit;
  font-size: 2em;
}
`;

export default GlobalStyle;
