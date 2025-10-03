import logo from './logo.svg';
import Home from './pages/Home';
import { AppContainer, AppHeader, AppLogo } from './App';
import GlobalStyle from './GlobalStyle';
import ExposeForm from './pages/ExposeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheatList from './pages/CheatList';

function App() {
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <Router>
        <Routes>
        <Route path='/' element={<><Home/><ExposeForm/></>}/>
        <Route path='/cheatlist' element={<CheatList/>}/>
        </Routes>
      </Router>
    </AppContainer>
    </>
    
  );
}

export default App;
