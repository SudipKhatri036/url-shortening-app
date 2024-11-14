import styled from "styled-components";
import Heading from "./Heading";
import Content from "./Content";
import Button from "./Button";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding-bottom: 6rem;
`;

const StyledContentDiv = styled.div`
  width: 90%;

  & button {
    margin-top: 3rem;
  }
`;

function Hero() {
  return (
    <StyledSection className="container">
      <div>
        <StyledContentDiv>
          <Heading as="h1">More than just shorter links</Heading>

          <Content fWeight="500" cWidth="80%">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </Content>

          <Button type="primary" shape="pill" size="medium">
            Get Started
          </Button>
        </StyledContentDiv>
      </div>
      <div>
        <img src="/images/illustration-working.svg" alt="Hero Image" />
      </div>
    </StyledSection>
  );
}

export default Hero;
