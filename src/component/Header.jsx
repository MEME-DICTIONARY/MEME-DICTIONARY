import { useState } from 'react';
import { connect } from 'react-redux';
import styles from 'assets/style/header.module.css';
import { setLogout } from 'redux/action';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLogout: () => dispatch(setLogout()),
  };
};

function Header({ isLogin, setUserLogout }) {
  const [categoryClose, categoryOpen] = useState(styles.categoryModalHidden);
  const [logoutModalClose, logoutModal] = useState(styles.logModalHidden);
  const [loginModalClose, loginModal] = useState(styles.logModalHidden);
  const categoryArray = [
    'ㄱ',
    'ㄴ',
    'ㄷ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅅ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];

  function handleLoginModal() {
    if (!isLogin) {
      logoutModal(styles.logoutModal);
    } else if (isLogin) {
      loginModal(styles.loginModal);
    }
  }
  const navigator = useNavigate();

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      navigator('/search');
    }
  };

  return (
    <>
      <StHeadContainer>
        <StHamburgerBtn
          onClick={() => {
            categoryOpen(styles.categoryModal);
          }}
        >
          {' '}
          <StHamburgerImg
            src={require('assets/img/detailPage/hamburger.PNG')}
            alt="햄버거 아이콘"
          />{' '}
        </StHamburgerBtn>
        <Link to="/main">
          <StCircleWrapper>
            <StCircle1></StCircle1>
            <StCircle2></StCircle2>
            <StCircle3></StCircle3>
          </StCircleWrapper>
        </Link>
        <StSearchWrapper>
          <StSearchConatiner>
            <StSearchBox type="text" style={{ color: 'white' }} onKeyDown={onEnterPress} />
            <Link to="/search">
              <StSearchBtn>
                <StSearchImg src={require('assets/img/detailPage/search.PNG')} alt="검색아이콘" />
              </StSearchBtn>
            </Link>
          </StSearchConatiner>
          <StPersonBtn onClick={handleLoginModal}>
            <StPersonImg src={require('assets/img/detailPage/person.PNG')} alt="사람아이콘" />
          </StPersonBtn>
        </StSearchWrapper>
      </StHeadContainer>

      <div className={categoryClose}>
        <div
          className={styles.categoryModal_overlay}
          onClick={() => {
            categoryOpen(styles.categoryModalHidden);
          }}
        ></div>
        <div className={styles.categoryModal_content}>
          <h2 className={styles.category_title}>용어</h2>
          <hr />
          <div className={styles.categoryButton_container}>
            {categoryArray.map((category) => (
              <button className={styles.categoryButton_word} key={category}>
                <a href={`/search/단어/${category}`}>{category}</a>
              </button>
            ))}
          </div>
          <br />
          <h2 className={styles.category_title}>짤</h2>
          <hr />
          <div className={styles.categoryButton_container}>
            <button className={styles.categoryButton_img}>
              <a href={'/search/짤/TV'}>TV</a>
            </button>
            <button className={styles.categoryButton_img}>
              <a href={'/search/짤/영화'}>영화</a>
            </button>
            <button className={styles.categoryButton_img}>
              <a href={'/search/짤/커뮤니티'}>커뮤니티</a>
            </button>
            <button className={styles.categoryButton_img}>
              <a href={'/search/짤/기타'}>기타</a>
            </button>
          </div>
        </div>
      </div>

      <div className={logoutModalClose}>
        <div
          className={styles.logModal_overlay}
          onClick={() => {
            logoutModal(styles.logModalHidden);
          }}
        ></div>
        <ul className={styles.logoutModal_content}>
          <div className={styles.triangleOut}></div>
          <li className={styles.logModalList}>
            <Link to="/login" className={styles.logModalSelect}>
              로그인
            </Link>
          </li>
          <li className={styles.logModalList}>
            <Link to="/signup" className={styles.logModalSelect}>
              회원가입
            </Link>
          </li>
        </ul>
      </div>
      <div className={loginModalClose}>
        <div
          className={styles.logModal_overlay}
          onClick={() => {
            loginModal(styles.logModalHidden);
          }}
        ></div>
        <ul className={styles.loginModal_content}>
          <div className={styles.triangleIn}></div>
          <li className={styles.logModalList}>
            <Link to="/mypage/upload" className={styles.logModalSelect}>
              마이페이지
            </Link>
          </li>
          <li className={styles.logModalList}>
            <Link to="/upload" className={styles.logModalSelect}>
              밈 등록하기
            </Link>
          </li>
          <li
            className={styles.logModalList}
            onClick={() => {
              setUserLogout();
              loginModal(styles.logModalHidden);
            }}
          >
            <a href="/main"> 로그아웃</a>
          </li>
        </ul>
      </div>
    </>
  );
}

const StHeadContainer = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  align-items: center;
`;

const StHamburgerBtn = styled.button`
  margin-left: 50px;
  width: 37px;
  height: 35px;
  border: none;
  background-color: inherit;
`;

const StHamburgerImg = styled.img`
  width: 37px;
  height: 35px;
  background-size: cover;
`;

const StCircleWrapper = styled.a`
  display: flex;
  width: fit-content;
  margin-left: 290px;
`;

const StCircle1 = styled.div`
  background-color: #ff0043;
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 75px;
`;

const StCircle2 = styled.div`
  background-color: #d422ff;
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 75px;
`;
const StCircle3 = styled.div`
  background-color: #2737ff;
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 75px;
`;
const StSearchWrapper = styled.article`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
`;
const StSearchConatiner = styled.div`
  display: inline-block;
`;
const StSearchBox = styled.input`
  background-color: #232332;
  border: 1px solid white;
  border-radius: 10px;
  height: 50px;
  width: 282px;
  padding-left: 10px;
`;

const StSearchBtn = styled.button`
  position: relative;
  top: 10px;
  right: 50px;
  width: fit-content;
  border: none;
  background-color: inherit;
`;

const StSearchImg = styled.img`
  height: 30px;
  width: 30px;
`;

const StPersonBtn = styled.button`
  position: relative;
  right: 25px;
  width: fit-content;
  border: none;
  background-color: inherit;
`;
const StPersonImg = styled.img`
  height: 50px;
  width: 40px;
`;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
