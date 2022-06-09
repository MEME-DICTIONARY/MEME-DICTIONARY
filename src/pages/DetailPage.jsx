import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  getDetailContent,
  postDetailBookMark,
  postDetailLikes,
  postDetailComment,
  postDetailReport,
  postDelete,
  postForbiddenWord,
} from '../api/posts';
import { default as icReport } from '../assets/img/icon_report.svg';
import Comment from '../component/detailpage/Comment';
import { useRecoilState } from 'recoil';
import { tokenState, isLoginState } from 'stores';
import BaseModal from '../component/base/BaseModal';

function DetailPage() {
  let navigate = useNavigate();
  let params = useParams();

  const token = useRecoilState(tokenState)[0];
  const isLogin = useRecoilState(isLoginState)[0];
  const [detailInfo, setDetailInfo] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalContents, setModalContents] = useState('');

  const handleDetailPage = async () => {
    const { data } = await getDetailContent(params.postId);
    setDetailInfo(data);
  };

  const onClickLikeButton = async () => {
    await postDetailLikes(params.postId);
  };

  const onClickBookMarkButton = async () => {
    await postDetailBookMark(params.postId);
  };

  const onClickReportButton = async () => {
    await postDetailReport(params.postId);
  };

  const handleDelete = async () => {
    await postDelete(params.postId, token);
  };

  const handleForbiddenWord = async (word) => {
    await postForbiddenWord(word);
  };
  const postComment = async (input) => {
    if (input) {
      await postDetailComment(token, params.postId, input);
      window.location.reload();
    }
  };

  const handleReport = async () => {
    if (detailInfo.report >= 2) {
      handleDelete();
      handleForbiddenWord(detailInfo.title);
      navigate('/main');
    }
  };

  useEffect(() => {
    handleDetailPage();
  }, []);

  return (
    <>
      <Header />
      <BaseModal
        hidden={!showModal}
        content={modalContents}
        hideModal={() => {
          setShowModal(false);
        }}
      />
      {detailInfo && params.type === 'word' && (
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
                  setDetailInfo({ ...detailInfo, likes: detailInfo.likes + 1 });
                  onClickLikeButton();
                }}
              ></StButtonImg>
              {detailInfo.likes}
            </StBottomBtn>

            <StBottomBtn>
              <img
                src={icReport}
                alt="신고하기"
                width="30"
                height="30"
                onClick={() => {
                  setDetailInfo({ ...detailInfo, report: detailInfo.report + 1 });
                  onClickReportButton();
                  handleReport();
                }}
              />
              {detailInfo.report}
            </StBottomBtn>

            <StBottomBtn>
              <StBookMarkImg
                src={require('assets/img/detailPage/bookmark.png')}
                alt="북마크"
                onClick={() => {
                  onClickBookMarkButton();
                }}
              ></StBookMarkImg>
            </StBottomBtn>
          </StButtonWrapper>
          <Comment
            commentInfo={detailInfo && detailInfo.comments}
            postComment={(input) => {
              if (!isLogin) {
                setShowModal(true);
                setModalContents('로그인 후 댓글 이용이 가능합니다.');
              }
              postComment(input);
            }}
            placeholder={isLogin ? '댓글을 작성해주세요!' : '로그인 후 댓글 이용이 가능합니다.'}
          />
        </StWordWrapper>
      )}
      {detailInfo && params.type === 'image' && (
        <>
          <StImgWrapper>
            <StTitle>무야호</StTitle>
            <StBodyImg src={require('assets/img/detailPage/무야호.png')} alt="무야호"></StBodyImg>
            <StImgContent>
              무한도전 197화 '알레스카 편'에 방영된 장면으로, 무한도전을 안다고 얘기하신 뒤 외치신
              의미불명의 말이다. 그만큼 신날때 사용하면 유용한 짤이다.
            </StImgContent>
            <StHashtagWrapper>
              <StHashTag>{detailInfo.keyw}</StHashTag>
              {detailInfo.keyww && <StHashTag>{detailInfo.keyww}</StHashTag>}
              {detailInfo.keywww && <StHashTag>{detailInfo.keywww}</StHashTag>}
            </StHashtagWrapper>
            <StButtonWrapper>
              <StBottomBtn
                onClick={() => {
                  setDetailInfo({ ...detailInfo, likes: detailInfo.likes + 1 });
                }}
              >
                <StButtonImg
                  src={require('assets/img/detailPage/like.png')}
                  alt="좋아요"
                ></StButtonImg>
                {detailInfo.likes}
              </StBottomBtn>

              <StBottomBtn>
                <img
                  src={icReport}
                  alt="신고하기"
                  width="30"
                  height="30"
                  onClick={() => {
                    setDetailInfo({ ...detailInfo, report: detailInfo.report + 1 });
                  }}
                />
              </StBottomBtn>

              <StBottomBtn>
                <StBookMarkImg
                  src={require('assets/img/detailPage/bookmark.png')}
                  alt="북마크"
                  onClick={() => {
                    onClickBookMarkButton();
                  }}
                ></StBookMarkImg>
              </StBottomBtn>
            </StButtonWrapper>
          </StImgWrapper>

          <Comment
            commentInfo={detailInfo && detailInfo.comment}
            postComment={(input) => {
              if (!isLogin) {
                setShowModal(true);
                setModalContents('로그인 후 댓글 이용이 가능합니다.');
              }
              postComment(input);
            }}
          />
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
export default DetailPage;
