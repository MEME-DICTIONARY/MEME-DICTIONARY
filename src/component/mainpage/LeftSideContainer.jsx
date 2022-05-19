import styled from 'styled-components';

function LeftSideContainer({ title, description }) {
  return (
    <StWrapper>
      <StRankingWrapper>
        <h3>{title}</h3>
      </StRankingWrapper>

      <StDesc>{description}</StDesc>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StRankingWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 3px solid transparent;
  background-image: linear-gradient(to right, #ff0000 0%, #d422ff 50%, #2737ff 100%);
  background-origin: border-box;
  background-clip: border-box;
  display: flex;
  justify-content: center;

  & > h3 {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    position: absolute;
    transform: translateY(25px);
    text-shadow: 2px 2px 3px #000;
    white-space: normal;
    width: 150px;
  }
`;

const StDesc = styled.div`
  margin-top: 42px;
  width: 380px;
  color: #bdbdbd;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.5px;
  line-height: 30px;
  text-align: center;
`;

export default LeftSideContainer;
