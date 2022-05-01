import React from "react";
import styled from "styled-components";

function BaseModal(props) {
  return (
    <>
      {!props.hidden && (
        <ModalWrapper onClick={props.hideModal}>
          <ModalContent>
            <p>{props.content}</p>
            <span onClick={props.hideModal}>X</span>
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
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 300px;
  height: 100px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 18px;
  padding: 15px;
  justify-content: center;
  align-items: center;

  & > p {
    color: #232332;
    font-weight: 700;
  }

  & > span {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #bdbdbd;
    cursor: pointer;
  }
`;

export default BaseModal;
