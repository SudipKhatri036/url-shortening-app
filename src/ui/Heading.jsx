import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 6rem;
      line-height: 1;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
    `}
    font-weight: 700;
  margin-block: 1.5rem;
`;

export default Heading;
