import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { postLogin } from 'api/auth';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { isLoginState, tokenState } from '../../stores';

import AccountSection from 'component/authpage/AccountSection';
import BaseButton from 'component/base/BaseButton';
import BaseModal from 'component/base/BaseModal';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');
  const setToken = useSetRecoilState(tokenState);
  const setIsLogin = useSetRecoilState(isLoginState);
  const isLogin = useRecoilState(isLoginState)[0];

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const response = await postLogin({
      email: id,
      password: password,
    });
    if (response !== null) {
      setIsLogin(true);
      setToken(response.data.token);
      navigate('/main');
    } else {
      setShowModal(true);
      setModalContents('가입되지 않은 정보입니다.');
    }
  };

  const handleLoginButton = () => {
    if (id === '' || password === '') {
      setShowModal(true);
      setModalContents('빈칸을 모두 채워주세요.');
    } else if (id.length < 5 || password.length < 5) {
      setShowModal(true);
      setModalContents('아이디와 비밀번호는 5글자 이상이어야 합니다.');
    } else {
      handleLogin();
    }
  };

  return (
    <StWrapper>
      <BaseModal
        hidden={!showModal}
        content={modalContents}
        hideModal={() => {
          setShowModal(false);
        }}
      />
      <AccountSection />
      <StAccountWrapper>
        <StLoginInfo>
          <StLoginTitle>
            <span>*</span>아이디
          </StLoginTitle>
          <StIdInputWrapper>
            <input
              type="text"
              minLength={5}
              maxLength={10}
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={handleId}
            />
          </StIdInputWrapper>
        </StLoginInfo>

        <StLoginInfo>
          <StLoginTitle>
            <span>*</span>비밀번호
          </StLoginTitle>
          <StIdInputWrapper>
            <input
              type="password"
              minLength={5}
              maxLength={10}
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={handlePassword}
            />
          </StIdInputWrapper>
        </StLoginInfo>
      </StAccountWrapper>
      <StSignupLink>
        <Link to="/signup">회원가입 하러가기</Link>
      </StSignupLink>
      <BaseButton text="로그인" onClick={handleLoginButton}></BaseButton>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #232332;
  min-width: fit-content;
  min-height: 100vh;
  padding: 164px 60px 110px 60px;
  margin: 0 auto;
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

const StAccountWrapper = styled(FlexColumnWrapper)`
  padding-left: 60px;
`;

const StLoginInfo = styled(FlexColumnWrapper)`
  &:last-child {
    padding-bottom: 70px;
  }
`;
const StLoginTitle = styled.strong`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding-bottom: 5px;

  & > span {
    color: #ff0000;
    vertical-align: middle;
    padding-right: 3px;
  }
`;
const StIdInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  & > input {
    border: none;
    border-radius: 25px;
    width: 609px;
    height: 52px;
    text-indent: 20px;
    font-size: 20px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #bdbdbd;
    }
  }
`;
const StSignupLink = styled.a`
  color: #bdbdbd;
  margin-bottom: 24px;
`;

export default LoginPage;
