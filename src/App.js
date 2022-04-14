import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SearchResultPage from "./pages/SearchResultPage";
import DetailPage from "./pages/DetailPage";
import MyPage_upload from "./pages/MyPage_upload";
import MyPage_bookmark from "./pages/MyPage_bookmark";
import MyPage_comment from "./pages/MyPage_comment";
import MyPage_pw from "./pages/MyPage_pw";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/mypage/upload" element={<MyPage_upload />} />
      <Route path="/mypage/bookmark" element={<MyPage_bookmark />} />
      <Route path="/mypage/comment" element={<MyPage_comment />} />
      <Route path="/mypage/pw" element={<MyPage_pw />} />

    </Routes>
  );
}

export default App;
