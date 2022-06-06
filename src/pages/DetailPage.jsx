import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import styled from 'styled-components';
import { getDetailContent, postDetailBookMark, postDetailLikes } from '../api/posts';
import { default as icReport } from '../assets/img/icon_report.svg';
import Comment from '../component/detailpage/Comment';

function DetailPage() {
  const [imghashtag] = useState(['#무야호', '#무한도전']);

  const [wordLike, addWordLike] = useState(null);
  const [wordWarning, addWordWarning] = useState(null);
  const [wordBookMark, addWordBookMark] = useState(null);
  const [detailInfo, setDetailInfo] = useState(null);

  let params = useParams();

  const handleDetailPage = async () => {
    const { data } = await getDetailContent(params.postId);
    console.log(data);
    setDetailInfo(data);
    addWordLike(data.likes);
    addWordBookMark(data.bookmark_cnt);
  };

  const onClickLikeButton = async () => {
    await postDetailLikes(params.postId);
  };

  const onClickBookMarkButton = async () => {
    await postDetailBookMark(params.postId);
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
            {detailInfo.keyww && <StHashTag>{detailInfo.keyww}</StHashTag>}
            {detailInfo.keywww && <StHashTag>{detailInfo.keywww}</StHashTag>}
          </StHashtagWrapper>

          <StButtonWrapper>
            <StBottomBtn>
              <StButtonImg
                src={require('assets/img/detailPage/like.png')}
                alt="좋아요"
                onClick={() => {
                  addWordLike(wordLike + 1);
                  onClickLikeButton();
                }}
              ></StButtonImg>
              {wordLike}
            </StBottomBtn>

            <StBottomBtn>
              <img
                src={icReport}
                alt="신고하기"
                width="30"
                height="30"
                onClick={() => {
                  addWordWarning(wordWarning + 1);
                }}
              />

              {wordWarning}
            </StBottomBtn>

            <StBottomBtn>
              <StBookMarkImg
                src={require('assets/img/detailPage/bookmark.png')}
                alt="북마크"
                onClick={() => {
                  addWordBookMark(wordBookMark + 1);
                  onClickBookMarkButton();
                }}
              ></StBookMarkImg>
              {wordBookMark}
            </StBottomBtn>
          </StButtonWrapper>
          <Comment />
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

          <Comment />
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
  align-items: center;
  width: 100%;
`;
const StTitle = styled.h1`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 45px;
  margin: 50px;
`;
const FlexGap40 = styled.div`
  display: flex;
  gap: 40px;
`;
const StWordInfoWrapper = styled(FlexGap40)``;
const StExampleWrapper = styled(FlexGap40)``;

const CommonH2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const StWordMeaning = styled(CommonH2)``;
const StWordExample = styled(CommonH2)``;

const StWordContent = styled.p`
  font-size: 30px;
  color: white;
  height: 188px;
  width: 900px;
  margin-bottom: 0;
  margin-top: -5px;
  letter-spacing: 1px;
  line-height: 30px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: -5px;
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
export default DetailPage;
