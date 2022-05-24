import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo_circles.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function AccountSection() {
  return (
    <StWrapper>
      <Link to="/main">
        <StLogoImage />
      </Link>
      <StTitle>
        <StDescription>밈과사전에 오신 것을 환영합니다! 계정 정보를 입력해주세요.</StDescription>
      </StTitle>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StLogoImage = styled(Logo)`
  width: 100px;
`;
const StTitle = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  margin: 22px 0;
  line-height: 30px;
`;
const StDescription = styled.p`
  width: 350px;
  white-space: pre-line;
`;
