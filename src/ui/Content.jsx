import styled from "styled-components";

const Content = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--color-grayishViolet);
  width: ${(props) => props.cWidth};
  font-weight: ${(props) => props.fWeight};
`;

export default Content;
