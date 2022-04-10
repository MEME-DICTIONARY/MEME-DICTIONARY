import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

    </Routes>
  );
}

export default App;
