import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchResultPage from './pages/SearchResultPage';
import DetailPage from './pages/DetailPage';
import MyPageupload from './pages/MyPageupload';
import MyPagebookmark from './pages/MyPagebookmark';
import MyPagecomment from './pages/MyPagecomment';
import MyPagepw from './pages/MyPagepw';
import UserUploadPage from './pages/UserUploadPage';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/mypage/upload" element={<MyPageupload />} />
        <Route path="/mypage/bookmark" element={<MyPagebookmark />} />
        <Route path="/mypage/comment" element={<MyPagecomment />} />
        <Route path="/mypage/pw" element={<MyPagepw />} />
        <Route path="/upload" element={<UserUploadPage />} />
      </Routes>
    </>
  );
}

export default App;
