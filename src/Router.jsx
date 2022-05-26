import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import SearchResultPage from './pages/SearchResultPage';
import DetailPage from './pages/DetailPage';
import MyPageupload from './pages/mypage/MyPageupload';
import MyPagebookmark from './pages/mypage/MyPagebookmark';
import MyPagecomment from './pages/mypage/MyPagecomment';
import MyPagepw from './pages/mypage/MyPagepw';
import UserUploadPage from './pages/UserUploadPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/detail/:type" element={<DetailPage />} />
      <Route path="/mypage/upload" element={<MyPageupload />} />
      <Route path="/mypage/bookmark" element={<MyPagebookmark />} />
      <Route path="/mypage/comment" element={<MyPagecomment />} />
      <Route path="/mypage/pw" element={<MyPagepw />} />
      <Route path="/upload" element={<UserUploadPage />} />
    </Routes>
  );
}
