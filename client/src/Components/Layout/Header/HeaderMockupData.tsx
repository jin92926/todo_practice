import ThemeSwitch from "Components/themeSwitch";

interface IHeaderMockupData {
  component: JSX.Element | null;
  text: null | string;
  link: null | string;
}

export const HeaderMockupData: IHeaderMockupData[] = [
  {
    component: <ThemeSwitch />,
    text: null,
    link: null,
  },
  {
    component: null,
    text: "Calendar",
    link: "calendar",
  },
  {
    component: null,
    text: "Todo",
    link: "todo",
  },
];
