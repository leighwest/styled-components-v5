import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';  // applies to entire project

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
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
