import React from 'react';
import styled from 'styled-components';

function BaseTag(props) {
  return (
    <Tag>
      <strong>{props.keyword}</strong>
      <span onClick={() => props.deleteTag(props.keyword)}>X</span>
    </Tag>
  );
}

const Tag = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  gap: 2px;
  width: fit-content;
  padding: 5px;
  border-radius: 20px;
  border: 2px solid #fff;
  text-align: center;
  align-items: center;
  color: #fff;

  & > span {
    font-size: 13px;
    color: red;
  }
`;

export default BaseTag;
