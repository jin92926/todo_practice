import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import TopModal from "Components/Common/Modal/TopModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { HeaderMockupData } from "./HeaderMockupData";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <NavContainer>
      <LogoIconDiv onClick={() => setModal(false)}>
        <LinkCss to="/">
          <div>ToDo</div>
        </LinkCss>
      </LogoIconDiv>
      <UlContainer>
        {HeaderMockupData.map(({ component, text, link }) => {
          return text === null ? (
            <li key="component">{component}</li>
          ) : (
            <li key={text}>
              <LinkCss to={`/${link}`}>
                <div>{text}</div>
              </LinkCss>
            </li>
          );
        })}
      </UlContainer>
      <MenuIconContainer>
        {modal === false ? (
          <MenuIcon onClick={() => setModal(!modal)} />
        ) : (
          <CloseIcon onClick={() => setModal(false)} />
        )}
        {modal === true ? <TopModal setModal={setModal} /> : null}
      </MenuIconContainer>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  z-index: 5000;
  border-top: 3px solid var(--main-yellow);
  box-shadow: 0px 2px 2px lightgray;
`;

const LogoIconDiv = styled.div`
  padding-left: 2rem;

  > a {
    & :hover {
      border-radius: 20px;
      opacity: 0.5;
    }
    svg {
      width: 100px;
      height: 60px;
    }
  }
`;

const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: none;
  }
  > li {
    display: flex;
    font-size: 18px;
    justify-content: center;
    min-width: 160px;
    padding-left: 4rem;
  }
`;

const LinkCss = styled(Link)`
  text-decoration-line: none;
  color: var(--font--color);
`;

const MenuIconContainer = styled.div`
  padding-right: 2rem;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: none;
  }
`;

export default Header;
