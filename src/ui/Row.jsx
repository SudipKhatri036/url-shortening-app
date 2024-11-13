import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: ${(props) => props.gap};

  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.space === "space-between" &&
    css`
      justify-content: space-between;
    `}


  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}

    ${(props) =>
    props.mblCol &&
    css`
      @media (max-width: 670px) {
        flex-direction: column;
        gap: 2rem;
      }
    `}
`;

export default Row;
