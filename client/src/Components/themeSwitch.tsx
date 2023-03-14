import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useRecoilState } from "recoil";
import { ThemeFlag, themeState } from "Store/theme";
import styled from "styled-components";

const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleClick = () => {
    if (theme === ThemeFlag.light) {
      setTheme(ThemeFlag.dark);
    } else {
      setTheme(ThemeFlag.light);
    }
  };

  return (
    <ThemeContainer onClick={handleClick}>
      {theme === ThemeFlag.light ? (
        <>
          <NightlightIcon />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <LightModeIcon />
          <span>Lihgt Mode</span>
        </>
      )}
    </ThemeContainer>
  );
};

export default ThemeSwitch;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
