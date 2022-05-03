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
            {props.withdrawal && (
              <div className="withdrawal__check">
                <a href="/main">예</a>
                <p>아니오</p>
              </div>
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
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index:1;
`;

const ModalContent = styled.div`
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
    width:70%;
    line-height:23px;
    word-break: keep-all;
    text-align: center;
  }

  & > span {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #bdbdbd;
    cursor: pointer;
  }
  .withdrawal__check{
    display:flex;
    gap:30px;
    font-weight: 700;

    a{
      text-decoration: none;
      color:#828282;
    }
  }
`;

export default BaseModal;
