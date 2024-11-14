import styled from "styled-components";
import Button from "./Button";

const StyledForm = styled.form`
  padding: 3rem 4rem;
  background: url("images/bg-boost-desktop.svg") var(--color-darkViolet)
    no-repeat;
  background-size: cover;
  border-radius: var(--border-radius-tiny);
  position: relative;
  top: -50px;

  & div {
    width: 100%;
    display: flex;
    gap: 2rem;
  }

  & input {
    padding: 1rem 2rem;
    width: 85%;
    font-size: 1.4rem;
    border: 1px solid transparent;
    border-radius: var(--border-radius-tiny);
    color: var(--color-darkViolet);
  }

  & p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    letter-spacing: 0.5px;
    font-style: italic;
    color: tomato;
    font-weight: 300;
  }

  & button {
    padding-inline: 3rem;
  }
`;

function LinkShortenerForm() {
  return (
    <StyledForm>
      <div>
        <input type="text" placeholder="Shorten a link here..." />
        <Button type="primary" size="small" shape="normal">
          Shorten it!
        </Button>
      </div>
      <p>Please add a link</p>
    </StyledForm>
  );
}

export default LinkShortenerForm;
