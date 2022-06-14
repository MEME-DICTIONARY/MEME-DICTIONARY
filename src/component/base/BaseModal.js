import React from 'react';
import styled from 'styled-components';

function BaseModal(props) {
  return (
    <>
      {!props.hidden && (
        <ModalWrapper onClick={props.hideModal}>
          <ModalContent>
            <p>{props.content}</p>
            <span onClick={props.hideModal}>X</span>
            {props.check && (
              <StButtonWrapper>
                <p onClick={props.onClickYes}>예</p>
                <p>아니오</p>
              </StButtonWrapper>
            )}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
}

const ModalWrapper = styled.div`
  * {
    font-family: "Noto Sans KR", sans-serif;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContent = styled.div`
position:relative;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;

  width: 400px;
  height:150px;
  padding: 20px 0;
  background: #fff;
  border-radius: 41px;
  z-index: 1;

  animation: 0.3s scale ease-in-out;
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  & > p {
    color: #232332;
    font-size:20px;
    font-weight: 700;
    
    width: 70%;
    line-height: 30px;
    word-break: keep-all;
    text-align: center;
  }

  & > span {
    position:absolute;
    top:20px;
    right:30px;
   color: #828282;
    cursor: pointer;
  }
  .withdrawal__check {
    display: flex;
    gap: 30px;
    font-weight: 700;

    a {
      text-decoration: none;
      color: #828282;
    }
  }
`;

const StButtonWrapper = styled.div`
  display:flex;
  gap:30px;
  & > p{
    border-radius:15px;
    width:70px;
    text-align:center;
    background-color: #232332;
    padding:10px 10px;
    color:#fff;
    font-weight:bold;
  }
`;

export default BaseModal;
