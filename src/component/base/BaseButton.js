import React from 'react';
import styled from 'styled-components';


function BaseButton(props) {
  return <StyledButton type={props.type} onClick={props.onClick}>{props.text}</StyledButton>;
}
const StyledButton = styled.button`
    border-radius: 15px;
    background-color:transparent;
    background-image: linear-gradient(
      to right,
      #ff0000 0%,
      #d422ff 50%,
      #2737ff 100%
    );
    border: none;
    background-clip: content-box;
    color: #fff;
    width: 170px;
    height: 60px;
    font-size:24px;
    font-weight:700;
    text-align: center;
    cursor:pointer;
  `;

export default BaseButton;
