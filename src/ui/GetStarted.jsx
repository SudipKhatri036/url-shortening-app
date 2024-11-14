import Heading from "./Heading";
import Button from "./Button";
import styled from "styled-components";

const StyledGetStarted = styled.section`
  background: url("images/bg-boost-desktop.svg") var(--color-darkViolet)
    no-repeat;
  background-position: center;
  text-align: center;
  padding-block: 4rem;

  & h2 {
    color: white;
  }
`;

function GetStarted() {
  return (
    <StyledGetStarted>
      <div className="container">
        <Heading as="h2">Boost your links today</Heading>
        <Button type="primary" shape="pill" size="small">
          Get Started
        </Button>
      </div>
    </StyledGetStarted>
  );
}

export default GetStarted;
