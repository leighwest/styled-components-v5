import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';  // applies to entire project

import Login from './pages/Login';
import Home from './pages/Home';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

const GlobalStyle = createGlobalStyle`
 body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';    // this is added as a script to index.html
 }
`;



function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
      }
    }}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
