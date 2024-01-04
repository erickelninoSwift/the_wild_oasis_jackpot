import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 45px;
  font-weight: 600;
  color: red;
  background-color: yellow;
  padding: 10px;
`;

const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello Guys Jackpot here</H1>
      </StyledApp>
    </>
  );
}

export default App;
