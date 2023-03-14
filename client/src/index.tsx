import App from "App";
import ReactDOM from "react-dom/client";
import { RecoilRoot, useRecoilState } from "recoil";
import { ThemeFlag, themeState } from "Store/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyles";
import { darkTheme, lightTheme } from "Styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// useRecoilState는 컴포넌트 내부에서만 호출 가능
const ThemeWrapper = () => {
  const [currentTheme] = useRecoilState(themeState);
  const theme = currentTheme === ThemeFlag.light ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

root.render(
  <RecoilRoot>
    <ThemeWrapper />
  </RecoilRoot>,
);
