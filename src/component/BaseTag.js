import React from "react";
import styled from "styled-components";

function BaseTag(props) {
    return (
        <Tag>
            <strong>{props.keyword}</strong>
            <span onClick={() => props.deleteTag(props.keyword)}>X</span>
        </Tag>
    );
}

const Tag = styled.div`
  width: fit-content;
  border-radius: 20px;
  border: 2px solid #fff;
  color: #fff;

  & > strong{
      font-size:18px;
  }
  & > span{
      font-size:16px;
    color:#bdbdbd;
  }
`;

export default BaseTag;
