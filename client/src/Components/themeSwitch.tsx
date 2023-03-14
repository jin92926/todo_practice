import { useRecoilState } from "recoil";
import { ThemeFlag, themeState } from "Store/theme";

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
    <button type="button" onClick={handleClick}>
      {theme === ThemeFlag.light ? "dark" : "light"}
    </button>
  );
};

export default ThemeSwitch;
