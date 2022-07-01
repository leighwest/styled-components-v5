import { Button } from "components/common";
import { createGlobalStyle } from 'styled-components';  // applies to entire project

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
        Test
      </Button>
    </>

  );
}

export default App;
