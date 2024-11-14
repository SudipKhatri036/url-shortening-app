import styled, { css } from "styled-components";

const types = {
  primary: css`
    background-color: var(--color-cyan);
    color: white;

    &:hover {
      opacity: 0.8;
    }
  `,

  secondary: css`
    background-color: transparent;
  `,
};

const shapes = {
  normal: css`
    border-radius: var(--border-radius-tiny);
  `,
  pill: css`
    border-radius: 24px;
  `,
};

const sizes = {
  small: css`
    font-size: 1.4rem;
    padding: 0.6rem 1.8rem;
  `,

  medium: css`
    font-size: 2rem;
    padding: 0.6rem 2.4rem;
  `,
};

const Button = styled.button`
  border: none;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.3s ease;
  ${(props) => types[props.type]}
  ${(props) => sizes[props.size]};
  ${(props) => shapes[props.shape]};
`;

export default Button;
