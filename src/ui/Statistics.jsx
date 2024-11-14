import styled from "styled-components";
import LinkLists from "./LinkLists";
import AdvancedStatistics from "./AdvancedStatistics";

const StyledSection = styled.section`
  background-color: #f0f1f6;
  padding-bottom: 6rem;

  & p {
    font-weight: 500;
  }
`;

function Statistics() {
  return (
    <StyledSection>
      <div className="container">
        <LinkLists />
        <AdvancedStatistics />
      </div>
    </StyledSection>
  );
}

export default Statistics;
