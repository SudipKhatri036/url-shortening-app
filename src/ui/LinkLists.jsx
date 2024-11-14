import styled from "styled-components";
import Button from "./Button";
import LinkShortenerForm from "./LinkShortenerForm";
import ShortedLink from "./ShortedLink";

const StyledLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;

  & li {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 1.2rem;
    background-color: #fff;
    color: var(--color-darkViolet);
    font-weight: 500;
    border-radius: var(--border-radius-tiny);
  }

  & span {
    color: var(--color-cyan);
    margin-right: 2rem;
  }
`;

function LinkLists() {
  return (
    <div>
      <LinkShortenerForm />

      <StyledLinkList>
        <ShortedLink />
        <ShortedLink />
        <ShortedLink />
        <ShortedLink />
      </StyledLinkList>
    </div>
  );
}

export default LinkLists;
