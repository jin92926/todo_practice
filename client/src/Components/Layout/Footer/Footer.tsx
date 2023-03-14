import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <UlContainer>
        <li>
          <LogoIconDiv>
            <LinkCss to="/">
              <div>로고</div>
            </LinkCss>
          </LogoIconDiv>
        </li>
        <li>
          <CopyrightContainer>
            <p>Copyright @ 2023 nam</p>
          </CopyrightContainer>
        </li>
      </UlContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 150px;
  box-shadow: lightgrey 0px -2px 2px;
  font-size: 23px;
  z-index: 1000;
  margin-top: auto;
`;

const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CopyrightContainer = styled.div``;

const LogoIconDiv = styled.div`
  > a {
    & :hover {
      opacity: 0.5;
    }
    svg {
      width: 100px;
      height: 60px;
    }
  }
`;

const LinkCss = styled(Link)`
  text-decoration-line: none;
  color: var(--main-yellow);
`;

export default Footer;
