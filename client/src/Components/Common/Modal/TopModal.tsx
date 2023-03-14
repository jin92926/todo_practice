import { HeaderMockupData } from "Components/Layout/Header/HeaderMockupData";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface propsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopModal = ({ setModal }: propsType) => {
  const handleClick = () => {
    setModal(false);
  };

  return (
    <UlContainer>
      {HeaderMockupData.map(({ component, text, link }) => {
        return text === null ? (
          <li key="component">{component}</li>
        ) : (
          <li key={text} onClick={handleClick}>
            <LinkCss to={`/${link}`}>
              <div>{text}</div>
            </LinkCss>
          </li>
        );
      })}
    </UlContainer>
  );
};

const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  z-index: 3000;
  background-color: ${({ theme }) => theme.colors.background_color};
  /* height: 100%; */

  > li {
    display: flex;
    align-items: center;
    padding: 32px 32px;
    height: 100px;
    border-bottom: 2px solid rgb(202, 200, 200);
  }
`;

const LinkCss = styled(Link)`
  text-decoration-line: none;
  color: var(--font--color);
`;

export default TopModal;
