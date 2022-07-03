import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';  // applies to entire project

import Login from './pages/Login';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
 body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';    // this is added as a script to index.html
 }
`;

const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
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
