const breakPoints = {
  mobile: "640px",
  tablet: "980px",
};

const darkColors = {
  background_color: "#292929",
  text_color: "#ffffff",
};
const lightColors = {
  background_color: "#ffffff",
  text_color: "#000000",
};

export const lightTheme = {
  colors: lightColors,
  breakPoints,
};

export const darkTheme = {
  colors: darkColors,
  breakPoints,
};

export type Theme = typeof lightTheme | typeof darkTheme;
