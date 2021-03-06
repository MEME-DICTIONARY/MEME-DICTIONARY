import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postSignup, checkDuplicateId } from 'api/auth';

import AccountSection from 'component/authpage/AccountSection';
import BaseModal from 'component/base/BaseModal';
import BaseButton from 'component/base/BaseButton';

function SignupPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
    setIsCheck(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    //로그인 정보 서버에 post
    await postSignup({
      email: id,
      password: password,
    });
  };

  const onClickCheckDuplicateButton = async () => {
    const { data } = await checkDuplicateId(id);

    if (data) {
      setIsCheck(false);
      setShowModal(true);
      setModalContents('이미 존재하는 아이디입니다.');
      setId('');
      return;
    } else {
      setIsCheck(true);
      setShowModal(true);
      setModalContents('중복체크 완료');
    }
  };

  const handleSignupButton = () => {
    if (id === '' || password === '') {
      setShowModal(true);
      setModalContents('빈칸을 모두 채워주세요.');
    } else {
      if (!isCheck) {
        setShowModal(true);
        setModalContents('아이디 중복체크를 먼저 해주세요.');
      } else {
        if (id.length < 5 || password.length < 5 || verifyPassword.length < 5) {
          setShowModal(true);
          setModalContents('아이디와 비밀번호는 5글자 이상이어야 합니다.');
        } else if (password !== verifyPassword) {
          setShowModal(true);
          setModalContents('확인 비밀번호가 일치하지 않습니다.');
        } else {
          handleSignIn(); //회원가입 data post
          navigate('/login', { replace: true });
        }
      }
    }
  };
  return (
    <MainWrapper>
      <BaseModal
        hidden={!showModal}
        content={modalContents}
        hideModal={() => {
          setShowModal(false);
        }}
      />
      <AccountSection />
      <AccountWrapper>
        <DataInputBox>
          <strong>
            <span>*</span>아이디
          </strong>
          <DataIdBox>
            <DataIdBoxInput
              type="text"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={handleId}
              minLength={5}
              maxLength={10}
            />
            <OverLapCheckButton onClick={onClickCheckDuplicateButton}>중복확인</OverLapCheckButton>
          </DataIdBox>
        </DataInputBox>

        <DataInputBox>
          <strong>
            <span>*</span>비밀번호
          </strong>
          <DataIdBox>
            <DataIdBoxInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              minLength={5}
              maxLength={10}
              onChange={handlePassword}
            />
          </DataIdBox>
        </DataInputBox>

        <DataInputBox>
          <strong>
            <span>*</span>비밀번호 확인
          </strong>
          <DataIdBox>
            <DataIdBoxInput
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요."
              value={verifyPassword}
              minLength={5}
              maxLength={10}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
          </DataIdBox>
        </DataInputBox>
      </AccountWrapper>
      <BaseButton type="button" text="확인" onClick={handleSignupButton}></BaseButton>
    </MainWrapper>
  );
}
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #232332;
  min-width: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  padding: 164px 60px 110px 60px;
`;

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  gap: 24px;
`;

const DataInputBox = styled.div`
  display: flex;
  flex-direction: column;

  &:last-child {
    padding-bottom: 70px;
  }
  & > strong {
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
  }
`;

const DataIdBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const DataIdBoxInput = styled.input`
  border: none;
  border-radius: 25px;
  width: 609px;
  height: 52px;
  text-indent: 20px;
  font-size: 20px;

  &::placeholder {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #bdbdbd;
  }
`;

const OverLapCheckButton = styled.button`
  color: #fff;
  width: 93px;
  height: 39px;
  border: none;
  border-radius: 20px;
  background-color: #828282;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export default SignupPage;
