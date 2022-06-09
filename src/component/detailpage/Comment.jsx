import { useState } from 'react';
import styled from 'styled-components';

export default function Comment({ commentInfo, postComment }) {
  const [input, setInput] = useState('');
  return (
    <StWrapper>
      <StCommentHeader>
        <h2>댓글</h2>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="로그인 후 이용 가능합니다."
        ></input>
        <button onClick={() => postComment(input)}> 등록</button>
      </StCommentHeader>
      <StCommentWrapper>
        {commentInfo.map((comment, index) => (
          <>
            <h2>익명 {index + 1}</h2>
            <p>{comment.content} </p>
            <span>{comment.date}</span>
          </>
        ))}
      </StCommentWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  padding: 20px;
`;
const StCommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & > h2 {
    color: #fff;
  }
  & > input {
    width: 930px;
    height: 50px;
    border-radius: 30px;
    padding: 0 20px;
  }
  & > button {
    width: 50px;
    height: 30px;
    border-radius: 13px;
    background-color: #fff;
  }
`;
const StCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 169px;
  color: #fff;
`;
