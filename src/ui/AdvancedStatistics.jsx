import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";

const StyledDiv = styled.div`
  padding-block: 6rem;

  & .heading-cont {
    text-align: center;
    margin-bottom: 12rem;
  }

  & .stat-card-cont {
    position: relative;
  }

  & .stat-card-cont::before {
    content: "";
    height: 10px;
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 1;
    background-color: var(--color-cyan);
  }
`;

const StyledStatCard = styled.div`
  position: relative;
  z-index: 2;
  background-color: white;
  border-radius: var(--border-radius-tiny);
  padding-inline: 3rem;
  padding-block: 4rem;
  text-align: left;
  box-shadow: var(--shadow-md);

  & div {
    background-color: var(--color-darkViolet);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: -8rem;
    margin-bottom: 4rem;
  }
`;

function AdvancedStatistics() {
  return (
    <StyledDiv>
      <div className="heading-cont">
        <Heading as="h2">Advanced Statistics</Heading>
        <p>
          Track how your links are perfoming across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="line"></div>
      <Row className="stat-card-cont" gap="3rem">
        <StyledStatCard>
          <div>
            <img
              src="/images/icon-brand-recognition.svg"
              alt="Brand Recongnition Svg"
            />
          </div>
          <Heading as="h3">Brand Recognition</Heading>

          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. BRanded links help instil confidence in your content.
          </p>
        </StyledStatCard>
        <StyledStatCard>
          <div>
            <img
              src="/images/icon-detailed-records.svg"
              alt="Detailed records svg"
            />
          </div>
          <Heading as="h3">Detailed Records</Heading>

          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </StyledStatCard>
        <StyledStatCard>
          <div>
            <img
              src="/images/icon-brand-recognition.svg"
              alt="Brand Recongnition Svg"
            />
          </div>
          <Heading as="h3">Fully Customizable</Heading>

          <p>
            Improve brand awareness and content discoverability throug
            customizable links, supercharging audience engagement.
          </p>
        </StyledStatCard>
      </Row>
    </StyledDiv>
  );
}

export default AdvancedStatistics;
