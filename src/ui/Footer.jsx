import styled from "styled-components";
import Row from "./Row";

const StlyedFooter = styled.footer`
  background-color: var(--color-veryDarkViolet);
  color: white;
  padding-block: 6rem;

  & .footer-logo {
    color: white;
  }

  & .social-icon {
    display: flex;
    gap: 2rem;

    a {
      color: white;
    }

    a:hover {
      color: cyan;
    }
  }

  & h4 {
    color: white;
    margin-bottom: 1.5rem;
  }

  & .footer-cont {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

const StyledFooterLinks = styled.ul`
  & li {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (
    <StlyedFooter>
      <div className="container">
        <Row space="space-between">
          <div className="footer-logo">
            <img src="/images/logo.svg" alt="Company Logo" />
          </div>
          <div className="footer-cont">
            <StyledFooterLinks>
              <h4>Features</h4>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </StyledFooterLinks>
            <StyledFooterLinks>
              <h4>Features</h4>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </StyledFooterLinks>
            <StyledFooterLinks>
              <h4>Features</h4>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </StyledFooterLinks>

            <StyledFooterLinks className="social-icon">
              <li>
                <a href="#">
                  <img src="/images/icon-facebook.svg" alt="Facebook Svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon-twitter.svg" alt="Twitter Svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon-pinterest.svg" alt="Pinterest Svg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icon-instagram.svg" alt="Instagram Svg" />
                </a>
              </li>
            </StyledFooterLinks>
          </div>
        </Row>
      </div>
    </StlyedFooter>
  );
}

export default Footer;
