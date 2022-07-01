import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';  // applies to entire project

import { Button } from "components/common";

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
    <>
      <GlobalStyle />
      <h1>
        App
      </h1>
      <Button>
        Primary button
      </Button>
      <Button secondary>
        Secondary button
      </Button>
      <Button large>
        Large button
      </Button>
    </>

  );
}

export default App;
