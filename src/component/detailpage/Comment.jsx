import { useState } from 'react';
import styled from 'styled-components';

export default function Comment(props) {
  const [input, setInput] = useState('');
  const { commentInfo, postComment } = props;

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
        {commentInfo?.map((comment, index) => (
          <>
            <StCommentID>익명 {index + 1}</StCommentID>
            <StCommentContent>{comment.content} </StCommentContent>
            <StCommentDate>{comment.created_date}</StCommentDate>
            <hr></hr>
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
  width: 900px;
  flex-direction: column;
  /* align-items: center; */
  justify-content: left;
  margin: 50px;
  color: #fff;
`;

const StCommentID = styled.div`
  color: white;
  padding-bottom: 10px;
`;
const StCommentContent = styled.div`
  color: white;
  padding-bottom: 10px;
  font-size: small;
`;
const StCommentDate = styled.div`
  color: white;
  font-size: x-small;
`;
