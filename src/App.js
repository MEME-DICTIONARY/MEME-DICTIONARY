import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
