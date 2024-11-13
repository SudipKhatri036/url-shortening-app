import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 6rem;
      font-weight: 700;
      line-height: 1.3;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
    `}
`;

export default Heading;