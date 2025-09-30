import logo from './logo.svg';
import Home from './pages/Home';
import { AppContainer, AppHeader, AppLogo } from './App';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      {/* <AppLogo src={logo} alt="logo" spin /> */}
      <Home />
    </AppContainer>
    </>
    
  );
}

export default App;
