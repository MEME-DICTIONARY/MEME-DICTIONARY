import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 15px;
  background-image: linear-gradient(
    to right,
    #ff0000 0%,
    #d422ff 50%,
    #2737ff 100%
  );
  border: none;
  background-origin: content-box;
  background-clip: content-box;
  color: #fff;
  width: 200px;
  height: 70px;
  font-size:30px;
  font-weight:700;
  text-align: center;
`;

function BaseButton(props) {
    return <StyledButton>{props.text}</StyledButton>;
}

export default BaseButton;
