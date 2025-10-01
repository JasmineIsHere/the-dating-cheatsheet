import logo from './logo.svg';
import Home from './pages/Home';
import { AppContainer, AppHeader, AppLogo } from './App';
import GlobalStyle from './GlobalStyle';
import ExposeForm from './pages/ExposeForm';

function App() {
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <Home />
      <ExposeForm />
    </AppContainer>
    </>
    
  );
}

export default App;
