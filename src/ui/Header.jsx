import Row from "./Row";
import Button from "./Button";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";

const StyledHeader = styled.header`
  position: relative;
  padding: 3rem;

  @media (max-width: 670px) {
    padding: 2rem;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 100%;
  transition: all 0.5s ease;

  @media (max-width: 670px) {
    width: 90%;
    border-radius: 12px;
    position: absolute;
    top: -500%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-darkViolet);
    padding: 3rem !important;

    &.nav--active {
      top: 70%;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.a`
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-veryDarkBlue);
  }

  @media (max-width: 670px) {
    color: white;
  }
`;

const BtnCont = styled.div`
  color: var(--color-veryDarkBlue);
  font-size: 2rem;
  font-weight: 600;

  @media (min-width: 670px) {
    display: none;
  }
`;

function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <StyledHeader className="container">
      <Row type="horizontal" gap="3rem" space="space-between">
        <StyledLogo>
          <img src="/images/logo.svg" alt="Logo" />
        </StyledLogo>

        <Nav className={`${navActive ? "nav--active" : ""}`}>
          <Row space="space-between" mblCol="true">
            <NavList>
              <li>
                <NavLinks href="#">Features</NavLinks>
              </li>
              <li>
                <NavLinks href="#">Pricing</NavLinks>
              </li>
              <li>
                <NavLinks href="#">Resources</NavLinks>
              </li>
            </NavList>
            <Row mblCol="true">
              <Button type="secondary" size="small">
                Login
              </Button>
              <Button type="primary" size="small" shape="pill">
                Sign Up
              </Button>
            </Row>
          </Row>
        </Nav>

        <BtnCont>
          <Button type="secondary" onClick={() => setNavActive((nav) => !nav)}>
            <SlMenu />
          </Button>
        </BtnCont>
      </Row>
    </StyledHeader>
  );
}

export default Header;
