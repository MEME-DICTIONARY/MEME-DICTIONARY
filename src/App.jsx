import Router from './Router';
import GlobalStyles from './GlobalStyle';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Router />
    </RecoilRoot>
  );
}

export default App;
