import { useState } from 'react';
import styled from 'styled-components';

export default function Comment(props) {
  const [input, setInput] = useState('');
  const { commentInfo, postComment, placeholder } = props;

  return (
    <StWrapper>
      <StCommentHeader>
        <h2>댓글</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
        ></input>
        <button
          type="button"
          onClick={() => {
            postComment(input);
            setInput('');
          }}
        >
          등록
        </button>
      </StCommentHeader>
      <StCommentWrapper>
        {commentInfo?.map((comment, index) => (
          <div key={index}>
            <StCommentID>익명 {index + 1}</StCommentID>
            <StCommentContent>{comment.content} </StCommentContent>
            <StCommentDate>{comment.created_date.replace('T', ' ')}</StCommentDate>
            <hr></hr>
          </div>
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
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 10px;

  & > h2 {
    color: #fff;
    width: 30px;
  }
  & > input {
    width: 90%;
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
  letter-spacing: 0.5px;
`;
