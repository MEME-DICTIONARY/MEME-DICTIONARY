import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { passwordState } from 'stores';
import Header from 'component/Header';
import BaseModal from 'component/base/BaseModal';
import styled from 'styled-components';
import { postChangePassword } from '../../api/mypage';
import { useNavigate, Link } from 'react-router-dom';
import { postExit } from '../../api/exit';
import { tokenState } from 'stores';

function MyPagepw() {
  const token = useRecoilState(tokenState)[0];
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');
  const [oldPW, setOldPW] = useState('');
  const [newPW, setnewPW] = useState('');
  const [verifyNewPW, setVerifyNewPw] = useState('');
  const currentPW = useRecoilState(passwordState)[0];
  const setNewPassword = useSetRecoilState(passwordState);

  const [changePassword, setChangePassword] = useState(false);
  const [withDrawal, setWithDrawal] = useState(false);

  function quitModalOpen() {
    setShowModal(true);
    setWithDrawal(true);
    setChangePassword(false);
    setModalContents('정말 탈퇴하시겠습니까?');
  }

  const checkPassword = () => {
    setChangePassword(true);
    setWithDrawal(false);
    if (oldPW === '' || newPW === '' || verifyNewPW === '') {
      setShowModal(true);
      setModalContents('빈 칸을 모두 입력해주세요.');
    } else {
      if (oldPW !== currentPW) {
        setShowModal(true);
        setModalContents('현재 비밀번호와 일치하지 않습니다.');
      } else if (newPW === oldPW) {
        setShowModal(true);
        setModalContents('기존 비밀번호와 같습니다.');
      } else if (newPW.length < 5) {
        setShowModal(true);
        setModalContents('비밀번호는 5글자 이상이어야 합니다.');
      } else if (newPW.length >= 5 && newPW === verifyNewPW) {
        setShowModal(true);
        setModalContents('정말 변경하시겠습니까?');
      } else if (newPW.length >= 5 && newPW !== verifyNewPW) {
        setShowModal(true);
        setModalContents('비밀번호가 일치하지 않습니다');
      }
    }
  };

  const handleChangePassword = async () => {
    const res = await postChangePassword({ oldPassword: oldPW, newPassword: newPW });
    if (res) {
      setNewPassword(newPW);
      navigate('/mypage/upload');
    }
  };

  const handleUserExit = async () => {
    await postExit(token);
  };
  return (
    <>
      <Header />

      {withDrawal && (
        <BaseModal
          hidden={!showModal}
          content={modalContents}
          hideModal={() => {
            setShowModal(false);
          }}
          check={newPW === verifyNewPW}
          onClickYes={handleChangePassword}
        />
      )}
      {changePassword && (
        <BaseModal
          hidden={!showModal}
          content={modalContents}
          hideModal={() => {
            setShowModal(false);
          }}
        />
      )}

      <StMyPageWrapper>
        <StMyPageListWrapper>
          <Link to="/mypage/upload">
            <StLinkNav>등록한글 </StLinkNav>
          </Link>
          <StMyActivityWrapper>
            <div>나의 활동</div>
            <Link to="/mypage/bookmark">
              <StLinkNav>북마크</StLinkNav>
            </Link>
            <Link to="/mypage/comment">
              <StLinkNav> 댓글</StLinkNav>
            </Link>
          </StMyActivityWrapper>
          <Link to="/mypage/pw">
            <StLinkNav isClicked={true}>비밀번호 수정</StLinkNav>
          </Link>
        </StMyPageListWrapper>

        <StPwContainer>
          <h3>현재 비밀번호</h3>
          <StPwInput
            type="text"
            value={oldPW}
            onChange={(e) => {
              setOldPW(e.target.value);
            }}
          ></StPwInput>
          <h3>비밀번호 수정</h3>
          <StPwInput
            type="text"
            value={newPW}
            onChange={(e) => {
              setnewPW(e.target.value);
            }}
          />
          <h3>비밀번호 확인</h3>
          <StPwInput
            type="text"
            value={verifyNewPW}
            onChange={(e) => {
              setVerifyNewPw(e.target.value);
            }}
          />
          <StChangeBtn
            onClick={() => {
              checkPassword();
            }}
          >
            변경
          </StChangeBtn>
          <StMyPageDelete
            onClick={() => {
              quitModalOpen();
              handleUserExit();
            }}
          >
            회원탈퇴
          </StMyPageDelete>
        </StPwContainer>
      </StMyPageWrapper>
    </>
  );
}

const StMyPageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;

  height: 100%;
  top: 10%;
`;

const StMyActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > div {
    color: #828282;
    font-weight: bold;
    color: ${({ isClicked }) => isClicked && '#fff'};
  }
`;
const StMyPageListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 190px;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 150px;
  align-items: center;
  gap: 50px;
`;
const StLinkNav = styled.div`
  color: #828282;
  color: ${({ isClicked }) => isClicked && '#fff'};
`;

const StPwContainer = styled.div`
  position: relative;
  top: 90px;
  left: 10%;
  height: 500px;
  width: 1200px;
  & > h3 {
    width: 90%;
    position: relative;
    left: 70px;
    top: 70px;
    color: white;
    margin-bottom: 10px;
  }
`;
const StPwInput = styled.input`
  position: relative;
  margin-bottom: 40px;
  left: 70px;
  border: none;
  border-radius: 20px;
  width: 610px;
  padding: 10px 0;
  top: 70px;
`;

const StChangeBtn = styled.button`
  color: white;
  width: 70px;
  padding: 10px 0;
  background-color: gray;
  border-radius: 20px;
  position: relative;
  left: 80px;
  top: 70px;
`;
const StMyPageDelete = styled.button`
  height: 30px;
  color: red;
  border: 1px red solid;
  background-color: #232332;
  position: relative;
  left: 400px;
  top: 250px;
`;
export default MyPagepw;
