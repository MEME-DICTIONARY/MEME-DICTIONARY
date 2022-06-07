import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import styled from 'styled-components';
import { getDetailContent, postDetailComment, postDetailLikes } from '../api/posts';
import { useRecoilState } from 'recoil';
import { tokenState } from 'stores';

function DetailPage() {
  const token = useRecoilState(tokenState)[0];
  const [imghashtag] = useState(['#무야호', '#무한도전']);

  const [wordLike, addWordLike] = useState(null);
  const [wordWarning, addWordWarning] = useState(null);
  const [wordBookMark, addWordBookMark] = useState(null);
  const [detailInfo, setDetailInfo] = useState(null);
  const [comment, setComment] = useState([]);
  const [postedComment, postComment] = useState('');

  let params = useParams();

  const handleComment = (e) => {
    postComment(e.target.value);
  };

  const onReset = () => {
    postComment('');
  };
  const handleDetailPage = async () => {
    const { data } = await getDetailContent(params.postId);

    setDetailInfo(data);
    addWordLike(data.likes);
    addWordBookMark(data.bookmark_cnt);
    setComment(
      data.comments.map((res) => ({
        id: res.id,
        content: res.content,
        created_date: res.created_date,
      }))
    );

    console.log(data);
  };

  const handleLikeButton = async () => {
    const { data } = await postDetailLikes(params.postId);
    console.log(data);
  };

  const handleCommentButton = async () => {
    const { data } = await postDetailComment(token, params.postId, {
      content: postedComment,
    });
    handleDetailPage();
    console.log(data);
  };

  useEffect(() => {
    handleDetailPage();
  }, []);

  return (
    <>
      <Header />

      {detailInfo && params.type === 'word' ? (
        <StWordWrapper>
          <StTitle>{detailInfo.title}</StTitle>

          <StWordInfo>
            <StWordInfoWrapper>
              <StWordMeaning>뜻</StWordMeaning>
              <StWordContent>{detailInfo.description}</StWordContent>
            </StWordInfoWrapper>
            <StExampleWrapper>
              <StWordExample>예문</StWordExample>
              <StWordContent>{detailInfo.example}</StWordContent>
            </StExampleWrapper>
          </StWordInfo>

          <StHashtagWrapper>
            <StHashTag>{detailInfo.keyw}</StHashTag>
            <StHashTag>{detailInfo.keyww}</StHashTag>
          </StHashtagWrapper>

          <StButtonWrapper>
            <StBottomBtn>
              <StButtonImg
                src={require('assets/img/detailPage/like.png')}
                alt="좋아요"
                onClick={() => {
                  addWordLike(wordLike + 1);
                  handleLikeButton();
                }}
              ></StButtonImg>
              {wordLike}
            </StBottomBtn>

            <StBottomBtn
              onClick={() => {
                addWordWarning(wordWarning + 1);
              }}
            >
              <StButtonImg
                src={require('assets/img/detailPage/report.png')}
                alt="신고"
              ></StButtonImg>
              {wordWarning}
            </StBottomBtn>

            <StBottomBtn>
              <StBookMarkImg
                src={require('assets/img/detailPage/bookmark.png')}
                alt="북마크"
                onClick={() => {
                  addWordBookMark(wordBookMark + 1);
                  handleLikeButton();
                }}
              ></StBookMarkImg>
              {wordBookMark}
            </StBottomBtn>
          </StButtonWrapper>
          <StReplyWrapper>
            <StCommentTitle>댓글 {comment.length}</StCommentTitle>
            <StComment
              type="text"
              placeholder="  로그인 후 이용 가능합니다."
              value={postedComment}
              onChange={handleComment}
            />
            <StCommentBtn
              onClick={() => {
                handleCommentButton();
                onReset();
              }}
            >
              등록
            </StCommentBtn>
          </StReplyWrapper>
          <StCommentWrapper>
            {comment.map((result, index) => (
              <StCommentWrapper>
                <StCommentID>익명 {index}</StCommentID>
                <StCommentContent>{result.content}</StCommentContent>
                <StCommentDate>{result.created_date}</StCommentDate>
                <hr></hr>
              </StCommentWrapper>
            ))}
          </StCommentWrapper>
        </StWordWrapper>
      ) : (
        <>
          <StImgWrapper>
            <StTitle>무야호</StTitle>
            <StBodyImg src={require('assets/img/detailPage/무야호.png')} alt="무야호"></StBodyImg>
            <StImgContent>
              무한도전 197화 '알레스카 편'에 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신
              의미불명의 말이다. 그만큼 신날때 사용하면 유용한 짤이다.
            </StImgContent>
            <StHashtagWrapper>
              <StHashTag>{imghashtag[0]}</StHashTag>
              <StHashTag>{imghashtag[1]}</StHashTag>
            </StHashtagWrapper>
            <StButtonWrapper>
              <StBottomBtn
                onClick={() => {
                  addWordLike(wordLike + 1);
                }}
              >
                <StButtonImg
                  src={require('assets/img/detailPage/like.png')}
                  alt="좋아요"
                ></StButtonImg>
                {wordLike}
              </StBottomBtn>

              <StBottomBtn
                onClick={() => {
                  addWordWarning(wordWarning + 1);
                }}
              >
                <StButtonImg
                  src={require('assets/img/detailPage/report.png')}
                  alt="신고"
                ></StButtonImg>
                {wordWarning}
              </StBottomBtn>

              <StBottomBtn>
                <StBookMarkImg
                  src={require('assets/img/detailPage/bookmark.png')}
                  alt="북마크"
                ></StBookMarkImg>
              </StBottomBtn>
            </StButtonWrapper>
          </StImgWrapper>

          <StReplyWrapper>
            <StCommentTitle>댓글 3개</StCommentTitle>
            <StComment type="text" placeholder="로그인 후 이용 가능합니다."></StComment>
            <StCommentBtn>등록</StCommentBtn>
          </StReplyWrapper>
        </>
      )}
    </>
  );
}

const StWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StWordInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StWordInfoWrapper = styled.div`
  display: flex;
  align-content: space-between;
`;

const StTitle = styled.h1`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 45px;
  margin: 50px;
`;

const CommonH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding-right: 40px;
  color: white;
`;

const StWordMeaning = styled(CommonH2)``;
const StWordExample = styled(CommonH2)``;

const StExampleWrapper = styled.div`
  display: flex;
`;

const StWordContent = styled.p`
  font-size: 30px;
  color: white;
  height: 188px;
  width: 900px;
  margin-bottom: 0;
  margin-top: -5px;
`;

const StHashtagWrapper = styled.div`
  display: flex;
  gap: 34px;
  justify-content: flex-start;
  width: 65%;
`;

const StHashTag = styled.div`
  background-color: #232332;
  color: white;
  border: 3px solid white;
  padding: 5px;
  width: fit-content;
  font-size: 25px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0 6px 19px 0;
`;
const StBottomBtn = styled.button`
  text-align: center;
  width: 70px;
  height: 40px;
  border-radius: 75px;
`;

const StButtonImg = styled.img`
  margin-bottom: -10px;
  width: 30px;
  height: 30px;
`;

const StBookMarkImg = styled.img`
  margin-bottom: -7px;
  width: 30px;
  height: 30px;
`;

const StImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StBodyImg = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 600px;
  height: 350px;
`;

const StImgContent = styled.p`
  padding: 0 185px;
  font-size: 25px;
  margin-bottom: 110px;
  color: white;
`;

const StReplyWrapper = styled.div`
  border-top: 1px solid white;
  padding: 20px;
  width: 97%;
  display: flex;
  justify-content: space-evenly;
`;

const StCommentTitle = styled.h3`
  color: white;
  position: relative;
  left: 50px;
  top: 10px;
`;

const StComment = styled.input`
  position: relative;
  padding-left: 10px;
  left: -60px;
  height: 30px;
  width: 800px;
  border-radius: 30px;
`;

const StCommentBtn = styled.button`
  position: relative;
  padding-bottom: 20px;
  height: 20px;
  right: 270px;
  top: 5px;
`;

const StCommentWrapper = styled.div`
  width: 900px;
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
export default DetailPage;
