import styled, { ThemeProvider } from 'styled-components';
import Button from './Components/Button';

// styled-components
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button color='gray' size='samll'>
            BUTTON
          </Button>
          <Button>BUTTON</Button>
          <Button color='pink' size='large'>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
